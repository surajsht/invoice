import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  let [nightMode, setNightMode] = useState(false);

  let toggleTheme = () => {
    const isNight = !nightMode;
    document.body.classList.toggle("night-mode");
    localStorage.setItem("theme", isNight ? "night-mode" : "");
    setNightMode(isNight);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "night-mode") {
      document.body.classList.add("night-mode");
      setNightMode(true);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="nav-content">
          <h1 className="logo"> Invoice </h1>

          <button
            className={`theme-toggle ${nightMode ? "night-mode" : ""}`}
            onClick={toggleTheme}
          >
            <MdOutlineWbSunny />
            <FaRegMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
