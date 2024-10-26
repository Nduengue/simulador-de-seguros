import { Phone } from "lucide-react";

interface DefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function Default({ label, ...rest }: DefaultProps) {
  const randomUUID = crypto.randomUUID();
  return (
    <div className="border border-[#075985] rounded-lg p-2 space-y-2">
      <label htmlFor={randomUUID} className="font-bold">{label}</label>
      <div className="flex items-center gap-2 p-2">
        <Phone className="text-[#34475b]"/>
        <input
          id={randomUUID}
          className=" bg-transparent outline-none"
          {...rest}
        />
      </div>
    </div>
  );
}
