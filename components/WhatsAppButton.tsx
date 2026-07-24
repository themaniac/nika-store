import { FaWhatsapp } from "react-icons/fa6";

import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Scrivici su WhatsApp"
    >
      <span className="whatsapp-float__label" aria-hidden="true">
        Scrivici
      </span>
      <span className="whatsapp-float__icon">
        <FaWhatsapp aria-hidden="true" />
      </span>
    </a>
  );
}
