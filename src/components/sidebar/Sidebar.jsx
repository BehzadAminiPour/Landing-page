/* eslint-disable react/prop-types */
import "./Sidebar.css";

export default function Sidebar({ showIcon, onToggle }) {
  return (
    <div
      className={
        showIcon ? "sidebar sidebar-active container" : "sidebar container"
      }
    >
      <ul>
        <li>
          <a href="#" onClick={onToggle}>
            خانه
          </a>
        </li>
        <li>
          <a href="#features" onClick={onToggle}>
            دوره ها
          </a>
        </li>
        <li>
          <a href="#about" onClick={onToggle}>
            درباره ما
          </a>
        </li>
        <li>
          <a href="#download" onClick={onToggle}>
            دانلود
          </a>
        </li>
        <li>
          <a href="#faq" onClick={onToggle}>
            سوالات
          </a>
        </li>
      </ul>
    </div>
  );
}
