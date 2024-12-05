import "./input.css";
export interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: () => void;
  errorMessage?: string;
}

function Input({
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
