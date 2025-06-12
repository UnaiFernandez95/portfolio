import { useEffect, useRef, useState } from "react";
import CommandLine from "../../components/comandLine/CommandLine";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const contentLines = [
    "I'm Unai Fernandez",
    "Welcome to my portfolio website.",
    "Enter a command below, such as 'about me', 'skills', 'projects', or 'contact', to explore more about me.",
    "user ➜ ~ cd ./",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);

  // Auto-focus on input when page loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Typing effect logic
  useEffect(() => {
    if (currentLine >= contentLines.length) return;

    const line = contentLines[currentLine];
    const interval = setInterval(() => {
      if (charIndex < line.length) {
        setTypedText((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setDisplayedLines((prev) => [...prev, line]);
        setTypedText("");
        setCharIndex(0);
        setTimeout(() => setCurrentLine((prev) => prev + 1), 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [charIndex, currentLine]);

  const handleCommand = (navigateCommand: React.FormEvent) => {
    navigateCommand.preventDefault();
    const input = command.trim().toLowerCase();

    switch (input) {
      case "about me":
        navigate("/about");
        break;
      case "skills":
        navigate("/skills");
        break;
      case "projects":
        navigate("/projects");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        alert(
          "Unknown command. Try 'about me', 'skills', 'projects' or 'contact'."
        );
    }

    setCommand("");
  };

  return (
    <CommandLine className="home-command-line">
      {displayedLines.map((line, idx) => (
        <p key={idx} className="type-line">
          {line}
        </p>
      ))}
      {currentLine < contentLines.length && (
        <p className="type-line">
          {typedText}
          <span className="cursor">█</span>
        </p>
      )}

      <form onSubmit={handleCommand} className="command-form">
        <input
          ref={inputRef}
          type="text"
          value={command}
          maxLength={10}
          onChange={(e) => setCommand(e.target.value)}
          className="input-command"
        />
      </form>
    </CommandLine>
  );
};

export default Home;
