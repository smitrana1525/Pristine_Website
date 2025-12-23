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
  const metaDescription =
    blog?.strMetaDescription || blog?.strDescription || "";
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
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 sm:pb-16 md:pt-32 md:pb-20 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {isLoading && (
                <div className="space-y-6">
                  <div className="h-8 w-2/3 bg-muted rounded-lg animate-pulse" />
                  <div className="h-4 w-1/3 bg-muted rounded-lg animate-pulse" />
                  <div className="h-64 w-full bg-muted rounded-2xl animate-pulse" />
                </div>
              )}

              {!isLoading && hasError && !blog && (
                <Card className="p-8 bg-white">
                  <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-2 tracking-tight">
                    Blog not found
                  </h1>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The article you're looking for may have been moved or
                    unpublished.
                  </p>
                  <Button asChild>
                    <Link to="/blog">View all articles</Link>
                  </Button>
                </Card>
              )}

              {!isLoading && blog && (
                <article>
                  <header className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
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
                      <Button variant="ghost" className="px-3 sm:ml-auto self-start sm:self-auto" asChild>
                        <Link
                          to="/blog"
                          className="inline-flex items-center text-sm"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to all articles
                        </Link>
                      </Button>
                    </div>

                    {blog.strCategoryName && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5">
                          <Tag className="w-3 h-3" />
                          {blog.strCategoryName}
                        </span>
                      </div>
                    )}

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4 leading-tight">
                      {blog.strTitle}
                    </h1>

                    {blog.strDescription && (
                      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        {blog.strDescription}
                      </p>
                    )}
                  </header>

                  {blog.strBlogImage && (
                    <div className="mb-0">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
                        <img
                          src={blog.strBlogImage}
                          alt={blog.strTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </article>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        {!isLoading && blog && (
          <section className="py-0 sm:py-0 lg:py-0 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <LexicalContent
                  serializedContent={blog.strBlogContent}
                  fallbackText={blog.strDescription}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
