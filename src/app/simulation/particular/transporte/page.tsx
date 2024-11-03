"use client";
// "use server"
import { Check } from "@/components/check";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/input";
import { Radio } from "antd";
import {
  BadgeDollarSign,
  CalendarDays,
  Handshake,
  IdCard,
  Rss,
  SendIcon,
  ShieldEllipsis,
  Timer,
  User2,
  Loader,
  X,
} from "lucide-react";
import Image from "next/image";
// import { useState } from "react";

// interface IVida {}

const Fake_Opt = [
  { id: 0, name: "Opção A", value: "Cobertura 0" },
  { id: 1, name: "Opção B", value: "Cobertura 1" },
  { id: 2, name: "Opção C", value: "Cobertura 2" },
  { id: 3, name: "Opção D", value: "Cobertura 3" },
  { id: 4, name: "Opção E", value: "Cobertura 4" },
  { id: 5, name: "Opção F", value: "Cobertura 5" },
  { id: 6, name: "Opção G", value: "Cobertura 6" },
  { id: 7, name: "Opção H", value: "Cobertura 7" },
  { id: 8, name: "Opção I", value: "Cobertura 8" },
  { id: 9, name: "Opção J", value: "Cobertura 9" },
  { id: 10, name: "Opção K", value: "Cobertura 10" },
];


const Data_Gender = [
  { id: "1", value: "👨‍🦰Masculino" },
  { id: "2", value: "👩‍🦰Femenino" },
];

// export default function Vida({}: IVida) {
export default function Transporte() {
  // async function handleSaveLifeSimulation() {
  //   // "use server"

  //   return {
  //     success: true,
  //     message: "Simulação salva com sucesso",
  //   };
  // }

  // const [seguradoraSelectionadas, setSeguradoraSelectionadas] = useState<
  //   string[]
  // >([]);

  // const [open, setOpen] = useState(false);

  return (
    <div className="text-gray-600 bg-[#eff4f9] min-h-screen p-4 grid place-items-center">
      <div className="bg-white lg:bg-[url('/wavess.svg')] bg-cover bg-center bg-no-repeat bg-fixed p-4 rounded-lg min-h-[35rem] flex items-center gap-x-4 shadow-lg ">
        <div className=" h-[25rem] w-[26rem] relative mx-8 hidden lg:block">
          <Image
            src="/app-icons/popp.png"
            alt="logo"
            className="absolute"
            fill
          />
        </div>

        {/* <form className="w-[29rem] space-y-2.5" action={handleSaveLifeSimulation}> */}
        <form className=" space-y-2.5">
          <div className="flex items-center gap-x-2">
            <Input.Default
              icon={User2}
              label="Primeiro Nome"
              placeholder="Insira primeiro nome"
              borderColor="border-[#fba94c]"
            />
            <Input.Default
              icon={User2}
              label="Sobre Nome"
              placeholder="Insira último nome"
              borderColor="border-[#fba94c]"
            />
          </div>
          <Input.Default
            icon={IdCard}
            label="Bilhete de Identidade"
            placeholder="000000000LA000"
            borderColor="border-[#fba94c]"
          />

          <div className="space-y-2">
            <h2 className="font-bold ">Gênero</h2>
          <Check.Radio itemList={Data_Gender} defaultValue="1"/>
          </div>

          <Input.Default
            icon={CalendarDays}
            type="date"
            label="Data de Nascimento"
            borderColor="border-[#fba94c]"
          />

          <div className="flex items-center gap-x-2 pt-1 mt-2 border-t ">
            <Input.Default
              type="number"
              icon={BadgeDollarSign}
              label="Valor da Cobertura"
              placeholder="0.00"
              borderColor="border-[#fba94c]"
            />
            <Input.Default
              type="number"
              icon={Timer}
              label="Duração do Seguro em Ano"
              placeholder="0"
              borderColor="border-[#fba94c]"
            />
          </div>
          <div className="flex gap-x-2 text-sm *:bg-orange-400 *:flex-1 text-gray-100 mt-2 *:py-1 *:rounded-lg items-center justify-between *:flex *:flex-col *:items-center *:justify-center">
            <Dialog.Drawer
              title="Selectione a Cobertura"
              buttonProps={{ type: "button" }}
              buttonTitle="Cobertura"
              icon={Rss}
            >
              <Check.CheckBox
                // activeBoxies={seguradoraSelectionadas}
                // setActiveBoxies={setSeguradoraSelectionadas}
                data={Fake_Opt}
              />
            </Dialog.Drawer>

            <Dialog.Drawer
              title="Selectione o Agravamento"
              buttonTitle="Agravamento"
              buttonProps={{ type: "button" }}
              icon={ShieldEllipsis}
            >
              <Check.CheckBox
                // activeBoxies={seguradoraSelectionadas}
                // setActiveBoxies={setSeguradoraSelectionadas}
                data={Fake_Opt}
              />
            </Dialog.Drawer>

            <Dialog.Drawer
              title="Selectione a Seguradora"
              buttonTitle="Seguradora"
              buttonProps={{ type: "button" }}
              icon={Handshake}
            >
              <Check.CheckBox
                // activeBoxies={seguradoraSelectionadas}
                // setActiveBoxies={setSeguradoraSelectionadas}
                data={Fake_Opt}
              />
            </Dialog.Drawer>
          </div>

          <hr />

          <div className="flex gap-x-2 justify-end *:flex *:items-center *:gap-x-1.5 text-gray-50 *:rounded *:bg-[#f76b15] *:px-3 *:py-1">
            <button type="reset" className="">
              <X size={15} />
              Limpar
            </button>
            <button type="submit" className="">
              <SendIcon size={15} />
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
