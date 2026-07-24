import { describe, expect, it } from "vitest";

import { buildStoreJsonLd } from "@/lib/jsonLd";

describe("buildStoreJsonLd", () => {
  it("builds verified ClothingStore structured data", () => {
    const result = buildStoreJsonLd("https://nikastore.test");

    expect(result["@type"]).toBe("ClothingStore");
    expect(result.url).toBe("https://nikastore.test");
    expect(result.telephone).toBe("+393495627208");
    expect(result.address).toMatchObject({
      "@type": "PostalAddress",
      streetAddress: "Corso Italia, 121",
      postalCode: "66020",
      addressLocality: "Sambuceto",
      addressRegion: "CH",
      addressCountry: "IT",
    });
    expect(result.sameAs).toContain(
      "https://www.tiktok.com/@nikastore.sambuceto",
    );
  });

  it("does not invent an opening date or opening hours", () => {
    const result = buildStoreJsonLd("https://nikastore.test");

    expect(result).not.toHaveProperty("openingHours");
    expect(result).not.toHaveProperty("openingDate");
  });
});
