// import { Input } from "@/components/input";
import { AppLayout } from "@/components/layout";
// import { Search } from "lucide-react";
import Image from "next/image";
// import { APP_AVALIABLE_PARTICULAR_SIMULATION } from "@/mocks/simullation-type";
import CardGroup from "@/components/CardGroup/CardGroup";

interface IProps {
  title?: string;
  description?: string;
  route?: string;
  link?: string;
}

const ShowCardGroupPage = ({
  title = "Selecione o Seguro para Simulação",
  description = `Escolha abaixo o seguro que deseja simular. Cada opção
    oferece uma breve descrição para facilitar sua escolha. Basta
    clicar em um dos tipos e avançar para calcular a melhor oferta
    para você!`,
  route = "insurance",
  link = "/simulation/insurancetype"
}: IProps) => {
  return (
    <div className="min-h-screen  font-[family-name:var(--font-geist-sans)] translate ease-in-out">
      <AppLayout.PublicHeader />

      <main
        className="row-start-2 items-center sm:items-start  text-[#2c2c2c]"
        id="inicio"
      >
        <div className="bg-[#eff4f9] flex flex-col items-center justify-center">
          <Image
            className=""
            src="/app-icons/Why_trust_Pg.png"
            alt="Next.js logo"
            width={680}
            height={168}
            priority
          />
          <div className="flex flex-col items-center gap-y-3 px-6 mb-10 text-center  md:px-20">
            <h2 className="text-[#d18f46] font-bold text-3xl ">
              {title}
            </h2>
            <p>
              {description}
            </p>
          </div>
          <div className="flex flex-col w-full p-8">
            {/* <div className="sm:w-1/3 mb-4 sm:self-end md:pr-14">
              <Input.Default
                icon={Search}
                placeholder="Pesquisar tipo de seguro"
              />
            </div> */}

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 sm:px-0 sm:text-sm md:px-14 mb-60">
              {/* {APP_AVALIABLE_PARTICULAR_SIMULATION.map((item, index) => (
                <CardAvaliableSimulation key={index} {...item} index={index} />
              ))} */}
              <CardGroup route={route} link={link} />
            </div>

          </div>
          {/* <button className="my-8 bg-[#0f1b2d] rounded-lg p-1.5 px-3 shadow-2xl text-[#fff]">
            Ver todos...
          </button> */}
        </div>
      </main>
      <AppLayout.PublicFooter />
    </div>
  );
}

export default ShowCardGroupPage;