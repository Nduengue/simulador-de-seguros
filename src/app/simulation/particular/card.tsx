import Image from "next/image";
import Link from "next/link";

interface ICardAvaliableSimulation {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

export default function CardAvaliableSimulation({
  image,
  title,
  description,
  link,
  index,
}: ICardAvaliableSimulation) {
  return (
    <Link
      href={link}
      className={`flex  rounded-2xl  shadow-lg ${
        index % 2 === 0 ? "bg-[#d18f46]" : "bg-[#34475b]"
      } transition ease-in-out group`}
    >
      <Image
        className={`${
          index % 2 === 0 ? "bg-[#34475b]" : "bg-[#d18f46]"
        } rounded-l-2xl ${
          index % 2 === 0
            ? "group-hover:bg-[#d18f46]"
            : "group-hover:bg-[#34475b]"
        }`}
        src={image}
        alt="Simulator Type logo"
        width={120}
        height={38}
        priority
      />
      <div className="p-2  rounded-r-2xl">
        <h3 className="text-[#eff4f9] font-bold mb-2 ">{title}</h3>
        <p className="text-[#fafcfd]">{description}</p>
      </div>
    </Link>
  );
}
