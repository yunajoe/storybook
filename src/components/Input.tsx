import "./input.css";
export interface InputProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

function Input({
  id,
  label,
  value,
  placeholder,
  onChange,
  errorMessage,
}: InputProps) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        id={id}
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && errorMessage.length > 0 && (
        <p className="input-error">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
