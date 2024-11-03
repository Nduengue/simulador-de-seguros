"use client";

import React, { useState } from "react";
import { Button, message, Steps } from "antd";

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
      content: <StepOne title="Classificação do Produto Transportado" />,
    },
    {
      title: "Passo 3",
      content: <StepOne title="Meio de Transporte" />,
    },
    {
      title: "Passo 4",
      content: <StepOne title="Distância e Destino" />,
    },
    {
      title: "Passo 5",
      content: <StepOne title="Detalhes adicionais" />,
    },
    {
      title: "Passo 6",
      content: <StepOne title="Condições Especiais" />,
    },
    {
      title: "Passo 7",
      content: (
        <StepOne title="Condições de Manuseio e Embalagem da Mercadoria" />
      ),
    },
    {
      title: "Passo 8",
      content: <StepOne title="Coberturas" />,
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
          <div className="">{steps[current].content}</div>
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

function StepOne({ title }: { title: string }) {
  return (
    <div className=" h-[30rem] pt-4">
      <h2 className="font-bold text-xl">{title}</h2>
      <hr />
    </div>
  );
}

{
  /* <div className=" h-[25rem] w-[26rem] relative mx-8 hidden lg:block">
<Image
  src="/app-icons/popp.png"
  alt="logo"
  className="absolute"
  fill
/>
</div> */
}

{
  /* <form className="w-[29rem] space-y-2.5" action={handleSaveLifeSimulation}> */
}
{
  /* <form className=" space-y-2.5">
<div className="flex items-center gap-x-2">
  <Input.Default
    icon={User2}
    label="Primeiro Nome"
    placeholder="Insira primeiro nome"
    borderColor="border-[#fba94c]"
  />
  <Input.Default
    icon={User2}
    label="Sobre Nome"
    placeholder="Insira último nome"
    borderColor="border-[#fba94c]"
  />
</div>
<Input.Default
  icon={IdCard}
  label="Bilhete de Identidade"
  placeholder="000000000LA000"
  borderColor="border-[#fba94c]"
/>

<div className="space-y-2">
  <h2 className="font-bold ">Gênero</h2>
<Check.Radio itemList={Data_Gender} defaultValue="1"/>
</div>

<Input.Default
  icon={CalendarDays}
  type="date"
  label="Data de Nascimento"
  borderColor="border-[#fba94c]"
/>

<div className="flex items-center gap-x-2 pt-1 mt-2 border-t ">
  <Input.Default
    type="number"
    icon={BadgeDollarSign}
    label="Valor da Cobertura"
    placeholder="0.00"
    borderColor="border-[#fba94c]"
  />
  <Input.Default
    type="number"
    icon={Timer}
    label="Duração do Seguro em Ano"
    placeholder="0"
    borderColor="border-[#fba94c]"
  />
</div>
<div className="flex gap-x-2 text-sm *:bg-orange-400 *:flex-1 text-gray-100 mt-2 *:py-1 *:rounded-lg items-center justify-between *:flex *:flex-col *:items-center *:justify-center">
  <Dialog.Drawer
    title="Selectione a Cobertura"
    buttonProps={{ type: "button" }}
    buttonTitle="Cobertura"
    icon={Rss}
  >
    <Check.CheckBox
      // activeBoxies={seguradoraSelectionadas}
      // setActiveBoxies={setSeguradoraSelectionadas}
      data={Fake_Opt}
    />
  </Dialog.Drawer>

  <Dialog.Drawer
    title="Selectione o Agravamento"
    buttonTitle="Agravamento"
    buttonProps={{ type: "button" }}
    icon={ShieldEllipsis}
  >
    <Check.CheckBox
      // activeBoxies={seguradoraSelectionadas}
      // setActiveBoxies={setSeguradoraSelectionadas}
      data={Fake_Opt}
    />
  </Dialog.Drawer>

  <Dialog.Drawer
    title="Selectione a Seguradora"
    buttonTitle="Seguradora"
    buttonProps={{ type: "button" }}
    icon={Handshake}
  >
    <Check.CheckBox
      // activeBoxies={seguradoraSelectionadas}
      // setActiveBoxies={setSeguradoraSelectionadas}
      data={Fake_Opt}
    />
  </Dialog.Drawer>
</div>

<hr />

<div className="flex gap-x-2 justify-end *:flex *:items-center *:gap-x-1.5 text-gray-50 *:rounded *:bg-[#f76b15] *:px-3 *:py-1">
  <button type="reset" className="">
    <X size={15} />
    Limpar
  </button>
  <button type="submit" className="">
    <SendIcon size={15} />
    Salvar
  </button>
</div>
</form> */
}
