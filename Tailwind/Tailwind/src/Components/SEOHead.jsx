import { useEffect } from "react";

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  structuredData,
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Update basic meta tags
    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description, true);
      updateMetaTag("twitter:description", description);
    }

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag("og:title", title, true);
      updateMetaTag("twitter:title", title);
    }

    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
      updateMetaTag("twitter:image", ogImage);
    }

    if (ogType) {
      updateMetaTag("og:type", ogType, true);
    }

    if (canonicalUrl) {
      updateMetaTag("og:url", canonicalUrl, true);
      updateMetaTag("twitter:url", canonicalUrl);

      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", canonicalUrl);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector(
        'script[type="application/ld+json"]#page-structured-data'
      );
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("id", "page-structured-data");
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Cleanup function
    return () => {
      // Remove page-specific structured data when component unmounts
      const script = document.querySelector(
        'script[type="application/ld+json"]#page-structured-data'
      );
      if (script) {
        script.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType,
    structuredData,
  ]);

  return null; // This component doesn't render anything
};

export default SEOHead;
