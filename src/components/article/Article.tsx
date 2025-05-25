import "./article.css";

const Article = () => {
  return (
    <article>
      <h3>About Me</h3>
      <p>
        Web developer with over three years of experience in software
        development. Mainly working as a frontend developer at the start-up
        Lookiero, also handling some backend tasks with Java. Currently studying
        the development of Backend with Python (FastAPI). Interested in user
        experience (UX), and process optimization.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>Web Applications FastAPI, Django.</li>
        <li>HTML & CSS</li>
        <li>Javascript (& TypeScript)</li>
        <li>React, React Native, NextJs.</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>FastAPI, Django. </li>
        <li>SQL: PostgreSQL </li>
        <li>GIT </li>
        <li>Continuous Integration</li>
      </ul>
      <h3>Work Experience</h3>
      <ul>
        <li>
          <strong>Lookiero</strong> - Web Developer
          <p>2021 - 2024</p>
          <ul>
            <li>Worked with technologies like React.</li>
            <li>
              Created Storybook workshops for shared components across various
              applications in the UI.
            </li>
            <li>
              Built applications with a hexagonal architecture on the front end.
            </li>
            <li>
              Implemented unit and UI testing using Jest and Testing Library.
            </li>
          </ul>
        </li>
      </ul>
      <h3>My own projects</h3>
    </article>
  );
}

export default Article;
