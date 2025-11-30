import { useState } from "react";
import "../styles/Examples.css";
import VideoCard from "./VideoCard";

export default function Examples({ videos }) {
  if (!videos || videos.length === 0) return null;

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="examples-section">
      <div className="section-inner">
        <div className="video-grid">
          {videos.map((v, idx) => (
            <VideoCard
              key={v.id || idx}
              id={v.id || `example-${idx}`}
              title={v.title}
              videoSrc={v.videoSrc}
              poster={v.poster}
              isActive={activeId === (v.id || `example-${idx}`)}
              onSetActive={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
