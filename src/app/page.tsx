"use client";

import { Input } from "@/components/input";
import { AppLayout } from "@/components/layout";
import { APP_BENEFITS } from "@/mocks/benefes";
import { MailIcon, Phone, Send, User2 } from "lucide-react";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import SwiperContent from "@/components/SwiperContent/SwiperContent";

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

  }, []);
  return (
    <div className="min-h-screen  font-[family-name:var(--font-geist-sans)] translate ease-in-out">

      <AppLayout.PublicHeader />

      <main className="row-start-2 items-center sm:items-start  text-[#2c2c2c]" id="inicio">

        <div className="relative h-[calc(90vh-89px)] bg-[#eff4f9]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="swiper"
          >
            <SwiperSlide>
              <SwiperContent
                title="Simule Seu Seguro em Minutos – Rápido e Fácil!"
                description="Encontre o seguro perfeito para você, comparando opções e preços em um só lugar."
                image="/insurance.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div>
                Slide 2
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>

        <div className="bg-[#d18f46] flex flex-col items-center p-8 space-y-4">
          <h2 className="font-bold text-5xl text-[#eff4f9] mb-4">Benefícios</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 sm:px-0 sm:text-sm md:px-14 max-w-6xl">
            {APP_BENEFITS.map((item, index) => (
              <div data-aos="zoom-in" key={index} ><BenefitsCard  {...item} /></div>
            ))}
          </div>
        </div>

        <div className="bg-[#eff4f9] py-10">
          <div data-aos="zoom-in" className="grid lg:grid-cols-2 gap-4 sm:gap-8 sm:px-0 sm:text-sm md:px-14 max-w-6xl mx-auto">

            <div className="sm:flex justify-center items-center mx-auto">
              <Image
                className="md:block"
                src="/app-icons/contact-us-ilustration.svg"
                alt="Contact Us logo"
                width={380}
                height={68}
                priority
              />
            </div>

            <div className="w-full p-8 lg:p-0 text-[#0F1B2D]">
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
