import type { CSSProperties, JSX } from "react";

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

        const style: CSSProperties = {};
        if (typeof node.style === "string" && node.style.trim().length > 0) {
          node.style
            .split(";")
            .map((pair: string) => pair.trim())
            .filter(Boolean)
            .forEach((pair: string) => {
              const [prop, value] = pair.split(":").map((p) => p.trim());
              if (!prop || !value) return;
              const camelProp = prop.replace(/-([a-z])/g, (_, c) =>
                c ? c.toUpperCase() : "",
              );
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (style as any)[camelProp] = value;
            });
        }

        let element: JSX.Element = (
          <span key={key} style={style}>
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
      case "paragraph":
        return [
          <p key={key} className="mb-4 leading-relaxed text-muted-foreground">
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </p>,
        ];
      case "heading": {
        const TagName = (node.tag || "h2") as keyof JSX.IntrinsicElements;
        return [
          <TagName
            key={key}
            className="mt-8 mb-3 text-2xl sm:text-3xl font-heading font-bold tracking-tight"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </TagName>,
        ];
      }
      case "quote":
        return [
          <blockquote
            key={key}
            className="my-4 border-l-4 border-primary/40 pl-4 italic text-muted-foreground"
          >
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </blockquote>,
        ];
      case "list": {
        const TagName =
          (node.tag === "ol" ? "ol" : node.tag === "ul" ? "ul" : "ul") as
            | "ul"
            | "ol";
        const className =
          TagName === "ol"
            ? "mb-4 ml-6 list-decimal space-y-1"
            : "mb-4 ml-6 list-disc space-y-1";
        return [
          <TagName key={key} className={className}>
            {node.children ? renderLexicalNodes(node.children, key) : null}
          </TagName>,
        ];
      }
      case "listitem":
        return [
          <li key={key}>
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

        return [
          <div key={key} className="my-6">
            <img
              src={src}
              alt={altText}
              className="rounded-xl shadow-sm"
              style={{
                maxWidth: "100%",
                height: height ? `${height}px` : "auto",
                width: width ? `${width}px` : "auto",
              }}
            />
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
      return <div className="mt-8 text-base sm:text-lg">{nodes}</div>;
    } catch {
      // fall through to fallback text
    }
  }

  if (fallbackText) {
    return (
      <p className="mt-8 text-muted-foreground whitespace-pre-line">
        {fallbackText}
      </p>
    );
  }

  return null;
};


