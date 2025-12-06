import { useEffect, useState, useMemo } from "react";
import siteData from "../content/site.json";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Brands from "../components/Brands";
import MainOffer from "../components/MainOffer";
import Examples from "../components/Examples";
import Footer from "../components/Footer";

import "../styles/Projects.css";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 80;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function SectionCTA({ label }) {
  if (!label) return null;

  return (
    <div className="section-cta-wrapper">
      <button type="button" className="cta-button" onClick={scrollToContact}>
        {label}
      </button>
    </div>
  );
}

export default function Projects() {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const handler = () => setResetKey((prev) => prev + 1);
    window.addEventListener("promo-reset-page", handler);
    return () => window.removeEventListener("promo-reset-page", handler);
  }, []);

  const sections = useMemo(() => {
    const raw = siteData.sections || [];
    return [...raw]
      .filter((s) => s && s.enabled !== false)
      .sort((a, b) => {
        const ao = typeof a.order === "number" ? a.order : 0;
        const bo = typeof b.order === "number" ? b.order : 0;
        return ao - bo;
      });
  }, []);

  return (
    <div className="projects-page">
      <Navbar />

      {sections.map((section) => {
        const key = `${section.id || section.type}-${section.order || 0}-${resetKey}`;

        // CONTACT SECTION
        if (section.type === "contact") {
          return (
            <section
              key={key}
              id="contact"
              className="projects-section contact-section"
            >
              {section.title && section.title.trim() && (
                <h2 className="contact-section-title">{section.title}</h2>
              )}
              <Contact
                data={{
                  headline: section.headline,
                  subheadline: section.subheadline,
                  ctaLabel: section.formCtaLabel || "Lets chat!",
                }}
              />
            </section>
          );
        }

        // BRANDS SECTION
        if (section.type === "brands") {
          return (
            <section key={key} className="projects-section brands-section">
              {section.title && section.title.trim() && (
                <h2 className="projects-section-title">{section.title}</h2>
              )}
              <Brands brands={section.brands || []} />
              <SectionCTA label={section.buttonLabel} />
            </section>
          );
        }

        // EXAMPLES SECTION(S)
        if (section.type === "examples") {
          return (
            <section key={key} className="projects-section">
              {section.title && section.title.trim() && (
                <h2 className="projects-section-title">{section.title}</h2>
              )}
              <Examples
                videos={section.videos || []}
                layout={section.layout || "vertical"}
              />
              <SectionCTA label={section.buttonLabel} />
            </section>
          );
        }

        // MAIN OFFER SECTION(S)
        if (section.type === "mainOffer") {
          return (
            <section key={key} className="projects-section main-offer-wrapper">
              <MainOffer data={section} />
              <SectionCTA label={section.buttonLabel} />
            </section>
          );
        }

        // Unknown section types → skip
        return null;
      })}

      <Footer />
    </div>
  );
}
