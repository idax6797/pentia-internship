import { useState } from "react";
import "../navigation/navigation.scss";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const bars = [];
  for (let i = 0; i < 3; i++) {
    bars.push(<span key={i} className="menu-container__button-bar"></span>);
  }

  return (
    <>
      <div className="logo-container">
        <a href="#">
          <img src="src/assets/icon/logo.svg" alt="Pentia" />
        </a>
      </div>
      <nav className={`navigation ${isOpen ? "navigation--open" : ""}`}>
        <ul className="navigation__menu">
          <li className="navigation__menu-item">
            <a href="#">Home</a>
          </li>
          <li className="navigation__menu-item">
            <a href="#">About</a>
          </li>
          <li className="navigation__menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="menu-container">
        <button
          aria-label="menu"
          className={`menu-container__button ${
            isOpen ? "menu-container__button--active" : ""
          }`}
          onClick={toggleMenu}
        >
          {bars}
        </button>
      </div>
    </>
  );
}
