import { ChangeEvent } from "react";
import "./Input.styles.scss";
const Input = ({
  onChange,
  value,
  name,
  label,
  error,
  errorMessage,
}: {
  label: string;
  name: string;
  value?: string;
  onChange: (inputValue: string) => void;
  error?: boolean;
  errorMessage?: string;
}) => {
  return (
    <div className="input_container">
      <input
        id={name}
        name={name}
        value={value}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          onChange(value)
        }
        type="text"
        placeholder=" "
      />
      <label htmlFor={name}>{label}</label>
      {error && <p className="input_container__error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
