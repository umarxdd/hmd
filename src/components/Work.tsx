import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    id: "01",
    title: "Premium Realstatea",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1172997502",
    link: "https://vimeo.com/1172997502",
  },
  {
    id: "02",
    title: "Project SIBO",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1144176478",
    link: "https://vimeo.com/1144176478",
  },
  {
    id: "03",
    title: "MAYATA PALTINUM",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1139038047",
    link: "https://vimeo.com/1139038047",
  },
  {
    id: "04",
    title: "Jake Paul vs Mike Tyson",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1025365469",
    link: "https://vimeo.com/1025365469",
  },
  {
    id: "05",
    title: "Been a photographer",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1023151062",
    link: "https://vimeo.com/1023151062",
  },
  {
    id: "06",
    title: "Can India be China",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1023150048",
    link: "https://vimeo.com/1023150048",
  },
  {
    id: "07",
    title: "Intro Reel",
    category: "Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1151507665",
    link: "https://vimeo.com/1151507665",
  },
  // Add more project objects here...
];

const Work = () => {
  useGSAP(() => {
    const container = document.querySelector(".work-flex");

    if (!container) return; // ✅ FIX: null safety

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                video={project.vimeoId}
                link={project.link}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
