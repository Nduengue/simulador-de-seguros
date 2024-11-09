import { Radio as RadioAntd, RadioChangeEvent } from "antd";
import { PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
interface IRadio {
  itemList: {
    id: string;
    name: string;
  }[];
  value: string;
  setValuesFn: (e: string) => void;
  className?: string;
  useNameOnValue?: boolean;
}

export default function Radio({ value: Value, itemList, className, setValuesFn, useNameOnValue }: IRadio) {
  const [value, setValue] = useState<string>(Value);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    setValuesFn(value);
  }, [value]);

  return (
    <>
      {itemList.length > 0 ? (
        <RadioAntd.Group
          defaultValue={value}
          onChange={onChange}
          className={twMerge(
            "*:border *:rounded-xl *:p-3 *:text-gray-600 font-bold  rounded-xl *:border-[#fba94c] *:flex-1 *:items-center *:justify-center flex items-center ",
            className
          )}
        >
          {itemList.map((item) => (
            // <RadioAntd key={item.id} value={useNameOnValue ? item.name : item.id} className=" has-[:checked]:bg-[#fb923c]/30 ">
            <RadioAntd key={item.id} value={value} className=" has-[:checked]:bg-[#fb923c]/30 ">
              {item.name}
            </RadioAntd>
          ))}
        </RadioAntd.Group>
      ) : (
        <div className="flex flex-col gap-y-1 items-center text-zinc-800">
          <PackageOpen size={35} />
          <p className="italic">Nenhum item disponível</p>
        </div>
      )}
    </>
  );
}
