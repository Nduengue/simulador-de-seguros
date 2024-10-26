import { Input } from "@/component/input";
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
      <main className="row-start-2 items-center sm:items-start bg-[#eff4f9] text-[#2c2c2c]">
        <Image
          className=""
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h2>Simule Seu Seguro em Minutos – Rápido e Fácil!</h2>
        <p>
          Encontre o seguro perfeito para você, comparando opções e preços em um
          só lugar.
        </p>
        <div className="flex gap-6 items-center  *:bg-[#d18f46] *:p-3 *:rounded-2xl font-bold text-[#fff]">
          <button>Simular Particular</button>
          <button>Simular Empresarial</button>
        </div>
        <div className="bg-[#d18f46]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
            fugit minima! Dolor ut illo atque omnis ea eveniet harum labore hic?
            Reiciendis ea asperiores nisi odio. Iste, dolorem impedit?
          </p>
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
