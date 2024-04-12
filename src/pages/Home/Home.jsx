import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Mode from "../../components/mode/mode";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";
import Utilities from "./../../components/Utilities";

import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState(true);
  const [loading, setLoading] = useState(true);
  const setThemeHandler = () => {
    setTheme(!theme);
    document.getElementsByTagName("body")[0].setAttribute("theme", theme);
  };
  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={theme ? "light-theme" : "dark-theme"}>
            {/* <Loading /> */}
            <Navbar />
            <Profile />
            <About />
            <Utilities />
            <Experience />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
            <div className="switch-mode">
              <Mode setThemeHandler={setThemeHandler} />
            </div>
          </div>
        </motion.div>
        // <Loading />
      )}
    </>
  );
};

export default Home;
