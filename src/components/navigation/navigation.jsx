import "../navigation/navigation.scss";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <button className="navigation__toggle">
          <span className="navigation__toggle-icon"></span>
        </button>
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
    </>
  );
}
