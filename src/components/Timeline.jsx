const Timeline = () => {
  return (
    <main className="timeline-container">
      <div className="timeline">
      <div className="tl-content tl-content-active">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">ScribeEMR</p>
            <p className="tl-company-title">Front-end developer(part-time)</p>
            <time className="tl-time" dateTime="2023-06-20">
              March 2024 - Current
            </time>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">Harrier Systems</p>
            <p className="tl-company-title">Front-end developer(part-time)</p>
            <time className="tl-time" dateTime="2023-06-20">
              October 2023 - Feb 2024
            </time>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">ScribeEMR</p>
            <p className="tl-company-title">Software Developer</p>
            <time className="tl-time" dateTime="2023-06-18">
              January 2023 - July 2023
            </time>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">iFit CO</p>
            <p className="tl-company-title">Freelance Web Developer</p>
            <time className="tl-time" dateTime="2023-06-18">
              Decmber 2022 - January 2023
            </time>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">Siemens</p>
            <p className="tl-company-title">Software Developer</p>
            <time className="tl-time" dateTime="2023-06-18">
              December 2021 - December 2022
            </time>
          </div>
        </div>
        <div className="tl-content">
          <div className="tl-header">
            <span className="tl-marker"></span>
            <p className="tl-title">Aptean Limited</p>
            <p className="tl-company-title">QA Engineer</p>
            <time className="tl-time" dateTime="2023-06-18">
              February 2021 - December 2021
            </time>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
