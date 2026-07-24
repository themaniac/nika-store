import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NiKa Store",
    short_name: "NiKa",
    description:
      "Abbigliamento casual uomo e donna a prezzi accessibili a Sambuceto.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ed",
    theme_color: "#12382f",
    lang: "it",
  };
}
