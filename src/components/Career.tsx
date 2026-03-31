import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Video Editor & Videographer</h4>
                <h5>Vostro World</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Worked on editing videos and shooting content for different
              projects. Managed camera work, lighting, and sound to create
              high-quality videos. Also helped in planning ideas and making sure
              the final output looks professional and engaging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>video Editor</h4>
                <h5>Markosol Ltd</h5>
              </div>
              <h3>July 2024- Oct 2024</h3>
            </div>
            <p>
              Edited videos for social media and client projects. Cut clips,
              added effects, music, and transitions to improve the final video.
              Followed given instructions and delivered work on time while
              keeping good quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Barq Al Saab Calligraphers</h5>
              </div>
              <h3>Oct 2023 - May 2024</h3>
            </div>
            <p>
              Created designs for posts, banners, and branding materials. Worked
              with different tools to make creative and clean designs. Helped
              the team by turning ideas into visuals that attract people and
              match the brand style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
