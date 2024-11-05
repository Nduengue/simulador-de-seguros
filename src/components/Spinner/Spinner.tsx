import { Loader } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ISpinnerProps {
  className?: string;
}

const Spinner = ({ className }: ISpinnerProps) => {
  return (
    <Loader className={`${twMerge("text-gray-800 animate-spin", className)}`} />
  );
};

export default Spinner;
