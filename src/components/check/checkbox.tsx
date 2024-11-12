import { Lib } from "@/lib";
import { OptionDTOType } from "@/types/dto-doods-transported";
import { PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ICheckBox extends React.HTMLAttributes<HTMLDivElement> {
  itemList: OptionDTOType[];
  className?: string;
  values: number[];
  setValuesFn: React.Dispatch<React.SetStateAction<number[]>>;
  useNameOnValue?: boolean;
}

export default function CheckBox({ itemList, values, setValuesFn, className, useNameOnValue, ...rest }: ICheckBox) {
  const { createId } = Lib.Cuid();
  const uuid = createId({ length: 10 });

  // useEffect(() => {
   
    // setValuesFn(itemList.filter((item) => item.selected).map((item) => item.id));
  // }, []);

  return (
    <div>
      {itemList.length > 0 ? (
        <div className={twMerge("grid gap-2", className)} {...rest}>
          {itemList.map((item) => (
            <BoxItem
              myClassName={uuid}
              key={item.id}
              setSelectedValues={setValuesFn}
              useNameOnValue={useNameOnValue}
              boxState={item.selected||values.includes(Number(item.id))}
              item={item}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-y-1 items-center text-zinc-800">
          <PackageOpen size={35} />
          <p className="italic">Nenhum item disponível</p>
        </div>
      )}
    </div>
  );
}

function BoxItem({
  boxState,
  myClassName,
  setSelectedValues,
  useNameOnValue,
  item,
}: {
  boxState: boolean;
  myClassName: string;
  item: OptionDTOType;
  useNameOnValue?: boolean;
  setSelectedValues: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [check, setCheck] = useState(boxState);

  useEffect(() => {
    setCheck(boxState);
  }, [boxState]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setCheck(checked);

    setSelectedValues((prevValues) => {
      let updatedValues = [...prevValues];

      // Adicionar ou remover o valor do item atual
      if (checked) {
        updatedValues.push(Number(item.id));
      } else {
        updatedValues = updatedValues.filter((id) => id !== Number(item.id));
      }

      // Aplicar lógica de toggle nos ids dependentes
      item.taggle_ids?.forEach((toggleId) => {
        if (checked) {
          // Remover dependentes se o checkbox atual foi marcado
          updatedValues = updatedValues.filter((id) => id !== toggleId);
        }
      });

      return updatedValues;
    });
  }

  const { createId } = Lib.Cuid();
  const uuid = createId({ length: 10 });

  return (
    <label
      htmlFor={uuid}
      className="flex flex-row items-center gap-2 text-sm text-[#212121] hover:bg-orange-200/10 p-3 rounded-lg w-full border has-[:checked]:bg-orange-300/50 has-[:checked]:border-orange-300"
    >
      <input
        disabled={item.required}
        id={uuid}
        type="checkbox"
        className={`peer hidden ${myClassName}`}
        checked={check}
        value={useNameOnValue ? item.name : item.id}
        onChange={handleChange}
      />
      <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#fdfdfd] peer-checked:bg-[#fba94c] transition">
        <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5 dark:stroke-[#fff]" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      {item.name}
    </label>
  );
}
