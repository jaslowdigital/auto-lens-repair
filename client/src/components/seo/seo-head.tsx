import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export function SEOHead({ title, description, canonical, keywords, ogImage, twitterHandle }: SEOHeadProps) {
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
    const ogImageUrl = ogImage || `${baseUrl}/attached_assets/Auto Lens Repair _20250821_221211_0000_1755828746506.png`;
    const currentDate = new Date().toISOString();
    
    // OpenGraph Locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      ogLocale.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', 'en_US');

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);

    // OpenGraph URL
    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        ogUrl.setAttribute('class', 'seo-meta-og');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', canonical);
    }

    // OpenGraph Site Name
    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute('property', 'og:site_name');
      ogSiteName.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute('content', 'Auto Lens Repair');

    // Article Publisher (Facebook page)
    let articlePublisher = document.querySelector('meta[property="article:publisher"]');
    if (!articlePublisher) {
      articlePublisher = document.createElement('meta');
      articlePublisher.setAttribute('property', 'article:publisher');
      articlePublisher.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(articlePublisher);
    }
    articlePublisher.setAttribute('content', 'https://www.facebook.com/AutoLensRepair');

    // Article Modified Time
    let articleModifiedTime = document.querySelector('meta[property="article:modified_time"]');
    if (!articleModifiedTime) {
      articleModifiedTime = document.createElement('meta');
      articleModifiedTime.setAttribute('property', 'article:modified_time');
      articleModifiedTime.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(articleModifiedTime);
    }
    articleModifiedTime.setAttribute('content', currentDate);

    // OpenGraph Image
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta');
      ogImageMeta.setAttribute('property', 'og:image');
      ogImageMeta.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogImageMeta);
    }
    ogImageMeta.setAttribute('content', ogImageUrl);

    // OpenGraph Image Width
    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement('meta');
      ogImageWidth.setAttribute('property', 'og:image:width');
      ogImageWidth.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute('content', '800');

    // OpenGraph Image Height
    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement('meta');
      ogImageHeight.setAttribute('property', 'og:image:height');
      ogImageHeight.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute('content', '600');

    // OpenGraph Image Type
    let ogImageType = document.querySelector('meta[property="og:image:type"]');
    if (!ogImageType) {
      ogImageType = document.createElement('meta');
      ogImageType.setAttribute('property', 'og:image:type');
      ogImageType.setAttribute('class', 'seo-meta-og');
      document.head.appendChild(ogImageType);
    }
    ogImageType.setAttribute('content', 'image/png');

    // Twitter Card meta tags
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      twitterCard.setAttribute('class', 'seo-meta-twitter');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('class', 'seo-meta-twitter');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('class', 'seo-meta-twitter');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', description);

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('class', 'seo-meta-twitter');
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute('content', ogImageUrl);

    let twitterSite = document.querySelector('meta[name="twitter:site"]');
    if (!twitterSite) {
      twitterSite = document.createElement('meta');
      twitterSite.setAttribute('name', 'twitter:site');
      twitterSite.setAttribute('class', 'seo-meta-twitter');
      document.head.appendChild(twitterSite);
    }
    twitterSite.setAttribute('content', twitterHandle || '@AutoLensRepair');
  }, [title, description, canonical, keywords]);

  return null;
}

export default SEOHead;
