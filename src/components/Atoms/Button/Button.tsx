import "./Button.styles.scss";

interface Button {
  colorScheme: "dark" | "light";
  onClick?: () => void;
  label: string;
}

const Button = ({ label, colorScheme, onClick }: Button) => {
  return (
    <button
      className={`${colorScheme}-button`}
      type="button"
      onClick={onClick ? onClick : undefined}
    >
      {label}
    </button>
  );
};

export default Button;
