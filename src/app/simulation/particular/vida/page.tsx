import { Input } from "@/components/input";
import { User2 } from "lucide-react";
import Image from "next/image";

interface IVida {}

export default function Vida({}: IVida) {
  return (
    <div className="text-zinc-800 bg-[#eff4f9] min-h-screen p-4 grid place-items-center">
      <div className="bg-white p-4 rounded-lg min-h-[35rem]">
        <Image
          src="/app-icons/save-money.png"
          alt="logo"
          width={100}
          height={100}
        />
        <div>
          <Input.Default icon={User2} label="Nome" />
          <Input.Default icon={User2} label="Sobre Nome" />
          <Input.Default icon={User2} label="Bilhete de Identidade" />
          <Input.Default icon={User2} label="Gênero" />
          <Input.Default icon={User2} label="Data de Nascimento" />
          <hr />
          <Input.Default icon={User2} label="Valor da Cobertura" />
          <Input.Default icon={User2} label="Duração do Seguro em Ano" />
        </div>
      </div>
    </div>
  );
}
