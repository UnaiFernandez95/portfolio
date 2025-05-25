import './nav.css'; 

const Nav = () => {
  return (
    <header>
      <img src="src/assets/profilePhoto.jpg" alt="Unai Fernandez" />
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
