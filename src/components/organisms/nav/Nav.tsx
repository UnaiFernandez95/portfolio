import { Link } from "react-router-dom";
import profilePhoto from "../../../assets/profilePhoto.png";
import resumePdf from "../../../assets/Developer-Unai-resume.pdf";
import "./nav.css";
import Button from "../../atoms/button/Button";

const Nav = () => {
  return (
    <header>
      <img src={profilePhoto} alt="Unai Fernandez" />
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
      <a className="link" href={resumePdf} download>
        <Button>  
            CV / resume
        </Button>
      </a>
    </header>
  );
};

export default Nav;
