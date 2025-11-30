import { useEffect, useState } from "react";
import siteData from "../content/site.json";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Brands from "../components/Brands";
import SocialMedia from "../components/SocialMedia";
import MainOffer from "../components/MainOffer";
import Examples from "../components/Examples";
import Footer from "../components/Footer";

import "../styles/Projects.css";

export default function Projects() {
  const { contact, mainOffer, brands, socialVideos, exampleVideos } = siteData;

  // Used to force remount of sections when the navbar logo is clicked
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const handleReset = () => {
      setResetKey((k) => k + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("promo-reset-page", handleReset);
    return () => {
      window.removeEventListener("promo-reset-page", handleReset);
    };
  }, []);

  return (
    <div className="projects-page">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT SECTION */}
      <section className="projects-section" id="contact">
        <h2 className="contact-section-title">Contact</h2>
        <Contact data={contact} />
      </section>

      {/* BRANDS SECTION */}
      {brands?.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Brands we’ve worked with</h2>
          <Brands brands={brands} />
        </section>
      )}

      {/* SOCIAL MEDIA SECTION */}
      {socialVideos?.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Social media content</h2>
          <SocialMedia key={`social-${resetKey}`} videos={socialVideos} />
        </section>
      )}

      {/* MAIN OFFER SECTION */}
      {mainOffer && (
        <section className="main-offer-wrapper">
          <MainOffer data={mainOffer} />
        </section>
      )}

      {/* EXAMPLES SECTION */}
      {exampleVideos?.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Examples</h2>
          <Examples key={`examples-${resetKey}`} videos={exampleVideos} />
        </section>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
