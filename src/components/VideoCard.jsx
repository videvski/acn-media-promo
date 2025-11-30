import { useRef, useState, useEffect } from "react";
import "../styles/VideoCard.css";

export default function VideoCard({
  id,
  title,
  videoSrc,
  poster,
  isActive,
  onSetActive,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (!isActive) {
      v.pause();
      setIsPlaying(false);
      v.muted = true;
      setMuted(true);
    }
  }, [isActive]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      onSetActive?.(id);
      v.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (!isActive) {
      onSetActive?.(id);
    }

    const nextMuted = !muted;
    v.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted && v.paused) {
      v.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  return (
    <div className="video-card" onClick={togglePlay}>
      <div className="video-wrapper">
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
      {title && <div className="video-title">{title}</div>}
    </div>
  );
}
