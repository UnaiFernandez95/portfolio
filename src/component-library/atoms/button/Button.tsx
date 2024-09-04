import "./button.css";

type buttonProps = {
  title: string;
};

const Buttom = (buttonProps: buttonProps) => {
  return (
    <button>
      <span className="box">{buttonProps.title}</span>
    </button>
  );
};

export default Buttom;
