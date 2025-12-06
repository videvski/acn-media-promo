import { useRef, useState, useEffect } from "react";
import "../styles/VideoCard.css";

export default function VideoCard({
  id,
  category,
  title,
  videoSrc,
  poster,
  autoPlayMuted = false,
  isVertical = false,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(autoPlayMuted !== false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.loop = true;
    v.playsInline = true;
    v.muted = muted;

    if (autoPlayMuted && v.paused) {
      v
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay might be blocked, ignore
        });
    }
  }, [autoPlayMuted, muted]);

  const handleTogglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    const nextMuted = !muted;
    v.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <article
      className={`video-card ${isVertical ? "vertical" : "horizontal"}`}
      id={id}
      onClick={handleTogglePlay}
    >
      <div className="video-card-meta">
        {category && <p className="video-card-category">{category}</p>}
        {title && <p className="video-card-title">{title}</p>}
      </div>

      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          playsInline
          preload="metadata"
        />
        <button
          type="button"
          className={`mute-toggle ${muted ? "muted" : "unmuted"}`}
          onClick={toggleMute}
        >
          <span className="note-icon">♫</span>
        </button>
      </div>
    </article>
  );
}
