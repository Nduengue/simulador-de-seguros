import { Phone } from "lucide-react";
import { ElementType } from "react";

interface DefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: ElementType
}
export function Default({ label,icon:Icon, ...rest }: DefaultProps) {
  const randomUUID = crypto.randomUUID();
  return (
    <div className=" space-y-2 bg">
      <label htmlFor={randomUUID} className="font-bold">{label}</label>
      <div className="flex items-center border gap-x-2 border-[#075985] rounded-xl p-3">
        <Icon className="text-[#34475b]"/>
        <input
          id={randomUUID}
          className="outline-none bg-transparent w-full"
          {...rest}
        />
      </div>
    </div>
  );
}
