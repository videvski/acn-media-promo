import "../styles/Navbar.css";

export default function Navbar() {
  const handleLogoClick = () => {
    // Trigger global reset in Projects.jsx
    window.dispatchEvent(new CustomEvent("promo-reset-page"));

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="promo-navbar">
      <div className="promo-navbar-inner">
        <div className="promo-navbar-spacer" />

        <button
          type="button"
          className="promo-logo-button"
          onClick={handleLogoClick}
        >
          <img
            src="/logo.svg"
            alt="ACN Media"
            className="promo-logo"
          />
        </button>

        <div className="promo-navbar-spacer" />
      </div>
    </header>
  );
}
