// src/components/SocialMedia.jsx
import { useRef, useEffect, useMemo, useState } from "react";
import "../styles/Projects.css";      
import "../styles/SocialMedia.css";   
import "../styles/VideoCard.css";
import VideoCard from "./VideoCard";

function SocialVideo({ item, activeAudioId, setActiveAudioId, isMobile }) {
  const videoRef = useRef(null);
  const { idKey, media, title, brand } = item;
  const isActive = activeAudioId === idKey;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.loop = true;
    v.playsInline = true;

    if (isActive) {
      v.muted = false;
      if (v.paused) {
        v.play().catch(() => {});
      }
    } else {
      v.muted = true;
      if (!v.paused) {
        v.pause();
      }
    }
  }, [isActive]);

  const handleClickVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const handleToggleAudio = (e) => {
    e.stopPropagation();
    setActiveAudioId(isActive ? null : idKey);
  };

  const src = media.url;
  if (!src) return null;

  return (
    <div className="social-video-card" onClick={handleClickVideo}>
      {title && <p className="social-video-title">{title}</p>}
      {brand && <p className="social-video-brand two-line-brand">{brand}</p>}

      <div className={isMobile ? "phone-frame" : ""}>
        <div className="social-video-wrapper">
          <video
            ref={videoRef}
            src={src}
            className="social-video"
            muted={!isActive}
            autoPlay
            playsInline
            preload="metadata"
          />
          <button
            type="button"
            className={`video-audio-toggle ${isActive ? "active" : ""}`}
            onClick={handleToggleAudio}
          >
            <span className="note-icon">♫</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SocialMedia({ videos }) {
  // Map the flat "videos" array from CMS into the structure used by SocialStrip
  const socialItems = useMemo(() => {
    if (!videos || videos.length === 0) return [];

    return videos.map((v, index) => ({
      idKey: `promo-social-${index}`,
      media: { url: v.videoSrc },
      title: v.category,       // top line
      brand: v.brand || v.title || "", // bottom line
    }));
  }, [videos]);

  const [activeAudioId, setActiveAudioId] = useState(null);

  const [isMobile, setIsMobile] = useState(
    () => (typeof window !== "undefined" ? window.innerWidth <= 768 : false)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!socialItems.length) return;
    setCurrentIndex((prev) => prev % socialItems.length);
  }, [socialItems.length]);

  if (!socialItems.length) return null;

  const count = socialItems.length;

  const goNext = () => {
    if (!count) return;
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const goPrev = () => {
    if (!count) return;
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches.length) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;
    const threshold = 40;

    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
  };

  // Desktop: grid of vertical videos
  if (!isMobile) {
    return (
      <div className="social-grid">
        {socialItems.map((item) => (
          <SocialVideo
            key={item.idKey}
            item={item}
            activeAudioId={activeAudioId}
            setActiveAudioId={setActiveAudioId}
            isMobile={false}
          />
        ))}
      </div>
    );
  }

  // Mobile: single carousel with dots + phone frame
  const currentItem = socialItems[currentIndex];

  return (
    <div className="social-carousel">
      <div
        className="social-carousel-single"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <SocialVideo
          item={currentItem}
          activeAudioId={activeAudioId}
          setActiveAudioId={setActiveAudioId}
          isMobile
        />
      </div>

      <div className="social-carousel-dots">
        {socialItems.map((item, index) => (
          <span
            key={item.idKey}
            className={`social-dot ${
              index === currentIndex ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
