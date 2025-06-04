import AboutInfo from "../../data/about.json";
import CommandLine from "../../components/comandLine/CommandLine";

import "./about.css";

const About = () => {
  return (
    <CommandLine className="about-command-line">
      <h2>{AboutInfo.EN.title}</h2>
      <h3>{AboutInfo.EN.name}</h3>
      <p>{AboutInfo.EN.description}</p>
    </CommandLine>
  );
}

export default About;
