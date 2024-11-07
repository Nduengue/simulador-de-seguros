import { Radio as RadioAntd, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
interface IRadio {
  itemList: {
    id: string;
    value: string;
  }[];
  defaultValue?: string
  className?:string
}

export default function Radio({ defaultValue, itemList,className }: IRadio) {

  const [value, setValue] = useState<string>("");

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    defaultValue && setValue(String(defaultValue));
  }, [defaultValue]);
  
  return (
    <RadioAntd.Group defaultValue={defaultValue} className={twMerge("*:border *:rounded-xl *:p-3 *:text-gray-600 font-bold  rounded-xl *:border-[#fba94c] *:flex-1 *:items-center *:justify-center flex items-center ", className)}>
      {itemList.map((item) => (
        <RadioAntd
          key={item.id}
          value={item.id}
          className=" has-[:checked]:bg-[#fb923c]/30 "
        >
          {item.value}
        </RadioAntd>
      ))}
    </RadioAntd.Group>
  );
}
