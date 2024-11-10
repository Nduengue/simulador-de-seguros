import { Lib } from "@/lib";
import { ElementType } from "react";

interface DefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: ElementType;
  iconColor?: string;
  borderColor?: string;
}
export function Default({ label, icon: Icon, iconColor, borderColor, ...rest }: DefaultProps) {
  /**
   *     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   */
  const { createId } = Lib.Cuid();

  const randomUUID = createId({ length: 10 });

  return (
    <div className=" space-y-2 ">
      <label htmlFor={randomUUID} className="font-bold">
        {label}
      </label>
      <div className={`${borderColor ? borderColor : "border-[#075985]"} flex items-center border gap-x-2 rounded-xl p-3`}>
        <Icon className={iconColor ? iconColor : "text-[#34475b]"} />
        <input id={randomUUID} className="outline-none bg-transparent w-full" {...rest} />
      </div>
    </div>
  );
}
