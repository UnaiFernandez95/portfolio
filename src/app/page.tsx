import Button from "../component-library/atoms/button/Button";
import "./page.css";

const Component = () => {
  return (
    <header>
      <h1>Unai Fernandez</h1>
      <nav>
        <Button title={"Sobre mí"} />
        <Button title={"skills"} />
        <Button title={"Proyectos"} />
        <Button title={"Más Info"} />
      </nav>
    </header>
  );
};

export default Component;
