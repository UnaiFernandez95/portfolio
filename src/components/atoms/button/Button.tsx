import "./button.css"

interface ButtonProps {
  children?: React.ReactNode;
  string?: string;
  disabled?: boolean;
}

const Button = ({ children, string = "button", disabled}: ButtonProps) => {
  return (
    <button role="button" disabled={disabled}>
      {children || string}
    </button>
  );
};

export default Button;
