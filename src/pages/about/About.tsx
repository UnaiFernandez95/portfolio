import { useState } from "react";
import CommandLineInputNav from "../../components/molecules/commandLineInputNav/CommandLineInputNav";
import TypingText from "../../components/molecules/typingText/TypingText";
import AboutInfo from "../../data/about.json";
import "./about.css";

const About = () => {
  const contentLines = [
    "-----------------------------------------------------",
    "📝 Summary",
    `${AboutInfo.EN.resume}`,
    "-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --",
    "📖 Story",
    ...AboutInfo.EN.story.map((paragraph) => `${paragraph}`),
  ];

  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <article className="about">
      <h1>{`> ${AboutInfo.EN.name}`}</h1>
      <h2>{`→ ${AboutInfo.EN.title}`}</h2>
      <TypingText
        lines={contentLines}
        onTypingFinished={() => setShowMessage(true)}
        time={50}
      />
      <CommandLineInputNav showMessage={showMessage} isAutofocus={false} />
    </article>
  );
};

export default About;
