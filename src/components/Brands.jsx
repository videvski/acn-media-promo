import "../styles/Brands.css";

export default function Brands({ brands }) {
  if (!brands || brands.length === 0) return null;

  return (
    <div className="brands-section">
      <div className="section-inner">
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
              {brand.name && <p className="brand-name">{brand.name}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
