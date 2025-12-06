import "../styles/Contact.css";

export default function Contact({ data }) {
  if (!data) return null;

  const { headline, subheadline, ctaLabel } = data;

  return (
    <div className="contact-wrapper">
      <div className="contact-page">
        <div className="contact-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submit is not wired yet – this is just the UI.");
            }}
          >
            {headline && (
              <p className="contact-intro-headline">{headline}</p>
            )}
            {subheadline && (
              <p className="contact-intro-subheadline">{subheadline}</p>
            )}

            <div className="contact-row">
              <div className="field-group">
                <label htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" type="text" />
              </div>

              <div className="field-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="text" />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="field-group">
              {/* <label htmlFor="message">
                Tell us about your project<span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              /> */}
            </div>

            <button type="submit">
              {ctaLabel || "Lets chat!"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
