import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="nav-content">
          <h1 className="logo"> Invoice </h1>

          <button className="theme-toggle">
            <MdOutlineWbSunny />
            <FaRegMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
