import { useEffect, useState } from "react";
import CommandLine from "../../components/comandLine/CommandLine";
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

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [typingText, setTypingText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= contentLines.length) return;

    const line = contentLines[currentLine];
    const interval = setInterval(() => {
      if (charIndex < line.length) {
        setTypingText((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setDisplayedLines((prev) => [...prev, line]);
        setTypingText("");
        setCharIndex(0);
        setTimeout(() => setCurrentLine((prev) => prev + 1), 20);
      }
    }, 2); 

    return () => clearInterval(interval);
  }, [charIndex, currentLine]);

  return (
    <CommandLine className="about-command-line">
      <h1>{`> ${AboutInfo.EN.name}`}</h1>
      <h2>{`→ ${AboutInfo.EN.title}`}</h2>
      {displayedLines.map((line, idx) => (
        <div key={idx} className="type-line">
          {line}
        </div>
      ))}
      {currentLine < contentLines.length && (
        <div className="type-line">
          {typingText}
          <span className="cursor">█</span>
        </div>
      )}
    </CommandLine>
  );
};

export default About;
