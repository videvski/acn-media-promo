import { useState } from "react";
import "../styles/ExamplesSection.css";
import VideoCard from "./VideoCard";

export default function ExamplesSection({ videos }) {
  if (!videos || videos.length === 0) return null;

  const [activeId, setActiveId] = useState(null);

  return (
    <section className="section examples-section">
      <div className="section-inner">
        <h2 className="section-title">Examples</h2>

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
    </section>
  );
}
