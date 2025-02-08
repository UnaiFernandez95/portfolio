import "./button.css";

type buttonProps = {
  title: string;
};

enum color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

enum typeButton {
  Primary = "primary",
  Secundary = "secundary",
  Tertiary = "tertiary",
}

const Buttom = (buttonProps: buttonProps) => {
  return (
    <button>
      <span className={`text-${color}`}>{buttonProps.title}</span>
    </button>
  );
};

export default Buttom;
