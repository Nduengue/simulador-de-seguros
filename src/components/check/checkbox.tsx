import { PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";

interface ICheckBox extends React.HTMLAttributes<HTMLDivElement> {
  data: { id: string | number; name: string }[];
  className?: string;
  values: string[];
  setValuesFn: (value: string[]) => void;
  useNameOnValue?: boolean;
}

export default function CheckBox({ data, values, setValuesFn, className, useNameOnValue, ...rest }: ICheckBox) {
  const uuid = crypto.randomUUID();

  return (
    <div>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 " {...rest}>
          {/* {JSON.stringify(value, null, 2)} */}
          {data.map((items, index) => (
            <BoxItem myClassName={uuid} setSelectedValues={setValuesFn} boxState={values.includes(String(items.id))} item={items} />
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
  item: {
    name: string;
    id: string | number;
  };
  useNameOnValue?: boolean;
  setSelectedValues: (value: string[]) => void;
}) {
  const [check, setCheck] = useState(boxState);

  useEffect(() => {
    console.log(myClassName);
    const allHtmlElements = Array.from(window.document.getElementsByClassName(myClassName));
    const avaliableValues = allHtmlElements.filter((html): html is HTMLInputElement => html instanceof HTMLInputElement && html.checked).map((html) => html.value);
    setSelectedValues(avaliableValues);
    console.log(avaliableValues);
  }, [check]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCheck(e.target.checked);
  }

  // const uuid = Math.random().toString(36).substring(2, 15);
  const uuid = crypto.randomUUID();

  return (
    <label
      htmlFor={uuid}
      className="flex flex-row items-center gap-2  text-sm text-[#212121] hover:bg-orange-200/10 p-3 rounded-lg w-full border has-[:checked]:bg-orange-300/50 has-[:checked]:border-orange-300"
    >
      <input id={uuid} type="checkbox" className={`peer hidden ${myClassName}`} checked={check} value={useNameOnValue ? item.name : item.id} onChange={handleChange} />
      <div
        // htmlFor={uuid}
        className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#fdfdfd] peer-checked:bg-[#fba94c] transition"
      >
        <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5 dark:stroke-[#fff]" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      {item.name}
    </label>
  );
}

// function Variant1({
//   myClassName,
//   useNameOnValue,
//   uuid,
//   item,
//   handleChange
// }: {
//   uuid: string;
//   myClassName: string;
//   useNameOnValue: boolean;
//   item: { name: string; id: string | number };
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   return (
//     <label
//       htmlFor={uuid}
//       className="flex flex-row items-center gap-2  text-sm text-[#212121] hover:bg-orange-200/10 p-3 rounded-lg w-full border has-[:checked]:bg-orange-300/50 has-[:checked]:border-orange-300"
//     >
//       <input id={uuid} type="checkbox" className={`peer hidden ${myClassName}`} checked={check} value={useNameOnValue ? item.name : item.id} onChange={handleChange} />
//       <div
//         // htmlFor={uuid}
//         className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#fdfdfd] peer-checked:bg-[#fba94c] transition"
//       >
//         <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5 dark:stroke-[#fff]" xmlns="http://www.w3.org/2000/svg">
//           <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//         </svg>
//       </div>
//       {item.name}
//     </label>
//   );
// }
