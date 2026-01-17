// src/components/SEO/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://clixonicmedia.com"; // ✅ no trailing slash

export default function SEO({
  title = "Clixonic Media | Digital Marketing & Web Development Agency",
  description = "We help global brands with SEO, Web Development, Social Media Marketing & Content Marketing.",
  keywords = "digital marketing agency, seo services, web development, social media marketing",
  type = "website",
  image = `${BASE_URL}/seo-default-banner.jpg`,
  noIndex = false,
  schema,
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${BASE_URL}${pathname}`;

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Clixonic Media" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
