import "../styles/Projects.css";
import "../styles/VideoCard.css";
import VideoCard from "./VideoCard";

export default function SocialMedia({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="social-section">
      <div className="section-inner">
        <div className="social-grid">
          {videos.map((v, idx) => (
            <div className="social-video-card" key={idx}>
              <VideoCard
                id={`social-${idx}`}
                category={v.category}
                title={v.title}
                videoSrc={v.videoSrc}
                autoPlayMuted={true}
                isVertical={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
