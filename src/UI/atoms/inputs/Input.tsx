import { ChangeEvent, FC, useCallback, useRef } from "react";
import "./input.css";

interface InputsProps {
  readonly playholderText?: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly maxLength?: number;
}

const Inputs: FC<InputsProps> = ({
  playholderText,
  value,
  onChange,
  maxLength,
}: InputsProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      if (maxLength === undefined || value.length <= maxLength) {
        onChange(value);
      }
    },
    [maxLength, onChange]
  );
  return (
    <>
      {playholderText ? <p className="playholder">{playholderText}</p> : null}
      <input value={value} onChange={handleOnChange} />
    </>
  );
};
export default Inputs;
