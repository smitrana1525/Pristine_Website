import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlogApiItem, fetchBlogBySlug } from "@/api/blog";

const formatBlogDate = (isoDate?: string | null) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// Very lightweight renderer for Lexical JSON -> basic HTML structure
// This avoids pulling in the full editor while still showing readable content.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLexicalNodes = (nodes: any[], keyPrefix = ""): JSX.Element[] =>
  nodes.flatMap((node, index) => {
    const key = `${keyPrefix}-${index}`;
    if (!node) return [];

    switch (node.type) {
      case "text":
        return [<span key={key}>{node.text}</span>];
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
      // Support Lexical image nodes so inline images from the editor
      // appear on the public website detail page.
      case "image": {
        const altText = node.altText ?? "";
        const src = node.src ?? "";
        const width = typeof node.width === "number" && node.width > 0 ? node.width : undefined;
        const height = typeof node.height === "number" && node.height > 0 ? node.height : undefined;
        if (!src) return [];

        // Use the width/height captured from the editor so that resized images
        // render at (approximately) the same size on the public website.
        // We keep the image left‑aligned, matching the admin editor behaviour.
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

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogApiItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadBlog = async () => {
      if (!slug) return;
      try {
        setIsLoading(true);
        setHasError(false);
        const result = await fetchBlogBySlug(slug);
        if (!isMounted) return;
        if (!result) {
          setHasError(true);
          return;
        }
        setBlog(result);
      } catch (error) {
        console.error("Failed to load blog detail", error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadBlog();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  let content: JSX.Element | null = null;

  if (blog?.strBlogContent) {
    try {
      const parsed = JSON.parse(blog.strBlogContent);
      const rootChildren = parsed?.root?.children ?? [];
      const nodes = renderLexicalNodes(rootChildren, "root");
      content = <div className="mt-8 text-base sm:text-lg">{nodes}</div>;
    } catch {
      content = (
        <p className="mt-8 text-muted-foreground whitespace-pre-line">
          {blog.strDescription}
        </p>
      );
    }
  } else if (blog?.strDescription) {
    content = (
      <p className="mt-8 text-muted-foreground whitespace-pre-line">
        {blog.strDescription}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" className="px-3" asChild>
              <Link to="/blog" className="inline-flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all articles
              </Link>
            </Button>
          </div>

          {isLoading && (
            <div className="space-y-6">
              <div className="h-8 w-2/3 bg-muted rounded-lg animate-pulse" />
              <div className="h-4 w-1/3 bg-muted rounded-lg animate-pulse" />
              <div className="h-64 w-full bg-muted rounded-3xl animate-pulse" />
            </div>
          )}

          {!isLoading && hasError && !blog && (
            <Card className="p-8">
              <h1 className="text-2xl font-heading font-bold mb-2">
                Blog not found
              </h1>
              <p className="text-muted-foreground mb-4">
                The article you’re looking for may have been moved or unpublished.
              </p>
              <Button asChild>
                <Link to="/blog">View all articles</Link>
              </Button>
            </Card>
          )}

          {!isLoading && blog && (
            <article>
              <header className="mb-10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatBlogDate(blog.dtPublishedOn)}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.strAuthorName}</span>
                  </div>
                  {blog.readingTimeMinutes && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{blog.readingTimeMinutes} min read</span>
                    </>
                  )}
                </div>

                {blog.strCategoryName && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5">
                      <Tag className="w-3 h-3" />
                      {blog.strCategoryName}
                    </span>
                  </div>
                )}

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4">
                  {blog.strTitle}
                </h1>

                {blog.strDescription && (
                  <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                    {blog.strDescription}
                  </p>
                )}
              </header>

              {blog.strBlogImage && (
                <div className="mb-10">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={blog.strBlogImage}
                      alt={blog.strTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {content}
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;


