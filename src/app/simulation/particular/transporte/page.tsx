"use client";

import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import { Input } from "@/components/input";
import { FlagIcon, User2 } from "lucide-react";
import { Check } from "@/components/check";


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
      title: "Passo 1",
      content: <StepOne title="Informações do tomador de seguro e segurado" />,
    },
    {
      title: "Passo 2",
      content: (
        <StepTwo />
      ),
    },
    {
      title: "Passo 3",
      content: <StepThree title="Distância e Destino" />,
    },
    {
      title: "Passo 4",
      content: <StepModel title="...." />,
    },
    {
      title: "Passo 5",
      content: <StepModel title="Detalhes adicionais" />,
    },
    {
      title: "Passo 6",
      content: <StepModel title="Condições Especiais" />,
    },
    {
      title: "Passo 7",
      content: (
        <StepModel title="Condições de Manuseio e Embalagem da Mercadoria" />
      ),
    },
    {
      title: "Passo 8",
      content: <StepModel title="Coberturas" />,
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
      <div className="bg-white  p-4 rounded-lg min-h-[35rem] shadow-lg flex flex-col justify-between">
        <div>
          <Steps current={current} items={items} />
          <div className="h-[30rem] overflow-y-auto mt-4">
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
            className="flex-col items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Meio de Transporte" />
          <Check.CheckBox
            className="gap-2 *:p-3"
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
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Classificação do Produto Transportado" />
          
          <Input.Default icon={FlagIcon} title="Pais de Origem"/>
        </div>
        <div>
          <StepHeader title="Meio de Transporte" />
         <Input.Default icon={FlagIcon} title="Pais de Destino"/>
        </div>
      </div>
    </div>
  );
}

function StepModel({ title }: { title: string }) {

  return (
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      Em desevolvimento... {title}
    </div>
  );
}
