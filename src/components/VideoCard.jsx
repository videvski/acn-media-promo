import { useRef, useState, useEffect } from "react";
import "../styles/VideoCard.css";

export default function VideoCard({
  id,
  category,
  title,
  videoSrc,
  poster,
  isActive,
  onSetActive,
  autoPlayMuted = false,
  isVertical = false,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Autoplay muted on mount if requested (e.g. for social reels)
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !autoPlayMuted) return;

    v.muted = true;
    v
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Browser blocked autoplay – leave it paused
      });
  }, [autoPlayMuted]);

  // If this card is part of a "controlled" group (Examples, etc.),
  // pause it when it stops being active
  useEffect(() => {
    const v = videoRef.current;
    if (!v || typeof isActive !== "boolean" || !onSetActive) return;

    if (!isActive) {
      v.pause();
      setIsPlaying(false);
      v.muted = true;
      setMuted(true);
    }
  }, [isActive, onSetActive]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      if (onSetActive) {
        onSetActive(id);
      }
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

    if (onSetActive && typeof isActive === "boolean" && !isActive) {
      onSetActive(id);
    }

    const nextMuted = !muted;
    v.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted && v.paused) {
      v
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const wrapperClass = isVertical
    ? "video-wrapper video-wrapper-vertical"
    : "video-wrapper";

  return (
    <div className="video-card" onClick={togglePlay}>
      <div className={wrapperClass}>
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted={muted}
          playsInline
          preload="metadata"
        />
        <button
          type="button"
          className="mute-toggle"
          onClick={toggleMute}
        >
          {muted ? "🔇" : "🔊"}
        </button>
        <div className="play-indicator">
          {isPlaying ? "Pause" : "Play"}
        </div>
      </div>

      {(category || title) && (
        <div className="video-meta">
          {category && (
            <div className="video-category">{category}</div>
          )}
          {title && <div className="video-title">{title}</div>}
        </div>
      )}
    </div>
  );
}
