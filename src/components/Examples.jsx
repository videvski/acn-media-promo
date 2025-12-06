import "../styles/Examples.css";
import "../styles/VideoCard.css";
import VideoCard from "./VideoCard";

export default function Examples({ videos, layout = "vertical" }) {
  if (!videos || videos.length === 0) return null;

  const isVertical = layout === "vertical";

  return (
    <div className="examples-section">
      <div className="section-inner">
        <div className="video-grid">
          {videos.map((v, idx) => {
            const id = v.id || `example-${idx}`;
            return (
              <VideoCard
                key={id}
                id={id}
                category={v.category}
                title={v.brand || v.title}
                videoSrc={v.videoSrc}
                poster={v.poster}
                autoPlayMuted={true}
                isVertical={isVertical}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
