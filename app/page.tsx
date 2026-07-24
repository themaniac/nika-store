import { Hero } from "@/components/Hero";
import {
  AudienceSection,
  BenefitsSection,
  Footer,
  LocationSection,
  ManifestoSection,
  OpeningSection,
} from "@/components/StoreSections";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getSiteUrl } from "@/data/site";
import { buildStoreJsonLd } from "@/lib/jsonLd";

export default function Page() {
  const structuredData = buildStoreJsonLd(getSiteUrl());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Hero />
        <ManifestoSection />
        <AudienceSection />
        <BenefitsSection />
        <OpeningSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
