import { Link } from "react-router-dom";

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/resume" className="navbar-brand">
      Efren Ulloa
    </Link>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/experience">
          Experience
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/skills">
          Skills
        </Link>
      </li>
    </ul>
  </nav>
);
