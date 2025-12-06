import "../styles/MainOffer.css";

export default function MainOffer({ data }) {
  if (!data) return null;

  const {
    mainTitle,
    offerTitle,
    text = "",
    gallery = [],
  } = data;

  return (
    <section className="section main-offer-section">
      <div className="section-inner main-offer-inner">

        {mainTitle && (
          <h2 className="section-title main-offer-heading">
            {mainTitle}
          </h2>
        )}

        <div className="main-offer-content">

          {offerTitle && (
            <h3 className="main-offer-title">{offerTitle}</h3>
          )}

          {text && (
            <p className="main-offer-text">
              {text}
            </p>
          )}

          {gallery.length > 0 && (
            <div className="main-offer-gallery">
              {gallery.map((item, idx) => {
                if (item.type === "video") {
                  return (
                    <div className="main-offer-item" key={idx}>
                      <video
                        src={item.src}
                        poster={item.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  );
                }

                return (
                  <div className="main-offer-item" key={idx}>
                    <img
                      src={item.src}
                      alt={item.alt || ""}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
