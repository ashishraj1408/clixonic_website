// src/components/SEO/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://clixonic-website.vercel.app/"; // 🔴 change when you buy domain

export default function SEO({
  title = "Clixonic Media | Digital Marketing & Web Development Agency",
  description = "We help global brands with SEO, Web Development, Social Media Marketing & Content Marketing.",
  keywords = "digital marketing agency, seo services, web development, social media marketing",
  type = "website",
  image = `${BASE_URL}/seo-default-banner.jpg`, // put any default banner
  noIndex = false,
  schema,
}) {
  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${location.pathname}`;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
    >
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (for LinkedIn, FB etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
