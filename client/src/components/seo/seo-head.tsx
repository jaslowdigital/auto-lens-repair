import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

export function SEOHead({ title, description, canonical, keywords }: SEOHeadProps) {
  // In a real app, you'd use React Helmet or Next.js Head
  // For this example, we'll use document manipulation
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL if provided
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Update favicon
    let linkIcon = document.querySelector('link[rel="icon"]');
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.setAttribute('rel', 'icon');
      linkIcon.setAttribute('type', 'image/png');
      document.head.appendChild(linkIcon);
    }
    linkIcon.setAttribute('href', '/attached_assets/Auto Lens Repair _1755827734654.png');
  }, [title, description, canonical, keywords]);

  return null;
}

export default SEOHead;
