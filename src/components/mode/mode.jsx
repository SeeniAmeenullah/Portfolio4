import "./mode.css";
import { HiSun } from "react-icons/hi2";
import { SiGhostery } from "react-icons/si";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Mode = ({ setThemeHandler }) => {
  const theme = document.getElementsByTagName("body")[0].getAttribute("theme");
  const [icon, setIcon] = useState(
    <SiGhostery className="icon" onClick={setThemeHandler} />
  );
  useEffect(() => {
    if (theme === "true") {
      setIcon(<HiSun className="icon" onClick={setThemeHandler} />);
    } else {
      setIcon(<SiGhostery className="icon" onClick={setThemeHandler} />);
    }
  }, [setThemeHandler, theme]);
  return <div className="mode-container">{icon}</div>;
};

export default Mode;
