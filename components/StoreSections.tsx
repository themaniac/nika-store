import Image from "next/image";
import {
  FaArrowRightLong,
  FaLocationDot,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

import { Brand } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export function Marquee() {
  const phrase = "Donna · Uomo · Everyday style · Sambuceto · ";

  return (
    <div className="marquee" aria-label="Donna, uomo, everyday style, Sambuceto">
      <div className="marquee__track" aria-hidden="true">
        <span>{phrase.repeat(4)}</span>
        <span>{phrase.repeat(4)}</span>
      </div>
    </div>
  );
}

export function ManifestoSection() {
  return (
    <section className="manifesto section-shell" id="stile">
      <div className="section-kicker">La nostra idea di stile</div>
      <Reveal className="manifesto__grid">
        <p className="manifesto__lead">
          Vestirsi bene deve essere
          <br />
          <em>semplice.</em>
        </p>
        <div className="manifesto__body">
          <p>
            NiKa Store nasce per portare a Sambuceto una selezione di
            abbigliamento casual donna e uomo pensata per la vita di tutti i
            giorni.
          </p>
          <p>
            Capi versatili, abbinamenti attuali e prezzi accessibili: tutto
            quello che serve per sentirti a tuo agio nel tuo stile.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="audiences section-shell" aria-labelledby="audience-title">
      <div className="section-heading">
        <p className="eyebrow">Per lei · Per lui</p>
        <h2 id="audience-title">Due modi di vivere lo stile.</h2>
      </div>
      <div className="audiences__grid">
        {siteConfig.audiences.map((audience, index) => (
          <Reveal delay={index * 100} key={audience.slug}>
            <article
              className={`audience-card audience-card--${audience.slug}`}
            >
              <div className="audience-card__media">
                <Image
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  sizes="(max-width: 767px) 92vw, 42vw"
                />
                <span className="audience-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <div className="audience-card__copy">
                <p className="eyebrow">{audience.eyebrow}</p>
                <h3>{audience.title}</h3>
                <p>{audience.copy}</p>
                <a href="#novita" className="text-link">
                  Scopri il mondo NiKa
                  <FaArrowRightLong aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="image-disclaimer">
        Immagini indicative. Le collezioni reali saranno presentate in negozio.
      </p>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="section-shell">
        <div className="section-heading section-heading--split">
          <p className="eyebrow">Perché NiKa</p>
          <h2 id="benefits-title">
            Più stile.
            <br />
            <em>Meno complicazioni.</em>
          </h2>
        </div>
        <div className="benefits__grid">
          {siteConfig.benefits.map((benefit, index) => (
            <Reveal delay={index * 70} key={benefit.number}>
              <article className="benefit">
                <span>{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OpeningSection() {
  return (
    <section className="opening" id="novita" aria-labelledby="opening-title">
      <Marquee />
      <Reveal className="opening__inner section-shell">
        <p className="eyebrow">Ci siamo quasi</p>
        <h2 id="opening-title">
          Qualcosa di nuovo
          <br />
          sta arrivando a <em>Sambuceto.</em>
        </h2>
        <p>
          Segui NiKa Store su TikTok o scrivici su WhatsApp per scoprire
          anteprime, aggiornamenti e novità sulla prossima apertura.
        </p>
        <div className="opening__actions">
          <a
            className="button button--light"
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok aria-hidden="true" />
            Seguici su TikTok
          </a>
          <a
            className="button button--outline-light"
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Scrivici su WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="location section-shell" id="negozio">
      <Reveal className="location__media">
        <Image
          src="/images/store-exterior.jpeg"
          alt="Esterno di NiKa Store in Corso Italia 121 a Sambuceto"
          fill
          sizes="(max-width: 767px) 92vw, 57vw"
        />
        <span className="location__label">Qui nasce NiKa</span>
      </Reveal>
      <Reveal className="location__copy" delay={120}>
        <p className="eyebrow">Vieni a trovarci</p>
        <h2>Nel cuore di Sambuceto.</h2>
        <address>
          <FaLocationDot aria-hidden="true" />
          <span>
            Corso Italia, 121
            <small>66020 Sambuceto (CH)</small>
          </span>
        </address>
        <p>
          Un nuovo spazio dedicato allo stile quotidiano, facile da raggiungere
          e pronto ad accoglierti.
        </p>
        <a
          className="button button--primary"
          href={siteConfig.location.mapsHref}
          target="_blank"
          rel="noreferrer"
        >
          Apri in Google Maps
          <FaArrowRightLong aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contatti">
      <div className="footer__inner section-shell">
        <div className="footer__brand">
          <Brand inverse />
          <p>Il tuo stile, ogni giorno.</p>
        </div>
        <div className="footer__column">
          <p className="footer__label">Dove siamo</p>
          <address>
            Corso Italia, 121
            <br />
            66020 Sambuceto (CH)
          </address>
          <a
            href={siteConfig.location.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Indicazioni stradali
          </a>
        </div>
        <div className="footer__column">
          <p className="footer__label">Restiamo in contatto</p>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>
      </div>
      <div className="footer__bottom section-shell">
        <span>© {new Date().getFullYear()} NiKa Store</span>
        <span>Abbigliamento donna &amp; uomo · Sambuceto</span>
      </div>
    </footer>
  );
}
