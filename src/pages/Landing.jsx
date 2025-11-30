import siteData from "../content/site.json";

import ContactSection from "../components/ContactSection";
import BrandsSection from "../components/BrandsSection";
import SocialMediaSection from "../components/SocialMediaSection";
import MainOfferSection from "../components/MainOfferSection";
import ExamplesSection from "../components/ExamplesSection";
import Footer from "../components/Footer";

export default function Landing() {
  const { contact, mainOffer, brands, socialVideos, exampleVideos } = siteData;

  return (
    <div className="landing-page">
      {/* CONTACT at top */}
      <ContactSection data={contact} />

      {/* BRANDS */}
      <BrandsSection brands={brands} />

      {/* SOCIAL MEDIA VIDEOS */}
      <SocialMediaSection videos={socialVideos} />

      {/* MAIN OFFER */}
      <MainOfferSection data={mainOffer} />

      {/* EXAMPLES */}
      <ExamplesSection videos={exampleVideos} />

      {/* FOOTER CTA */}
      <Footer />
    </div>
  );
}
