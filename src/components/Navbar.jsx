import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [icon, setIcon] = useState(false);
  const setMenuHandler = () => {
    setMenu(!menu);
    setIcon(!icon);
  };
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Thilak Ramanie</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Thilak Ramanie</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${icon && "open"}`}
            onClick={setMenuHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menu && "open"}`}>
            <li>
              <a href="#about" onClick={setMenuHandler}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={setMenuHandler}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={setMenuHandler}>
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={setMenuHandler}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={setMenuHandler}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
