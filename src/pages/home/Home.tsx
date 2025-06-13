import { useEffect, useRef, useState } from "react";
import CommandLine from "../../components/organisms/comandLine/CommandLine";
import { useNavigate } from "react-router-dom";
import "./home.css";
import TypingText from "../../components/molecules/typingText/TypingText";

const Home = () => {
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  
  const contentLines = [
    "I'm Unai Fernandez",
    "Welcome to my portfolio website.",
    "Enter a command below, such as 'about me', 'skills', 'projects', or 'contact', to explore more about me.",
  ];
  
  const [showMessage, setShowMessage] = useState(false);
  
  // Auto-focus on input when page loads
  useEffect(() => {
    showMessage && inputRef.current?.focus();
  }, [showMessage]);
  //form 
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
      <TypingText lines={contentLines} onTypingFinished={() => setShowMessage(true)} />
      <form onSubmit={handleCommand} className="command-form">
        <div>{showMessage && <p>user ➜ ~ cd ./</p>}</div>
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
