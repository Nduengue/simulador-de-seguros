import { CheckboxGroup } from "@radix-ui/themes";
import { PackageOpen } from "lucide-react";

interface ICheckBox {
  data: any[];
}

export default function CheckBox({ data }: ICheckBox) {
  return (
    <div className="p-4">
      {data.length > 0 ? (
        <div className="flex flex-col gap-y-1 ">
          {/* <CheckboxGroup.Root size="1" defaultValue="1"> */}
          <CheckboxGroup.Root defaultValue={["1"]} name="example" color="orange">
            {data.map((item, index) => (
              <CheckboxGroup.Item value={item.id} key={index}>
                {item.name}
              </CheckboxGroup.Item>
            ))}
          </CheckboxGroup.Root>
        </div>
      ) : (
        <div className="flex flex-col gap-y-1 items-center">
          <PackageOpen size={35} />
          <p className="italic">Nenhum item disponível</p>
        </div>
      )}
    </div>
  );
}
