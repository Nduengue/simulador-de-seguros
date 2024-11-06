"use client";

import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import { Input } from "@/components/input";
import { CalendarDays, Earth, FlagIcon, User2 } from "lucide-react";
import { Check } from "@/components/check";
import { title } from "process";


// Informações do tomador de seguro e segurado
// Classificação do Produto Transportado
// Meio de Transporte
// Distância e Destino
// Detalhes adicionais
// Condições Especiais
// Condições de Manuseio e Embalagem da Mercadoria
// Coberturas

export default function Transporte() {
  const steps = [
    {
      title: "1º Passo",
      content: <StepOne title="Informações do tomador de seguro e segurado" />,
    },
    {
      title: "2º Passo",
      content: (
        <StepTwo />
      ),
    },
    {
      title: "3º Passo",
      content: <StepThree title="Distância e Destino" />,
    },
    {
      title: "4º Passo",
      content: <StepFour title="Detalhes adicionais & Condições Especiais" />,
    },
    {
      title: "5º Passo",
      content: <StepFive title="" />,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="text-gray-600 bg-[#eff4f9] lg:bg-[url('/blob-scene1.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-4 grid place-items-center">
      {/* <div className="text-gray-600 bg-[#eff4f9] lg:bg-[url('/wavess.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-4 grid place-items-center"> */}
      <div className="bg-white w-[62rem] p-4 rounded-lg min-h-[35rem] shadow-lg flex flex-col justify-between">
        <div>
          <Steps current={current} items={items} />
          <div className="h-[30rem] w-full overflow-y-auto mt-4">
            {steps[current].content}
          </div>
        </div>

        <div className="mt-6 self-end">
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Voltar
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Concluir
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepHeader({ title }: { title: string }) {
  return (
    <>
      <h2 className="font-bold text-xl ">{title}</h2>
      <hr className="mb-4" />
    </>
  );
}
function StepOne({ title }: { title: string }) {
  return (
    <div className="  pt-4 px-2 ">
      <StepHeader title={title} />
      <div className="grid grid-cols-2 gap-6 ">
        <Input.Default
          icon={User2}
          label="Nome Completo"
          placeholder="Insira o nome completo"
          borderColor="border-[#fba94c]"
        />

        <Input.Default
          icon={User2}
          label="Número de Identificação Fiscal"
          placeholder="Insira o NIF"
          borderColor="border-[#fba94c]"
        />
        <Input.Default
          icon={User2}
          label="Telefone"
          placeholder="Insira o número de telefone"
          borderColor="border-[#fba94c]"
        />

        <Input.Default
          icon={User2}
          label="E-mail"
          placeholder="Insira o e-mail (exemplo@dominio.com)"
          borderColor="border-[#fba94c]"
        />
      </div>
    </div>
  );
}
function StepTwo({  }: { title?: string }) {
  const Fake_Radio = [
    { id: "1", value: "Mercadorias gerais" },
    { id: "2", value: "Produtos perecíveis" },
    { id: "3", value: "Produtos perigosos" },
    { id: "4", value: "Produtos de alto valor" },
  ];

  const Fake_List = [
    { id: 0, name: "Terrestre", value: "Terrestre" },
    { id: 1, name: "Marítimo", value: "Marítimo" },
    { id: 2, name: "Fluvial", value: "Fluvial" },
    { id: 3, name: "Aéreo", value: "Aéreo" },
  ];

  return (
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Classificação do Produto Transportado" />
          <Check.Radio
            itemList={Fake_Radio}
            defaultValue="1"
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Meio de Transporte" />
          <Check.CheckBox
            className="gap-2 *:p-3 grid grid-cols-2"
            // activeBoxies={seguradoraSelectionadas}
            // setActiveBoxies={setSeguradoraSelectionadas}
            data={Fake_List}
          />
        </div>
      </div>
    </div>
  );
}
function StepThree({  }: { title?: string }) {
  const Fake_Radio = [
    { id: "1", value: "Mercadorias gerais" },
    { id: "2", value: "Produtos perecíveis" },
    { id: "3", value: "Produtos perigosos" },
    { id: "4", value: "Produtos de alto valor" },
  ];

  const Fake_List = [
    { id: 0, name: "Terrestre", value: "Terrestre" },
    { id: 1, name: "Marítimo", value: "Marítimo" },
    { id: 2, name: "Fluvial", value: "Fluvial" },
    { id: 3, name: "Aéreo", value: "Aéreo" },
  ];

  return (
    <div className="  pt-4 px-2  h-full flex flex-col">
      {/* <StepHeader title={title} /> */}
      <div className="flex flex-col flex-1 *:flex-1 ">
        <div className="">
          <StepHeader title="País de Origem" />
          
          <Input.Default icon={Earth} title="Pais de Origem"/>
        </div>
        <div className="">
          <StepHeader title="País de Destino" />
         <Input.Default icon={Earth} title="Pais de Destino"/>
        </div>
      </div>
    </div>
  );
}
function StepFour({  }: { title?: string }) {
  const Fake_List = [
    { id: 0, name: "Nacional", value: "Nacional" },
    { id: 1, name: "Interprovincial", value: "Interprovincial" },
    { id: 2, name: "Países da SADC", value: "Países da SADC" },
    { id: 3, name: "Sem transbordo", value: "Sem transbordo" },
    { id: 4, name: "Intra-provincial", value: "Intra-provincial" },
    { id: 5, name: "Outros Continentes", value: "Outros Continentes" },
  ];
  const Fake_List2 = [
    { id: 0, name: "Cobertura para Avaria/Perda Total", value: "Cobertura para Avaria/Perda Total" },
    { id: 1, name: "Roubo/Pirataria (marítimo)", value: "Roubo/Pirataria (marítimo)" },
    { id: 2, name: "Cobertura para eventos climáticos severos", value: "Cobertura para eventos climáticos severos" },
    { id: 3, name: "Riscos Geopolíticos (Áreas de conflito)", value: "Riscos Geopolíticos (Áreas de conflito)" },
  ];

  return (
    // Rascunho 
    // <div className="  pt-4 px-2  h-full flex flex-col">
    // <div className="flex flex-col flex-1 *:flex-1 ">


    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
      <div>
          <StepHeader title="Detalhes Adicionais" />
          <Check.CheckBox
            className="gap-2 *:p-3 grid grid-cols-2"
            // activeBoxies={seguradoraSelectionadas}
            // setActiveBoxies={setSeguradoraSelectionadas}
            data={Fake_List}
          />
        </div>
      <div>
          <StepHeader title="Condições Especiais" />
          <Check.CheckBox
            className="gap-2 *:p-3 grid grid-cols-2"
            // activeBoxies={seguradoraSelectionadas}
            // setActiveBoxies={setSeguradoraSelectionadas}
            data={Fake_List2}
          />
        </div>


        {/* <div>
          <StepHeader title="Classificação do Produto Transportado" />
          <Check.Radio
            itemList={Fake_Radio}
            defaultValue="1"
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div> */}
       
      </div>
    </div>
  );
}
function StepFive({  }: { title?: string }) {
  const Fake_Radio = [
    { id: "1", value: "Embalados profissionalmente" },
    { id: "2", value: "Sem proteção ou embalagem inadequada" },
  ];
  const Fake_Radio2 = [
    { id: "1", value: "Cláusula A" },
    { id: "2", value: "Cláusula B" },
    { id: "3", value: "Cláusula C" },
  ];

 

  return (
 
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
     


        <div>
          <StepHeader title="Condições de Manuseio e Embalagem da Mercadoria" />
          <Check.Radio
            itemList={Fake_Radio}
            defaultValue="1"
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div >
          <StepHeader title="Coberturas" />
          <Check.Radio
            itemList={Fake_Radio2}
            defaultValue="1"
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
          <div className="space-y-2 mt-4">
            <Input.Default label="Dias de duração da apolice" placeholder="0" icon={CalendarDays}/>
            <Input.Default label="Valor máximo por mercadoria" placeholder="0" icon={CalendarDays}/>
          </div>
        </div>
       
       
      </div>
    </div>
  );
}

// function StepModel({ title }: { title: string }) {

//   return (
//     <div className="  pt-4 px-2 ">
//       {/* <StepHeader title={""} /> */}
//       Em desevolvimento... {title}
//     </div>
//   );
// }
