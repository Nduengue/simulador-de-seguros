"use client";

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
  className?: string;
  useNameOnValue?: boolean;
  defaultValue?: string;
  disableAllChanges?: boolean
  setValuesFn: (e: string) => void;
}

export default function Radio({ value: Value, itemList, className, defaultValue,disableAllChanges, setValuesFn, useNameOnValue }: IRadio) {
  const [value, setValue] = useState<string>(Value);
  const [defaultRadioValue] = useState<string>(() => {
    if (defaultValue) {
      if (!value) {
        setValue(defaultValue);
      }
      return defaultValue;
    } else if (!defaultValue && !value) {
      const defaultVal = useNameOnValue ? itemList[0].name : itemList[0].id;
      setValue(defaultVal);
      return defaultVal;
    } else {
      return "";
    }
  });

  const onChange = (e: RadioChangeEvent) => {
    // console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    setValuesFn(value);
  }, [value, setValuesFn]);

  return (
    <>
      {}
      {/* <p>v -{value}</p> */}
      {/* <p>V -{Value}</p> */}
      {itemList.length > 0 ? (
        <RadioAntd.Group
        disabled={disableAllChanges}
          defaultValue={defaultRadioValue ? defaultRadioValue : value}
          onChange={onChange}
          className={twMerge(
            "*:border *:rounded-xl *:p-3 *:text-gray-600 font-bold  rounded-xl *:border-primary *:flex-1 *:items-center *:justify-center flex items-center ",
            className
          )}
        >
          {itemList.map((item) => (
            <RadioAntd key={item.id} value={useNameOnValue ? item.name : item.id} className=" has-[:checked]:bg-[#fb923c]/30 ">
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

  

  // useEffect(() => {
  //   console.log(">>> ",defaultRadioValue);
    
  // }, []);

  // const [defaultRadioValue] = useState<string>(() => {
  //   if (defaultValue) {
  //     !value && setValue(defaultValue);
  //     return defaultValue;
  //   } else if (!defaultValue && !value) {
  //     const value = useNameOnValue ? itemList[0].name : itemList[0].id;
  //     setValue(value);
  //     return value;
  //   } else {
  //     return "";
  //   }
  // });