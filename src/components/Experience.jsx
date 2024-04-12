import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>React.js</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>Angular</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>Vue.js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>React Native</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>Node.js</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaCheckCircle className="icon" />
                  <div>
                    <h3>AWS</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
