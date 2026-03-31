import {
  // FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  // FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://wa.me/+923465121033" target="_blank">
            <FaWhatsapp />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/hammad-abbasi-b49033294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>
        {/* <span>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </span> */}
        <span>
          <a
            href="https://www.instagram.com/filmatheist_1?igsh=dTI3YXpwaXRjZWN5"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://vimeo.com/user229349287">
        <HoverLinks text="PORTFOLIO" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
