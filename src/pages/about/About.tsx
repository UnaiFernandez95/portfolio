
import CommandLine from "../../components/comandLine/CommandLine";
import AboutInfo from "../../data/about.json";
import "./about.css";

const About = () => {
  return (
    <CommandLine className="about-command-line">
      <h2>{AboutInfo.EN.title}</h2>
      <h3>{AboutInfo.EN.name}</h3>
      <h3>📝 Summary</h3>
      <p>{AboutInfo.EN.resume}</p>
      <h3>📖 Story</h3>
      {AboutInfo.EN.story.map((paragraph: string) => (
        <p>{paragraph}</p>
      ))}
    </CommandLine>
  );
}

export default About;
