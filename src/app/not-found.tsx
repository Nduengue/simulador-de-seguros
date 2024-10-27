"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-[#e7e9ec] text-zinc-700 min-h-screen">
      <Image
        className=""
        src="/app-icons/404.webp"
        alt="Next.js logo"
        width={400}
        height={100}
        priority
      />
      <h1 className="text-4xl font-bold mt-8">Página não encontrada</h1>
      <p className="text-lg mt-2">
        Desculpe, a página que você está procurando não existe.
      </p>
      <button
        className="mt-4 font-bold hover:bg-[#d18f46]/10 py-2 px-6 rounded-lg flex "
        onChange={() => router.back()}
      >
        Voltar
      </button>
    </div>
  );
}
