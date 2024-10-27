import { Input } from "@/components/input";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Wall1 from require("/wall1.jpg");

export default function Auth() {
  return (
    <div className="min-h-screen bg-[url('/login.jpg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#2c2c2c]">
      <div className=" w-screen h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 flex items-center justify-center p-8">
          <div
            className={` sm:flex items-center justify-between gap-x-6 shadow-xl rounded-lg p-8 bg-zinc-800 backdrop-filter backdrop-blur-lg border border-blue-300/30 bg-opacity-30`}
          >
            {/* <Image
                className=""
                src="/app-icons/wall1.jpg"
                alt="Next.js logo"
                width={680}
                height={168}
                priority
              /> */}
            <div className="w-96  items-center grid ">
              <h1 className="text-5xl font-bold text-center text-white">
                Simulador de Seguro
              </h1>
            </div>
            <div className="bg-white/5 text-zinc-100 py-10 px-10 rounded-lg flex flex-col items-center justify-center gap-y-4">
              <Input.Default icon={Mail} label="Email" />
              <Input.Default icon={Lock} label="Senha" />
              <button className="p-2 w-full bg-[#0f1b2d] rounded-lg">Entrar</button>
              <Link href={""}>Recuperar Senha</Link>
            </div>
          </div>
      </div>
    </div>
  );
}
