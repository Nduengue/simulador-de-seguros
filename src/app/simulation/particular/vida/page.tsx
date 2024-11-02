// "use client";
// "use server"
import { Check } from "@/components/check";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/input";
import {
  AlertDialog,
  Button,
  Flex,
  RadioGroup,
  Spinner,
} from "@radix-ui/themes";
import {
  BadgeDollarSign,
  BookmarkIcon,
  BoxIcon,
  CalendarDays,
  Handshake,
  IdCard,
  Rss,
  SendIcon,
  ShieldEllipsis,
  Timer,
  TrashIcon,
  User2,
  X,
} from "lucide-react";
import Image from "next/image";

interface IVida {}

export default function Vida({}: IVida) {

  async function handleSaveLifeSimulation() {
    // "use server"

    return {
      success: true,
      message: "Simulação salva com sucesso",
    };
  }
  
  return (
    <div className="text-zinc-800 bg-[#eff4f9] min-h-screen p-4 grid place-items-center">
      <div className="bg-white bg-[url('/wavess.svg')] bg-cover bg-center bg-no-repeat bg-fixed p-4 rounded-lg min-h-[35rem] flex items-center gap-x-4 shadow-lg ">
        <div className=" h-[25rem] w-[26rem] relative mx-8 ">
          <Image
            src="/app-icons/popp.png"
            alt="logo"
            className="absolute"
            fill
          />
        </div>

        {/* <form className="w-[29rem] space-y-2.5" action={handleSaveLifeSimulation}> */}
        <form className="w-[29rem] space-y-2.5" >
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
            <RadioGroup.Root
              color="orange"
              defaultValue="1"
              name="example"
              style={{
                flexDirection: "row",
                gap: 10,
                borderWidth: 1,
                borderColor: "#fba94c",
                borderRadius: 12,
                padding: 12,
              }}
            >
              <RadioGroup.Item value="1">Masculino</RadioGroup.Item>
              <RadioGroup.Item value="2">Femenino</RadioGroup.Item>
            </RadioGroup.Root>
          </div>

          <Input.Default
            icon={CalendarDays}
            type="date"
            label="Data de Nascimento"
            borderColor="border-[#fba94c]"
          />

          <div className="flex gap-x-2 pt-1 mt-2 border-t ">
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
            {/* <Check.CheckBox data={[{id: 1, name: "Cobertura", value: "Cobertura 1"}, {id: 2, name: "Cobertura", value: "Cobertura 2"}, {id: 3, name: "Cobertura", value: "Cobertura 3"}, {id: 4, name: "Cobertura", value: "Cobertura 4"}, {id: 5, name: "Cobertura", value: "Cobertura 5"}]} /> */}
          <div className="flex gap-x-2 text-sm *:bg-orange-400 *:flex-1 text-gray-100 mt-2 *:py-1 *:rounded-lg items-center justify-between *:flex *:flex-col *:items-center *:justify-center">
            <Dialog.Main
            closeButtonTitle="Fechar"
              title="Selectione a Cobertura"
              triggerButton={() => (
                <button type="button">
                  <Rss size={18} />
                  <p>Cobertura</p>
                </button>
              )}
            />
            <Dialog.Main
            closeButtonTitle="Fechar"
            actionButtonFunction={() => alert("Cobertura selecionada")}
              title="Selectione o Agravamento"
              triggerButton={() => (
                <button type="button">
                  <ShieldEllipsis size={18} />
                  <p>Agravamento</p>
                </button>
              )}
            />
            <Dialog.Main
            closeButtonTitle="Fechar"
              title="Selectione a Seguradora"
              triggerButton={() => (
                <button type="button">
                  <Handshake size={18} />
                  <p>Seguradora</p>
                </button>
              )}
            />
          </div>

          <hr />

          <div className="flex gap-x-2 justify-end">
            <Button color="orange" type="reset">
              <Spinner loading={false}>
                <X size={15} />
              </Spinner>
              Limpar
            </Button>
            <Button color="orange" type="submit">
              <Spinner loading={false}>
                <SendIcon size={15} />
              </Spinner>
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}


