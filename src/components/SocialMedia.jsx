import { useState } from "react";
import "../styles/SocialMedia.css";
import VideoCard from "./VideoCard";

export default function SocialMedia({ videos }) {
  if (!videos || videos.length === 0) return null;

  const [activeId, setActiveId] = useState(null);

  return (
    <section className="section social-section">
      <div className="section-inner">
        <h2 className="section-title">Social media content</h2>

        <div className="video-grid">
          {videos.map((v, idx) => (
            <VideoCard
              key={v.id || idx}
              id={v.id || `social-${idx}`}
              title={v.title}
              videoSrc={v.videoSrc}
              poster={v.poster}
              isActive={activeId === (v.id || `social-${idx}`)}
              onSetActive={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
