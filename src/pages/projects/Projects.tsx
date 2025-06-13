import CommandLine from "../../components/organisms/comandLine/CommandLine";
import CommandLineInputNav from "../../components/molecules/commandLineInputNav/CommandLineInputNav";

import "./projects.css";

const Projects = () => {
  return (
    <CommandLine className="projects-command-line">
      <h2>
        This section is currently under construction. Information will be added
        soon.
      </h2>
      <h3>Sorry for the trouble :D</h3>
      <CommandLineInputNav isAutofocus={true} />
    </CommandLine>
  );
}

export default Projects;
