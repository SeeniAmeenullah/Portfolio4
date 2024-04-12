import IFIT from "../assets/ifit.webp";
import Project2 from "../assets/project2.webp";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={IFIT} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">iFit Co.</h2>
                  <p className="card_text">
                    Elevated the iFit brand with a dynamic website showcasing an
                    extensive portfolio of spices and premium ingredients.
                    Seamlessly blending design and functionality to enhance user
                    experience and elevate the brand&apos;s online presence
                  </p>
                  <button
                    className="btn card_btn"
                    onClick={() => {
                      window.location.href = "https://ifit.co.in/";
                    }}
                  >
                    View Website
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={Project2} alt="Other projects" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Other projects</h2>
                  <p className="card_text">
                    Feel free to explore my other projects for a comprehensive
                    view of my work and capabilities
                  </p>
                  <br />
                  <button
                    className="btn card_btn"
                    onClick={() => {
                      window.location.href =
                        "https://thilakramanie-projects.netlify.app/";
                    }}
                  >
                    More&nbsp;&nbsp;&gt;&gt;
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
