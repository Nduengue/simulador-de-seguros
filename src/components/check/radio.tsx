import { Radio as RadioAntd } from "antd";
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
