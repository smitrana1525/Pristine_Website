import type { CSSProperties, JSX } from "react";

// Map Lexical alignment (format/align) to Tailwind text alignment
const getAlignClass = (format?: string): string => {
  switch (format) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "justify":
      return "text-justify";
    default:
      return "text-left";
  }
};

// Parse Lexical style string (e.g. "background-color: #fff; color: red;") into a CSSProperties object
// Excludes font-family to allow theme fonts to apply
const parseStyleString = (styleString?: string | null): CSSProperties => {
  const style: CSSProperties = {};
  if (!styleString || typeof styleString !== "string") return style;

  styleString
    .split(";")
    .map((pair) => pair.trim())
    .filter(Boolean)
    .forEach((pair) => {
      const [prop, value] = pair.split(":").map((p) => p.trim());
      if (!prop || !value) return;
      
      // Skip font-family to allow theme fonts to apply
      if (prop.toLowerCase() === "font-family" || prop.toLowerCase() === "fontFamily") {
        return;
      }
      
      const camelProp = prop.replace(/-([a-z])/g, (_, c) =>
        c ? c.toUpperCase() : "",
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (style as any)[camelProp] = value;
    });

  return style;
};

// Very lightweight renderer for Lexical JSON -> semantic HTML structure
// without pulling the full editor runtime on the public site.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderLexicalNodes = (nodes: any[], keyPrefix = ""): JSX.Element[] =>
  nodes.flatMap((node, index) => {
    const key = `${keyPrefix}-${index}`;
    if (!node) return [];

    switch (node.type) {
      case "text": {
        const format = typeof node.format === "number" ? node.format : 0;
        const isBold = (format & 1) !== 0;
        const isItalic = (format & 2) !== 0;
        const isUnderline = (format & 4) !== 0;
        const isStrikethrough = (format & 8) !== 0;
        const isCode = (format & 16) !== 0;
        const isSubscript = (format & 32) !== 0;
        const isSuperscript = (format & 64) !== 0;

        const style: CSSProperties = parseStyleString(node.style);

        let element: JSX.Element = (
          <span key={key} style={style} className="text-foreground">
            {node.text}
          </span>
        );

        if (isUnderline || isStrikethrough) {
          let className = "";
          if (isUnderline) className += " underline";
          if (isStrikethrough) className += " line-through";
          element = (
            <span key={key} className={className.trim()}>
              {element}
            </span>
          );
        }

        if (isItalic) {
          element = <em key={key}>{element}</em>;
        }

        if (isBold) {
          element = <strong key={key}>{element}</strong>;
        }

        if (isCode) {
          element = (
            <code
              key={key}
              className="rounded bg-muted px-1 py-0.5 font-mono text-xs"
            >
              {element}
            </code>
          );
        }

        if (isSubscript) {
          element = <sub key={key}>{element}</sub>;
        }

        if (isSuperscript) {
          element = <sup key={key}>{element}</sup>;
        }

        return [element];
      }
      case "linebreak":
        return [<br key={key} />];
      case "overflow": {
        // Overflow nodes are typically wrappers for text with special styling
        // Render their children directly
        if (node.children) {
          return renderLexicalNodes(node.children, key);
        }
        return [];
      }
      case "paragraph": {
        const alignClass = getAlignClass(
          typeof node.format === "string" ? node.format : (node.align as string | undefined),
        );
        const blockStyle = parseStyleString(node.textStyle);

        return [
          <p
            key={key}
            className={`mb-4 leading-relaxed text-foreground ${alignClass}`.trim()}
            style={blockStyle}
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </p>,
        ];
      }
      case "heading": {
        const TagName = (node.tag || "h2") as keyof JSX.IntrinsicElements;
        const isH2 = TagName === "h2";
        const isH3 = TagName === "h3";

        const alignClass = getAlignClass(
          typeof node.format === "string" ? node.format : (node.align as string | undefined),
        );
        const blockStyle = parseStyleString(node.textStyle);

        // Apply different sizes based on heading level
        const sizeClass = isH2 
          ? "text-2xl sm:text-3xl md:text-4xl" 
          : isH3 
          ? "text-xl sm:text-2xl md:text-3xl"
          : "text-lg sm:text-xl md:text-2xl";

        return [
          <TagName
            key={key}
            className={`mt-8 mb-4 font-heading font-bold tracking-tight ${sizeClass} ${alignClass}`.trim()}
            style={blockStyle}
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </TagName>,
        ];
      }
      case "quote":
        return [
          <blockquote
            key={key}
            className="my-4 border-l-4 border-primary/40 pl-4 italic text-foreground leading-relaxed"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </blockquote>,
        ];
      case "list": {
        const TagName =
          (node.tag === "ol" ? "ol" : node.tag === "ul" ? "ul" : "ul") as
            | "ul"
            | "ol";
        // For checklists, we render a styled list but the checkbox itself is part of list items
        const isCheckList = node.listType === "check";
        const className = isCheckList
          ? "mb-4 ml-6 space-y-2 text-foreground"
          : TagName === "ol"
            ? "mb-4 ml-6 list-decimal space-y-2 text-foreground"
            : "mb-4 ml-6 list-disc space-y-2 text-foreground";
        const blockStyle = parseStyleString(node.textStyle);
        return [
          <TagName key={key} className={className} style={blockStyle}>
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </TagName>,
        ];
      }
      case "listitem":
        // Support checklist items created by the CheckListPlugin
        if (node.checked === true || node.checked === false) {
          return [
            <li key={key} className="flex items-start gap-2 text-foreground leading-relaxed">
              <input
                type="checkbox"
                checked={!!node.checked}
                readOnly
                className="mt-1 h-4 w-4 rounded border-muted-foreground/40"
              />
              <div className="flex-1">
                {node.children ? renderLexicalNodes(node.children, key) : null}
              </div>
            </li>,
          ];
        }

        return [
          <li key={key} className="text-foreground leading-relaxed">
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </li>,
        ];
      case "link": {
        const url = typeof node.url === "string" ? node.url : "#";
        return [
          <a
            key={key}
            href={url}
            className="text-primary underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </a>,
        ];
      }
      case "image": {
        const altText = node.altText ?? "";
        const src = node.src ?? "";
        const width =
          typeof node.width === "number" && node.width > 0
            ? node.width
            : undefined;
        const height =
          typeof node.height === "number" && node.height > 0
            ? node.height
            : undefined;
        if (!src) return [];

        // Images are usually wrapped inside a paragraph node which carries the block alignment
        // (left/center/right) and background styles. To preserve that behavior, we render the
        // image inline and let the parent paragraph's text alignment control positioning.
        const inlineStyle: CSSProperties = {
          maxWidth: "100%",
          height: height ? `${height}px` : "auto",
          width: width ? `${width}px` : "auto",
        };

        return [
          <img
            key={key}
            src={src}
            alt={altText}
            className="my-6 rounded-xl shadow-sm inline-block"
            style={inlineStyle}
          />,
        ];
      }
      case "code": {
        const language =
          typeof node.language === "string" && node.language.length > 0
            ? node.language
            : undefined;
        return [
          <pre
            key={key}
            className="my-4 overflow-x-auto rounded-md bg-muted px-4 py-3 text-sm font-mono"
          >
            <code data-language={language}>
              {node.children ? renderLexicalNodes(node.children, key) : null}
            </code>
          </pre>,
        ];
      }
      case "horizontalrule":
      case "horizontal-rule":
        return [<hr key={key} className="my-6 border-border/60" />];
      case "table":
        return [
          <div key={key} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>{node.children ? renderLexicalNodes(node.children, key) : null}</tbody>
            </table>
          </div>,
        ];
      case "tablerow":
      case "tableRow":
        return [
          <tr key={key}>
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </tr>,
        ];
      case "tablecell":
      case "tableCell":
      case "tableCellHeader": {
        const isHeader = node.type === "tableCellHeader" || node.header === true;
        const CellTag = (isHeader ? "th" : "td") as "th" | "td";
        return [
          <CellTag
            key={key}
            className="border border-border/60 px-3 py-2 align-top"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </CellTag>,
        ];
      }
      // Layout columns created by the LayoutPlugin
      case "layout-container":
        return [
          <div
            key={key}
            className="my-6 grid gap-6 md:grid-cols-2"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </div>,
        ];
      case "layout-item":
        return [
          <div key={key}>
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </div>,
        ];
      // Embeds (Twitter / YouTube) created by AutoEmbed/Twitter/YouTube plugins.
      // We render them as responsive iframes when URL is available, otherwise as links.
      case "tweet": {
        const url = typeof node.url === "string" ? node.url : "";
        if (!url) {
          return [];
        }
        const alignClass = getAlignClass(
          typeof node.format === "string" ? node.format : (node.align as string | undefined),
        );
        const justify =
          alignClass === "text-center"
            ? "justify-center"
            : alignClass === "text-right"
              ? "justify-end"
              : "justify-start";
        return [
          <div key={key} className={`my-6 flex ${justify}`}>
            <blockquote className="twitter-tweet">
              <a href={url}>{url}</a>
            </blockquote>
          </div>,
        ];
      }
      case "youtube": // generic name
      case "youtube-video": {
        // Editor X YouTube node may store either url or videoID; normalise to embed URL
        let url: string | undefined =
          typeof node.url === "string" && node.url.length > 0 ? node.url : undefined;
        if (!url && typeof node.videoID === "string" && node.videoID.length > 0) {
          url = `https://www.youtube.com/embed/${node.videoID}`;
        }
        if (!url) return [];

        const alignClass = getAlignClass(
          typeof node.format === "string" ? node.format : (node.align as string | undefined),
        );
        const justify =
          alignClass === "text-center"
            ? "justify-center"
            : alignClass === "text-right"
              ? "justify-end"
              : "justify-start";

        return [
          <div
            key={key}
            className={`my-6 flex ${justify}`}
          >
            <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-xl">
            <iframe
              src={url}
              title="YouTube video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            </div>
          </div>,
        ];
      }
      default:
        if (node.children) {
          return renderLexicalNodes(node.children, key);
        }
        return [];
    }
  });

interface LexicalContentProps {
  serializedContent?: string | null;
  fallbackText?: string | null;
}

export const LexicalContent = ({
  serializedContent,
  fallbackText,
}: LexicalContentProps): JSX.Element | null => {
  if (!serializedContent && !fallbackText) return null;

  if (serializedContent) {
    try {
      const parsed = JSON.parse(serializedContent);
      const rootChildren = parsed?.root?.children ?? [];
      const nodes = renderLexicalNodes(rootChildren, "root");
      return (
        <div className="prose prose-lg max-w-none text-base sm:text-lg leading-relaxed">
          {nodes}
        </div>
      );
    } catch {
      // fall through to fallback text
    }
  }

  if (fallbackText) {
    return (
      <p className="text-foreground leading-relaxed whitespace-pre-line">
        {fallbackText}
      </p>
    );
  }

  return null;
};


