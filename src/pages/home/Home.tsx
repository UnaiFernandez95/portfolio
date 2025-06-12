import { useState } from "react";
import CommandLine from "../../components/comandLine/CommandLine";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [command, setCommand] = useState("");
  const navigate = useNavigate();

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
    <CommandLine>
      <h1>I'm Unai Fernandez</h1>
      <h2>Welcome to my portfolio website.</h2>
      <p>
        Enter a command above such as 'about me', 'skills', 'projects', or
        'contact' to explore more about me.
      </p>
      <form onSubmit={handleCommand} className="command-form">
        <p>{"user ➜ ~ cd ./"} </p>
        <input
          type="text"
          value={command}
          maxLength={10}
          onChange={(navigateCommand) =>
            setCommand(navigateCommand.target.value)
          }
          className="input-command"
        />
      </form>
    </CommandLine>
  );
}

export default Home;
