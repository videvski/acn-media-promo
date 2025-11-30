import siteData from "../content/site.json";

import Contact from "../components/Contact";
import Brands from "../components/Brands";
import SocialMedia from "../components/SocialMedia";
import MainOffer from "../components/MainOffer";
import Examples from "../components/Examples";
import Footer from "../components/Footer";

import "../styles/Projects.css";

export default function Projects() {
  const { contact, mainOffer, brands, socialVideos, exampleVideos } = siteData;

  return (
    <div className="projects-page">
      {/* CONTACT at top */}
      <section className="projects-section" id="contact">
        <h2 className="contact-section-title">Contact</h2>
        <Contact data={contact} />
      </section>

      {/* BRANDS */}
      {brands && brands.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Brands we’ve worked with</h2>
          <Brands brands={brands} />
        </section>
      )}

      {/* SOCIAL MEDIA VIDEOS */}
      {socialVideos && socialVideos.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Social media content</h2>
          <SocialMedia videos={socialVideos} />
        </section>
      )}

      {/* MAIN OFFER */}
      {mainOffer && (
        <section className="main-offer-wrapper">
          <MainOffer data={mainOffer} />
        </section>
      )}

      {/* EXAMPLES */}
      {exampleVideos && exampleVideos.length > 0 && (
        <section className="projects-section">
          <h2 className="projects-section-title">Examples</h2>
          <Examples videos={exampleVideos} />
        </section>
      )}

      {/* FOOTER CTA */}
      <Footer />
    </div>
  );
}
