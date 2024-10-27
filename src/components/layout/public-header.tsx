import { HomeIcon, LogIn, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PublicHeader() {
    return (
        <header className="bg-[#fafcfd]  text-[#34475b] flex items-center justify-end md:justify-between px-2 pt-2 md:px-8 font-bold border-b shadow-lg">
        <Image
          className="hidden md:block"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ul className="flex items-center p-4 gap-3 *:flex *:items-center *:cursor-pointer">
          <Link href={"#inicio"} className="border-b-2 pb-1.5 gap-x-1 border-transparent hover:border-[#d18f46] hover:text-[#d18f46]">
            <HomeIcon />
            Inicio
          </Link>
          <Link href={"#contacto"} className="border-b-2 pb-1.5 gap-x-1 border-transparent hover:border-[#d18f46] hover:text-[#d18f46]">
            <MailIcon />
            Contacto
          </Link>
          <Link href={"/auth"} className="bg-[#0f1b2d] text-[#fafcfd] p-3 rounded-3xl hover:shadow-xl">
            Entrar <LogIn />
          </Link>
        </ul>
      </header>
    );
}