import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Pristine - Owners Association Management Services | UAE",
  description = "Professional owners association management services in UAE. Over 20 years of excellence in community management, financial services, facilities management, and compliance.",
  keywords = "owners association management, community management UAE, property management Dubai, HOA management, facilities management, financial management services, RERA compliance, community engagement, property services UAE",
  image = "/og-image.jpg",
  url,
  type = "website",
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = "https://pristine.ae"; // Update with your actual domain
  const currentUrl = url || `${siteUrl}${location.pathname}`;
  const fullTitle = title.includes("Pristine") ? title : `${title} | Pristine Management Services`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Pristine Owners Association Management Services");

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", `${siteUrl}${image}`, true);
    updateMetaTag("og:site_name", "Pristine Management Services", true);
    updateMetaTag("og:locale", "en_AE", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${siteUrl}${image}`);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [fullTitle, description, keywords, image, currentUrl, type, structuredData]);

  return null;
};

export default SEO;

