import { Input } from "@/components/input";
import { AppLayout } from "@/components/layout";
import { APP_BENEFITS } from "@/mocks/benefes";
import { MailIcon, Phone, Send, User2 } from "lucide-react";
// import Categories from "@/components/Categories/Categories";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";

export default function Home() {

  const categories: IChoice[] = [
    {
      "id": 1,
      "name": "Particular",
      "icon": "person",
      "description": "Projetado para empresas de todos os portes, oferecendo proteção para ativos empresariais, como equipamentos, instalações e funcionários. Garantir a segurança da sua empresa é essencial para o sucesso e continuidade do seu negócio."
    },
    {
      "id": 2,
      "name": "Empresarial",
      "icon": "building",
      "description": "Ideal para indivíduos que buscam proteger seus bens pessoais, como veículos, imóveis, ou contratar um seguro de vida. Escolha essa opção para garantir sua segurança e tranquilidade no dia a dia."
    }
  ];

  return (
    // <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen  font-[family-name:var(--font-geist-sans)] translate ease-in-out">

      <AppLayout.PublicHeader />

      <main className="row-start-2 items-center sm:items-start  text-[#2c2c2c]" id="inicio">
        <div className="bg-[#eff4f9] flex flex-col items-center justify-center">
          <Image
            className=""
            src="/app-icons/save-money.png"
            alt="Next.js logo"
            width={680}
            height={168}
            priority
          />
          <div className="flex flex-col items-center gap-y-3 px-6 mb-10 text-center">
            <h2 className="text-[#d18f46] font-bold text-3xl ">
              Simule Seu Seguro em Minutos – Rápido e Fácil!
            </h2>
            <p>
              Encontre o seguro perfeito para você, comparando opções e preços
              em um só lugar.
            </p>
            {/* <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center  *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
              <Link href={"/simulation/particular"}><User2 />Particular</Link>
              <Link href={"/simulation/business"}><Building2 />Empresarial</Link>
            </div> */}

            <div className="flex *:flex *:items-center *:gap-x-1 gap-6 items-center  *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
              {/* loading ?
                <div className='flex *:flex *:items-center *:gap-x-1 gap-6 items-center'>
                    <Spinner />
                    <p>Loading...</p>
                </div>
                : */
                categories.map((category) => (
                  <Link
                    href={`/simulation?category_id=${category.id}`} key={category.id}>
                    <i className={`text-2xl bi bi-${category.icon}`}></i>
                    {category.name}
                  </Link>
                ))
              }
            </div>

          </div>
        </div>

        <div className="bg-[#d18f46] flex flex-col items-center p-8 space-y-4">
          <h2 className="font-bold text-5xl text-[#eff4f9] mb-4">Benefícios</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 sm:px-0 sm:text-sm md:px-14  ">
            {APP_BENEFITS.map((item, index) => (
              <BenefitsCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="flex gap-6 gap-x-10 items-center justify-center bg-[#eff4f9] py-10 " id="contacto">
          <Image
            className="hidden md:block"
            src="/app-icons/contact-us-ilustration.svg"
            alt="Contact Us logo"
            width={380}
            height={68}
            priority
          />

          <div className="text-[#0F1B2D] md:w-2/5 w-full px-10 ">
            <h2 className="font-bold text-3xl sm:text-4xl mb-2">Entrar em contacto</h2>
            <div className="space-y-4 flex flex-col">
              <Input.Default
                icon={User2}
                label="Nome Completo"
                type="text"
                placeholder="Insira seu nome completo"
              />
              <Input.Default
                icon={Phone}
                label="Número de Telemóvel"
                type="number"
                placeholder="Insira seu número de telemóvel"
              />
              <Input.Default
                icon={MailIcon}
                label="Email"
                type="email"
                placeholder="Insira com seu email"
              />
              <Input.Textarea
                label="Mensagem"
                placeholder="Insira sua mensagem"
              />
              <button className="text-[#eff4f9] bg-[#0F1B2D] py-2 px-4 rounded-xl flex items-center gap-2 self-end"><Send size={14} />Enviar</button>
            </div>
          </div>
        </div>

      </main>
      <AppLayout.PublicFooter />
    </div>
  );
}

interface BenefitsCardProps {
  title: string;
  description: string;
  image: string;
}
function BenefitsCard({ description, image, title }: BenefitsCardProps) {
  return (
    <div className="flex gap-1 bg-[#0f1b2d] rounded-2xl p-3 shadow-lg">
      <Image
        className=""
        src={image}
        alt="Next.js logo"
        width={120}
        height={38}
        priority
      />
      <div className="flex items-center justify-center flex-col">
        <div>
          <h3 className="text-[#eff4f9] font-bold mb-2">{title}</h3>
          <p className="text-[#fafcfd]">{description}</p>
        </div>
      </div>
    </div>
  );
}
