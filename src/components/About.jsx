// import Img from "../assets/profile_img.webp";
import { MdWork, MdSchool } from "react-icons/md";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <MdWork className="icon" />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Full-stack Development
                </p>
              </div>
              <div className="details-container">
                <MdSchool className="icon" />
                <h3>Education</h3>
                <p>
                  M.Sc. Computing(current)
                  <br />
                  B.Tech. Information Technology
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Currently pursuing an MSC in Computing at DCU, Ireland, and
                expected to graduate with a 2.1 grade by July 2024. With over 2
                years of experience as a full-stack developer, I specialize in
                JavaScript, React.js, Angular, and Node.js. Available for
                full-time roles in Dublin post-graduation, ready to contribute
                to impactful software development projects.
              </p>
            </div>
          </div>
          <div className="section__pic-container">
            {/* <img src={Img} alt="Profile picture" className="about-pic" /> */}
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
