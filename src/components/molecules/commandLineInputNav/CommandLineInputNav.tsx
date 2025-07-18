import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./commandLineInputNav.css";

interface CommandLineInputNavProps {
  showMessage?: boolean;
  isAutofocus?: boolean;
}

const CommandLineInputNav = ({ showMessage = true, isAutofocus = false }: CommandLineInputNavProps) => {
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto-focus on input when page loads
  useEffect(() => {
    showMessage && isAutofocus && inputRef.current?.focus();
  }, [showMessage]);

  const handleCommand = (navigateCommand: React.FormEvent) => {
    navigateCommand.preventDefault();
    const input = command.trim().toLowerCase();

    switch (input) {
      case "about":
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
          "Unknown command. Try 'about', 'skills', 'projects' or 'contact'."
        );
    }

    setCommand("");
  };
  return (
    <>
      {showMessage ? (
        <form onSubmit={handleCommand} className="command-line-form">
          <hr className="command-line-form-separator" />
          <p>
            {"-> "}Enter a command below, such as 'about', 'skills', 'projects',
            or 'contact', to explore more about me.
          </p>
          <div className="command-line-form-command-input">
            <p className="command-line-form-command-input__p-1">{"user "}</p>
            <p className="command-line-form-command-input__p-2">{" ➜ ~"}</p>
            <p className="command-line-form-command-input__p-3">{"cd ./"}</p>
            <input
              ref={inputRef}
              type="text"
              value={command}
              maxLength={10}
              onChange={(e) => setCommand(e.target.value)}
              className="input-command"
            />
          </div>
        </form>
      ) : null}
    </>
  );
};
export default CommandLineInputNav;
