import { PackageOpen } from "lucide-react";
import { Checkbox } from 'antd';
import type { GetProp } from 'antd';

interface ICheckBox extends React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  activeBoxies?: string[];
  // setActiveBoxies?: (value: string[]) => void;
}

export default function CheckBox({
  data,
  // activeBoxies,
  // setActiveBoxies,
  ...rest
}: ICheckBox) {


  // function handleActiveBoxies(value: string) {
  //   if (activeBoxies) {
  //     if (activeBoxies.includes(value)) {
  //       const newActiveBoxies = activeBoxies.filter((item) => item !== value);
  //       setActiveBoxies && setActiveBoxies(newActiveBoxies);
  //     } else {
  //       setActiveBoxies && setActiveBoxies([...activeBoxies, value]);
  //     }
  //   }
  // }


  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };


  return (
    <div >
      {data.length > 0 ? (
        <div className="flex flex-col gap-y-1 " {...rest}>
          {/* <CheckboxGroup.Root size="1" defaultValue="1"> */}
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange} className="grid grid-cols-4 gap-2">
            {data.map((item, index) => (
            // 
            <Checkbox value={item.name} id={item.id} key={index} className=" hover:bg-blue-400/10 p-2 rounded-lg w-full border has-[:checked]:bg-orange-300/50 has-[:checked]:border-orange-300 ">{item.name}</Checkbox>
            ))}
          </Checkbox.Group>
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
