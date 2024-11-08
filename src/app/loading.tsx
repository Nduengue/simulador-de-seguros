import { twMerge } from "tailwind-merge";

interface ILoading {
  className?: string;
  label?: string;
  labelClassName?: string;
}

export default function Loading({ className, label, labelClassName }: ILoading) {
  return (
    <div className={twMerge("flex flex-col items-center justify-center animate-pulse", className)}>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-orange-400 text-4xl animate-spin flex items-center justify-center border-t-orange-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-orange-600 text-2xl animate-spin flex items-center justify-center border-t-orange-600 rounded-full"></div>
        </div>
        <p className="font-bold animate-bounce">{label ? label : "Aguarde..."}</p>
      </div>
    </div>
  );
}
