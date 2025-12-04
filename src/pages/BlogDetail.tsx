import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BlogApiItem, fetchBlogBySlug } from "@/api/blog";
import { LexicalContent } from "@/components/lexical-content";
import SEO from "@/components/SEO";

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

  // Extract metadata with fallbacks
  const metaTitle = blog?.strMetaTitle || blog?.strTitle || "";
  const metaDescription = blog?.strMetaDescription || blog?.strDescription || "";
  const metaKeywords = blog?.strMetaKeywords || "";
  
  // Extract relative path from blog image URL for SEO component
  // (SEO component expects relative path and will prepend siteUrl)
  const getImagePath = (imageUrl?: string | null): string | undefined => {
    if (!imageUrl) return undefined;
    try {
      const url = new URL(imageUrl);
      return url.pathname; // Returns path like "/Uploads/Blogs/..."
    } catch {
      // If it's already a relative path, return as is
      return imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
    }
  };
  
  const ogImage = getImagePath(blog?.strBlogImage);
  const blogUrl = blog?.strSlug ? `/blog/${blog.strSlug}` : undefined;

  return (
    <>
      {blog && (
        <SEO
          title={metaTitle}
          description={metaDescription}
          keywords={metaKeywords}
          image={ogImage}
          url={blogUrl}
          type="article"
        />
      )}
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
                  The article you're looking for may have been moved or unpublished.
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

              <LexicalContent
                serializedContent={blog.strBlogContent}
                fallbackText={blog.strDescription}
              />
            </article>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetail;


