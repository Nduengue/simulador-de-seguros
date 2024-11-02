import { CheckboxGroup } from "@radix-ui/themes";
import { PackageOpen } from "lucide-react";
import { useEffect } from "react";



interface ICheckBox {
  data: any[];
  activeBoxies?: string[];
  setActiveBoxies?: (value: string[]) => void;
}

export default function CheckBox({
  data,
  activeBoxies,
  setActiveBoxies,
}: ICheckBox) {
  useEffect(() => {
    console.log(activeBoxies);
  }, [activeBoxies]);

  function handleActiveBoxies(value: string) {
    // alert(value);

    if (activeBoxies) {
      if (activeBoxies.includes(value)) {
        const newActiveBoxies = activeBoxies.filter((item) => item !== value);
        setActiveBoxies && setActiveBoxies(newActiveBoxies);
      } else {
        setActiveBoxies && setActiveBoxies([...activeBoxies, value]);
      }
    }
  }

  return (
    <div className="">
      {data.length > 0 ? (
        <div className="flex flex-col gap-y-1 ">
          {/* <CheckboxGroup.Root size="1" defaultValue="1"> */}
          <CheckboxGroup.Root
            defaultValue={activeBoxies?.map((value) => String(value))}
            name="example"
            color="orange"
            className=""
          >
            {data.map((item, index) => (
              <CheckboxGroup.Item
                value={item.id}
                key={index}
                className="hover:bg-orange-400/10 p-2 rounded-lg w-full has-[:checked]:bg-orange-300/50 "
                onClick={() => handleActiveBoxies(item.id)}
              >
                {item.name}
              </CheckboxGroup.Item>
            ))}
          </CheckboxGroup.Root>
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
