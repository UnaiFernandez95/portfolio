import "./input.css";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  required?: boolean;
  label?: string;
  maxLength?: number;
}

const Input = ({ placeholder, type, value, onChange, id, name, required, label, maxLength = 50 }: InputProps) => {
  return (
    <div className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
}

export default Input;
