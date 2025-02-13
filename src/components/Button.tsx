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
  type,
}: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          className,
        )}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
