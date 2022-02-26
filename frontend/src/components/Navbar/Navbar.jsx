import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

const hideNavBtn = (e) => {
  setToggle(true)
}

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div
        className="app__navbar-menu"
        style={toggle ? { backgroundColor:'transparent',animation:'ease-in-out', transitionDuration:'0.6s' } : {}}
      >
        <HiMenuAlt4 onClick={() => hideNavBtn()} className={`${toggle ? "toggled" : ""}`}/>

        {toggle && (
          <motion.div
            whileInView={{ y: [350, 0], opacity: [0, 1] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="app__navbar-container"
          >
            {<HiX onClick={() => setToggle(false)} />}
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
