import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  video: string; // This is now the Vimeo ID
  alt?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    // Automatically get the Vimeo "First Frame" thumbnail
    fetch(`https://vimeo.com/api/v2/video/${props.video}.json`)
      .then((res) => res.json())
      .then((data) => setThumbnail(data[0].thumbnail_large));
  }, [props.video]);

  return (
    <div
      className="work-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* Show Thumbnail by default */}
        <img
          src={thumbnail}
          alt={props.alt}
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        {/* Show Video on hover */}
        {isHovered && (
          <iframe
            src={`https://player.vimeo.com/video/${props.video}?autoplay=1&muted=1&loop=1&background=1`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            className="vimeo-hover-player"
          ></iframe>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
