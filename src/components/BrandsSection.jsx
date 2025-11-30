import "../styles/BrandsSection.css";

export default function BrandsSection({ brands }) {
  if (!brands || brands.length === 0) return null;

  return (
    <section className="section brands-section">
      <div className="section-inner">
        <h2 className="section-title">Brands we’ve worked with</h2>
        <div className="brands-grid">
          {brands.map((brand, idx) => (
            <div className="brand-item" key={brand.name || idx}>
              {brand.logo && (
                <img
                  src={brand.logo}
                  alt={brand.name || `Brand ${idx + 1}`}
                  loading="lazy"
                />
              )}
              {brand.name && (
                <p className="brand-name">{brand.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
