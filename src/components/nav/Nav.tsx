import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <header>
      <img src="src/assets/profilePhoto.jpg" alt="Unai Fernandez" />
      <nav>
        <ul>
          <li>
            <Link className="link" to="/about">
              About me
            </Link>
          </li>
          <li>
            <Link className="link" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
