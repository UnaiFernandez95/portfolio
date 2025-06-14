import SkillsInfo from "../../data/skills.json";
import "./skills.css";

// importing Icons 
import cssIcon from "./../../assets/icons/css.svg";
import htmlIcon from "./../../assets/icons/html.svg";
import javascriptIcon from "./../../assets/icons/javascript.svg";
import nextjsIcon from "./../../assets/icons/nextjs.svg";
import nodeIcon from "./../../assets/icons/node.svg";
import reactIcon from "./../../assets/icons/react.svg";
import reactNativeIcon from "./../../assets/icons/reactnative.svg";
import restApiIcon from "./../../assets/icons/restapi.svg";
import typescriptIcon from "./../../assets/icons/typescript.svg";
import CommandLineInputNav from "../../components/molecules/commandLineInputNav/CommandLineInputNav";

const ICON_MAP: Record<string, string> = {
  css: cssIcon,
  html: htmlIcon,
  javascript: javascriptIcon,
  typescript: typescriptIcon,
  react: reactIcon,
  reactnative: reactNativeIcon,
  nextjs: nextjsIcon,
  node: nodeIcon,
  restapi: restApiIcon,
};

const Skills = () => {
  return (
    <article className="skills">
      <h2>Skills and Technologies I Work With 💻</h2>
      <h3>{SkillsInfo.EN.frontend.title}</h3>
      <p>{SkillsInfo.EN.frontend.description}</p>
      <ul>
        {SkillsInfo.EN.frontend.technologies.map((tech) => {
          const iconSrc = tech.icon ? ICON_MAP[tech.icon] : null;
          return (
            <li key={tech.name}>
              <span>
                {iconSrc ? (
                  <img src={iconSrc} alt={`${tech.name} icon`} />
                ) : null}
              </span>
              {tech.name}
            </li>
          );
        })}
      </ul>
      <CommandLineInputNav isAutofocus={true} />
    </article>
  );
};

export default Skills;
