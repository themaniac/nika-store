import { describe, expect, it } from "vitest";

import { siteConfig } from "@/data/site";

describe("siteConfig", () => {
  it("keeps verified contact and social links", () => {
    expect(siteConfig.contact.whatsappHref).toBe(
      "https://wa.me/393495627208",
    );
    expect(siteConfig.social.tiktok).toBe(
      "https://www.tiktok.com/@nikastore.sambuceto",
    );
  });

  it("describes the verified location", () => {
    expect(siteConfig.location.postalCode).toBe("66020");
    expect(siteConfig.location.city).toBe("Sambuceto");
    expect(siteConfig.location.coordinates).toEqual({
      latitude: 42.4220999,
      longitude: 14.1876715,
    });
  });

  it("has adult woman and man collections without an opening date", () => {
    expect(siteConfig.audiences.map((item) => item.slug)).toEqual([
      "donna",
      "uomo",
    ]);
    expect(siteConfig.opening.date).toBeNull();
  });
});
