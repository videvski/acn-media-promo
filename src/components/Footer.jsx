import "../styles/Footer.css";

export default function Footer() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offset = window.scrollY + rect.top - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">
          <p className="footer-heading">READY?</p>
          <p className="footer-subtitle">
            Lets hop on a chat and discuss how we can help you realise your
            project.
          </p>
        </div>
        <button className="btn-primary" onClick={scrollToContact}>
          Lets chat!
        </button>
      </div>
    </footer>
  );
}
