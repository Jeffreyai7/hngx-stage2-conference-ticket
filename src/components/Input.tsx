import { InputHTMLAttributes, ReactNode } from "react";
import cn  from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    className?: string;
  }

const Input = ({
  className,
  min,
  type,
  placeholder,
  id,
  name,
  value,
  readOnly,
  required,
  onChange,
  autoComplete,
}: InputProps) => {
  return (
    <div className={cn("my-[16px]", className)}>
      <input
        min={min}
        className={cn("text-[1rem] outline-none  w-full ", className)}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
    </div>
  );
};
export default Input;
