import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const stepVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};
