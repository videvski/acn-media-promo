import "../styles/MainOffer.css";

export default function MainOffer({ data }) {
  if (!data) return null;

  const { title, bullets } = data;

  const normalizedBullets = (bullets || [])
    .map((b) => (typeof b === "string" ? b : b?.bullet || ""))
    .filter(Boolean);

  return (
    <section className="section main-offer-section">
      <div className="section-inner main-offer-inner">
        <h2 className="section-title">My main offer</h2>

        <div className="main-offer-content">
          <h3 className="main-offer-title">{title}</h3>

          <ul className="main-offer-list">
            {normalizedBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
