import "../styles/Brands.css";

export default function Brands({ brands }) {
  if (!brands || brands.length === 0) return null;

  const featured = brands.slice(0, 3);
  const remaining = brands.slice(3);

  return (
    <div className="brands-section-inner">
      <div className="section-inner">
        {/* Top featured logos */}
        {featured.length > 0 && (
          <div className="brands-featured-row">
            {featured.map((brand, idx) => (
              <div
                className="brand-featured"
                key={brand.name || brand.logo || `featured-${idx}`}
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name || `Brand ${idx + 1}`}
                    loading="lazy"
                  />
                )}
                {brand.name && (
                  <p className="brand-name brand-name-featured">
                    {brand.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Circular grid of remaining logos */}
        {remaining.length > 0 && (
          <div className="brands-grid">
            {remaining.map((brand, idx) => (
              <div
                className="brand-circle"
                key={brand.name || brand.logo || `circle-${idx}`}
              >
                {brand.logo && (
                  <img
                    src={brand.logo}
                    alt={brand.name || `Brand ${idx + 4}`}
                    loading="lazy"
                  />
                )}
                {brand.name && (
                  <p className="brand-name brand-name-circle">
                    {brand.name}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
