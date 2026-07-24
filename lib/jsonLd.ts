import { siteConfig } from "@/data/site";

export function buildStoreJsonLd(siteUrl: string) {
  const { contact, description, location, name, social } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${siteUrl}/#store`,
    name,
    description,
    url: siteUrl,
    image: `${siteUrl}/images/store-exterior.jpeg`,
    telephone: contact.phoneE164,
    priceRange: "€",
    sameAs: [social.tiktok],
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      postalCode: location.postalCode,
      addressLocality: location.city,
      addressRegion: location.province,
      addressCountry: location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    hasMap: location.mapsHref,
  };
}
