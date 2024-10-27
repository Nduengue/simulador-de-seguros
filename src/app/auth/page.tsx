import { Input } from "@/components/input";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
// import Wall1 from require("/wall1.jpg");

export default function Auth() {
  return (
    <div className="min-h-screen bg-[url('/login.jpg')] bg-cover bg-center bg-no-repeat bg-fixed text-[#2c2c2c]">
      <div className=" w-screen h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 flex items-center justify-center p-8">
        <div
          className={`  sm:flex items-center justify-between gap-x-6 sm:shadow-xl rounded-lg p-8 sm:bg-zinc-800 sm:backdrop-filter sm:backdrop-blur-lg sm:border sm:border-blue-300/30 sm:bg-opacity-30`}
        >
          <div className="w-96  items-center grid ">
            <h1 className="text-5xl font-bold text-center text-white mb-4 sm:mb-0">
              Simulador de Seguro
            </h1>
          </div>
          <div className="bg-white/5 text-zinc-100 py-10 px-10 rounded-lg flex flex-col items-center justify-center gap-y-4">
            <Input.Default
              icon={Mail}
              iconColor="#fff"
              borderColor="#fff"
              label="Email"
            />
            <Input.Default
              icon={Lock}
              iconColor="#fff"
              borderColor="#fff"
              type="password"
              label="Senha"
            />
            <button className="p-2 w-full bg-[#0f1b2d] rounded-lg">
              Entrar
            </button>
            <Link href={""}>Recuperar Senha</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
