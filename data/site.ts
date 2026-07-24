export type AudienceCard = {
  slug: "donna" | "uomo";
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export type Benefit = {
  number: string;
  title: string;
  copy: string;
};

export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

const mapsHref =
  "https://www.google.com/maps/place/NiKa+Store/@42.4221038,14.1850912,17z/data=!3m1!4b1!4m6!3m5!1s0x1331afa08df1dfbd:0x8bce4cdc180049ee!8m2!3d42.4220999!4d14.1876715!16s%2Fg%2F11nr54ysq8?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D";

export const siteConfig = {
  name: "NiKa Store",
  description:
    "NiKa Store è il nuovo negozio di abbigliamento casual uomo e donna a Sambuceto: stile quotidiano, novità e prezzi accessibili.",
  opening: {
    label: "Prossima apertura",
    date: null,
  },
  navigation: [
    { label: "Stile", href: "#stile" },
    { label: "Novità", href: "#novita" },
    { label: "Negozio", href: "#negozio" },
    { label: "Contatti", href: "#contatti" },
  ] satisfies NavigationItem[],
  contact: {
    phoneDisplay: "+39 349 562 7208",
    phoneE164: "+393495627208",
    whatsappHref: "https://wa.me/393495627208",
  },
  social: {
    tiktok: "https://www.tiktok.com/@nikastore.sambuceto",
  },
  location: {
    street: "Corso Italia, 121",
    postalCode: "66020",
    city: "Sambuceto",
    province: "CH",
    country: "IT",
    coordinates: {
      latitude: 42.4220999,
      longitude: 14.1876715,
    },
    mapsHref,
  },
  audiences: [
    {
      slug: "donna",
      eyebrow: "Donna",
      title: "Libera di essere te.",
      copy: "Linee versatili e dettagli contemporanei per accompagnarti ogni giorno, dal lavoro al tempo libero.",
      image: "/images/editorial-women.jpg",
      imageAlt:
        "Donna con look casual contemporaneo davanti a un edificio moderno",
    },
    {
      slug: "uomo",
      eyebrow: "Uomo",
      title: "Essenziale, mai banale.",
      copy: "Capi comodi, attuali e facili da abbinare per costruire uno stile quotidiano che parla di te.",
      image: "/images/editorial-men.jpg",
      imageAlt: "Uomo con camicia chiara e look casual contemporaneo",
    },
  ] satisfies AudienceCard[],
  benefits: [
    {
      number: "01",
      title: "Ogni giorno",
      copy: "Proposte versatili da vivere davvero, dalla mattina alla sera.",
    },
    {
      number: "02",
      title: "Lei & lui",
      copy: "Due selezioni, un’unica idea di stile semplice e contemporaneo.",
    },
    {
      number: "03",
      title: "Prezzi accessibili",
      copy: "Novità e abbinamenti pensati per rinnovare il guardaroba con leggerezza.",
    },
    {
      number: "04",
      title: "Vicino a te",
      copy: "Un nuovo punto di riferimento nel cuore di Sambuceto.",
    },
  ] satisfies Benefit[],
} as const;

export type SiteConfig = typeof siteConfig;

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}
