import "./button.css";
export interface ButtonProps {
  primary?: boolean;
  label: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

function Button({
  primary = false,
  label,
  backgroundColor = "hsl(204, 89%, 50%)",
  size = "md",
  onClick,
  ...props
}: ButtonProps) {
  const padding = size === "sm" ? "10px" : size === "md" ? "30px" : "50px";
  const bgColor = primary ? "none" : backgroundColor;
  const style = {
    backgroundColor: bgColor,
    padding,
    border: "none",
  };

  const mode = primary && "storybook-button--primary";
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={["storybook-button", mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
