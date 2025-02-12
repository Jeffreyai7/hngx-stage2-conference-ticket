import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
  }
  

const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          className,
          disabled ? "hover:shadow-0" : ""
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
