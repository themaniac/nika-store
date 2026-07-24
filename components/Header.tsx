"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Brand } from "@/components/Brand";
import { siteConfig } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="site-header"
      data-scrolled={isScrolled ? "true" : "false"}
      data-menu-open={isOpen ? "true" : "false"}
    >
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="NiKa Store, home">
          <Brand />
        </a>

        <nav
          className="site-header__desktop-nav"
          aria-label="Navigazione principale"
        >
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="site-header__cta"
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Scrivici
        </a>

        <button
          className="site-header__menu-trigger"
          ref={triggerRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Menu mobile"
        >
          <div className="mobile-menu__links">
            {siteConfig.navigation.map((item, index) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                <span aria-hidden="true">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </div>
          <div className="mobile-menu__footer">
            <p>{siteConfig.opening.label}</p>
            <address>
              {siteConfig.location.street}
              <br />
              {siteConfig.location.postalCode} {siteConfig.location.city} (
              {siteConfig.location.province})
            </address>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
