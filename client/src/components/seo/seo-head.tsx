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
    linkIcon.setAttribute('href', '/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png');

    // OpenGraph meta tags - Use absolute URL for social platforms
    const baseUrl = window.location.origin;
    const ogImageUrl = `${baseUrl}/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828994699.png`;
    
    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // OpenGraph Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', ogImageUrl);

    // OpenGraph Image Width
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement('meta');
      ogImageWidth.setAttribute('property', 'og:image:width');
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute('content', '1200');

    // OpenGraph Image Height
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement('meta');
      ogImageHeight.setAttribute('property', 'og:image:height');
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute('content', '630');

    // OpenGraph Image Alt
    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement('meta');
      ogImageAlt.setAttribute('property', 'og:image:alt');
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute('content', 'Auto Lens Repair - Professional headlight restoration showing transformation from foggy to crystal clear');

    // OpenGraph Site Name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'Auto Lens Repair');

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // OpenGraph URL
    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', canonical);
    }

    // Twitter Card meta tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', ogImageUrl);

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', description);

    // Twitter Image Alt
    let twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (!twitterImageAlt) {
      twitterImageAlt = document.createElement('meta');
      twitterImageAlt.setAttribute('name', 'twitter:image:alt');
      document.head.appendChild(twitterImageAlt);
    }
    twitterImageAlt.setAttribute('content', 'Auto Lens Repair - Professional headlight restoration showing transformation from foggy to crystal clear');

    // LinkedIn specific
    let linkedinTitle = document.querySelector('meta[property="linkedin:title"]');
    if (!linkedinTitle) {
      linkedinTitle = document.createElement('meta');
      linkedinTitle.setAttribute('property', 'linkedin:title');
      document.head.appendChild(linkedinTitle);
    }
    linkedinTitle.setAttribute('content', title);

    let linkedinDescription = document.querySelector('meta[property="linkedin:description"]');
    if (!linkedinDescription) {
      linkedinDescription = document.createElement('meta');
      linkedinDescription.setAttribute('property', 'linkedin:description');
      document.head.appendChild(linkedinDescription);
    }
    linkedinDescription.setAttribute('content', description);
  }, [title, description, canonical, keywords]);

  return null;
}

export default SEOHead;
