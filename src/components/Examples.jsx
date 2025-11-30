import { useState } from "react";
import "../styles/Examples.css";
import "../styles/VideoCard.css";
import VideoCard from "./VideoCard";

export default function Examples({ videos }) {
  if (!videos || videos.length === 0) return null;

  const [activeId, setActiveId] = useState(null);

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
                title={v.title}
                videoSrc={v.videoSrc}
                poster={v.poster}
                isActive={activeId === id}
                onSetActive={setActiveId}
                autoPlayMuted={false}
                isVertical={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
