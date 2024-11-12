// import React from 'react'
// import ShowCardGroupPage from '../page'


// export default function InsuranceTypePage() {
//     return (
//         <ShowCardGroupPage
//             title='Selecione o Tipo de Seguro'
//             description='Escolha abaixo o tipo de seguro que deseja simular. Cada opção oferece uma breve descrição para facilitar sua escolha. Basta clicar em um dos tipos e avançar para calcular a melhor oferta para você!'
//             route='insurance_type'
//             link='/simulation/policytype' />
//     );
// }

// 'use client';

// import { Input } from "@/components/input";
import { AppLayout } from "@/components/layout";
// import { Search } from "lucide-react";
import Image from "next/image";
// import { APP_AVALIABLE_PARTICULAR_SIMULATION } from "@/mocks/simullation-type";
import CardGroup from "@/components/CardGroup/CardGroup";
import { Suspense } from "react";

/* interface IShowCardGroupPage {
    title?: string;
    description?: string;
    route: string;
    link: string;
} */

export default function ShowCardGroupPage() {

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
                        <h2 className="text-[#d18f46] font-bold text-3xl ">Selecione o Tipo de Seguro</h2>
                        <p>Escolha abaixo o tipo de seguro que deseja simular. Cada opção oferece uma breve descrição para facilitar sua escolha. Basta clicar em um dos tipos e avançar para calcular a melhor oferta para você!</p>
                    </div>
                    <div className="flex flex-col w-full p-8">

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 sm:px-0 sm:text-sm md:px-14 mb-60">
                            <Suspense fallback={<div>Loading...</div>}>
                                <CardGroup route={"insurance_type"} link={'/simulation/policytype'} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </main>
            <AppLayout.PublicFooter />
        </div>
    );
}
