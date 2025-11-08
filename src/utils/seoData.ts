// SEO data for each page
export const seoConfig = {
  home: {
    title: "Pristine - Owners Association Management Services | UAE",
    description: "Professional owners association management services in UAE. Over 20 years of excellence in community management, financial services, facilities management, and compliance. Building better communities together.",
    keywords: "owners association management, community management UAE, property management Dubai, HOA management, facilities management, financial management services, RERA compliance, community engagement, property services UAE, pristine management",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Pristine Owners Association Management Services",
      "alternateName": "Pristine Management",
      "url": "https://pristine.ae",
      "logo": "https://pristine.ae/pristine-logo.png",
      "description": "Professional owners association management services in UAE with over 20 years of excellence",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-XX-XXX-XXXX",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      },
      "sameAs": [
        "https://www.facebook.com/pristinemanagement",
        "https://www.linkedin.com/company/pristinemanagement",
        "https://twitter.com/pristinemanagement"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    }
  },
  about: {
    title: "About Us - Pristine Management Services | 20+ Years of Excellence",
    description: "Learn about Pristine Management Services - established in 2004, we provide comprehensive owners association management across UAE. CAI Certified and RERA Registered.",
    keywords: "about pristine management, community management company UAE, property management history, owners association experts, RERA registered, CAI certified",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Pristine Management Services",
      "description": "Pristine Management Services - Established in 2004, providing excellence in owners association management",
      "mainEntity": {
        "@type": "Organization",
        "name": "Pristine Owners Association Management Services",
        "foundingDate": "2004",
        "numberOfEmployees": "50-100"
      }
    }
  },
  services: {
    title: "Our Services - Comprehensive Community Management Solutions | Pristine",
    description: "Comprehensive owners association management services including financial management, facilities operations, health & safety compliance, community engagement, and technology solutions across UAE.",
    keywords: "owners association services, community management services, financial management, facilities management, HSE compliance, community engagement, technology solutions, property management services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Owners Association Management",
      "provider": {
        "@type": "Organization",
        "name": "Pristine Owners Association Management Services"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Community Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Owners Association Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Financial & Administrative Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facilities & Operations Management"
            }
          }
        ]
      }
    }
  },
  contact: {
    title: "Contact Us - Get in Touch | Pristine Management Services",
    description: "Contact Pristine Management Services for owners association management solutions. Located in Dubai, UAE. Get a consultation today.",
    keywords: "contact pristine management, owners association contact, property management Dubai, community management UAE, get quote, consultation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Pristine Management Services",
      "description": "Get in touch with Pristine for owners association management services",
      "mainEntity": {
        "@type": "Organization",
        "name": "Pristine Owners Association Management Services",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-XX-XXX-XXXX",
          "contactType": "Customer Service",
          "email": "info@pristine.ae"
        }
      }
    }
  }
};

// Generate structured data for service pages
export const generateServiceStructuredData = (serviceName: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Pristine Owners Association Management Services",
      "url": "https://pristine.ae"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "url": url
  };
};

