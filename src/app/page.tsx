import { Input } from "@/component/input";
import { APP_BENEFITS } from "@/config/app-values";
import { HomeIcon, LogIn, MailIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <header className="bg-[#fafcfd] text-[#34475b] flex items-center justify-between px-2 pt-2 md:px-8 font-bold border-b shadow-lg">
        <Image
          className=""
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ul className="flex items-center p-4 gap-3 *:flex *:items-center *:cursor-pointer">
          <li className="border-b-2 pb-1.5 gap-x-1 border-transparent hover:border-[#d18f46] hover:text-[#d18f46]">
            <HomeIcon />
            Inicio
          </li>
          <li className="border-b-2 pb-1.5 gap-x-1 border-transparent hover:border-[#d18f46] hover:text-[#d18f46]">
            <MailIcon />
            Contacto
          </li>
          <li className="bg-[#0f1b2d] text-[#fafcfd] p-3 rounded-2xl hover:shadow-xl">
            Entrar <LogIn />
          </li>
        </ul>
      </header>

      <main className="row-start-2 items-center sm:items-start  text-[#2c2c2c]">
        <div className="bg-[#eff4f9] flex flex-col items-center justify-center">
          <Image
            className=""
            src="/app-icons/save-money.png"
            alt="Next.js logo"
            width={680}
            height={168}
            priority
          />
          <div className="flex flex-col items-center gap-y-3 mb-10">
            <h2 className="text-[#d18f46] font-bold text-3xl">
              Simule Seu Seguro em Minutos – Rápido e Fácil!
            </h2>
            <p>
              Encontre o seguro perfeito para você, comparando opções e preços
              em um só lugar.
            </p>
            <div className="flex gap-6 items-center  *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
              <button>Simular Particular</button>
              <button>Simular Empresarial</button>
            </div>
          </div>
        </div>

        <div className="bg-[#d18f46] flex flex-col items-center p-8">
          <h2 className="font-bold text-5xl text-[#eff4f9]">Benefícios</h2>
          <div className="grid grid-cols-2 gap-8 p-8  ">
            {APP_BENEFITS.map((item, index) => (
              <BenefitsCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center bg-[#0f1b2d]">
          <Image
            className=""
            src="/app-icons/contact-us-ilustration.svg"
            alt="Contact Us logo"
            width={380}
            height={68}
            priority
          />
          <div className="bg-red-500">
            <h2 className="font-bold text-2xl">Entrar em contacto</h2>
            <Input.Default
              label="Nome Completo"
              type="text"
              placeholder="Preencha com seu nome completo"
            />
            <Input.Default
              label="Número de Telemóvel"
              type="number"
              placeholder="Preencha com seu número de telemóvel"
            />
            <Input.Default
              label="Email"
              type="email"
              placeholder="Preencha com seu email"
            />
            <textarea name="" id=""></textarea>
          </div>
        </div>
      </main>
      <footer className="bg-[#075985]">
        <p>
          © 2024 Sociedade de Formação Financeira e Seguros. Todos os direitos
          reservados.
        </p>
      </footer>
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
      {/* <HomeIcon size={40} /> */}
      <Image
        className=""
        src={image}
        alt="Next.js logo"
        width={120}
        height={38}
        priority
      />
      <div>
        <h3 className="text-[#eff4f9] font-bold mb-2">{title}</h3>
        <p className="text-[#fafcfd]">{description}</p>
      </div>
    </div>
  );
}
