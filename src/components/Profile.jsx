import Img from "../assets/img2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import doc from "../assets/CV.pdf";

const Profile = () => {
  const openDoc = () => {
    window.open(doc);
  };
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={Img} alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <h1 className="title">Thilak Ramanie</h1>
          <p className="section__text__p2">Full-stack Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={openDoc}>
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.href = "./#contact";
              }}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <FaLinkedin
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/thilak-ramanie-shanmugasundaram-153a27144/";
              }}
            />
            <FaGithub
              className="icon"
              onClick={() => {
                window.location.href = "https://github.com/ThilakRamanie";
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
