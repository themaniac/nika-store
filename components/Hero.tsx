import Image from "next/image";
import { FaArrowRightLong, FaLocationDot, FaWhatsapp } from "react-icons/fa6";

import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ornament" aria-hidden="true">
        01
      </div>
      <Reveal className="hero__copy">
        <p className="eyebrow hero__eyebrow">
          <span aria-hidden="true" />
          {siteConfig.opening.label} · Sambuceto
        </p>
        <h1 id="hero-title" aria-label="Il tuo stile, ogni giorno.">
          Il tuo stile,
          <br />
          <em> ogni giorno.</em>
        </h1>
        <p className="hero__intro">
          Un nuovo spazio dedicato all’abbigliamento casual donna e uomo:
          proposte contemporanee, versatili e accessibili.
        </p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Scrivici su WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            Scrivici
          </a>
          <a
            className="button button--text"
            href={siteConfig.location.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Come arrivare
            <FaArrowRightLong aria-hidden="true" />
          </a>
        </div>
        <address className="hero__address">
          <FaLocationDot aria-hidden="true" />
          <span>
            Corso Italia, 121
            <small>66020 Sambuceto (CH)</small>
          </span>
        </address>
      </Reveal>
      <Reveal className="hero__visual" delay={140}>
        <div className="hero__image-shell">
          <Image
            src="/images/editorial-hero.jpg"
            alt="Donna e uomo con abbigliamento casual passeggiano in città"
            fill
            priority
            sizes="(max-width: 767px) 92vw, 48vw"
          />
        </div>
        <div className="hero__stamp" aria-hidden="true">
          <span>NiKa</span>
          <small>Store · Sambuceto</small>
        </div>
      </Reveal>
      <p className="hero__side-note" aria-hidden="true">
        Casual wear · Donna &amp; Uomo
      </p>
    </section>
  );
}
