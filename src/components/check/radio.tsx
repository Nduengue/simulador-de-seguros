import { Radio as RadioAntd } from "antd";
interface IRadio {
  itemList: {
    id: string;
    value: string;
  }[];
  defaultValue?: string
}

export default function Radio({ defaultValue, itemList }: IRadio) {
  return (
    <RadioAntd.Group defaultValue={defaultValue} className="*:border *:rounded-xl *:p-3 *:text-gray-600 font-bold  rounded-xl *:border-[#fba94c] *:flex-1 *:items-center *:justify-center flex items-center ">
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
