/* eslint-disable react/prop-types */

import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import "./Navbar.css";

export default function Navbar({ showIcon,onToggle }) {
  return (
    <nav className="navbar container">
      <div className="menu-icon" onClick={onToggle}>
        {showIcon ? (
          <MdOutlineClose color="#fff" size={25} />
        ) : (
          <CiMenuBurger color="#fff" size={25} />
        )}
      </div>
      <div className="menu">
        <ul className="nav-links">
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#features">دوره ها</a>
          </li>
          <li>
            <a href="#about"> درباره ما</a>
          </li>
          <li>
            <a href="#download">دانلود</a>
          </li>
          <li>
            <a href="#faq">سوالات</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <h4>Behzad</h4>
      </div>
    </nav>
  );
}
