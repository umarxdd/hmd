// VideoSection.tsx
import "./styles/VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section section-container">
      <div className="video-frame">
        <iframe
          src="https://player.vimeo.com/video/1151507665?autoplay=1&muted=1&loop=1"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
