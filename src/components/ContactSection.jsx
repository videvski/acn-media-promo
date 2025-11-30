import "../styles/ContactSection.css";

export default function ContactSection({ data }) {
  if (!data) return null;

  const { headline, subheadline, ctaLabel } = data;

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner contact-inner">
        <div className="contact-text">
          <h1 className="contact-headline">{headline}</h1>
          <p className="contact-subheadline">{subheadline}</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submit is not wired yet – this is just the UI.");
          }}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            {ctaLabel || "Lets chat!"}
          </button>
        </form>
      </div>
    </section>
  );
}
