import CommandLine from "../../components/comandLine/CommandLine";
import TypingText from "../../components/typingText/TypingText";
import AboutInfo from "../../data/about.json";
import "./about.css";

const About = () => {
  const contentLines = [
    "-----------------------------------------------------",
    "📝 Summary",
    `${AboutInfo.EN.resume}`,
    "-----------------------------------------------------",
    "📖 Story",
    ...AboutInfo.EN.story.map((paragraph) => `${paragraph}`),
  ];

  return (
    <CommandLine className="about-command-line">
      <h1>{`> ${AboutInfo.EN.name}`}</h1>
      <h2>{`→ ${AboutInfo.EN.title}`}</h2>
      <TypingText lines={contentLines} />
    </CommandLine>
  );
};

export default About;
