// import { IInsurance } from "@/util/option/option";
import Image from "next/image";
// import Link from "next/link";

interface IProps {
  option: IChoice;
  // link?: string;
  index: number;
  onClick: () => void;
}

const Card = ({
  option,
  // link,
  index,
  onClick
}: IProps) => {
  return (
    <div
      className={`flex rounded-2xl  shadow-lg ${index % 2 === 0 ? "bg-[#d18f46]" : "bg-[#34475b]"
        } transition ease-in-out group grid grid-cols-3`}
      onClick={onClick}
    >
      <Image
        className={`${index % 2 === 0 ? "bg-[#34475b]" : "bg-[#d18f46]"} ${index % 2 === 0
          ? "group-hover:bg-[#d18f46]"
          : "group-hover:bg-[#34475b]"
          } rounded-l-2xl h-full`}
        src={`/app-icons/simulation-types/${option.icon}`}
        alt="Simulator Type logo"
        width={120}
        height={38}
      // priority
      />
      <div className="flex flex-col gap-2 justify-center p-2 rounded-r-2xl col-span-2">
        <h3 className="text-[#eff4f9] font-bold mb-2 ">{option.name}</h3>
        <p className="text-[#fafcfd]">{option.description}</p>
      </div>
    </div>
  );
}

export default Card 