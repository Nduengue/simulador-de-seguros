"use client";

import { useState } from "react";
import { Button, Steps } from "antd";
import { Input } from "@/components/input";
import { CalendarDays, Earth, IdCardIcon, MailIcon, PhoneIcon, Search, User2Icon } from "lucide-react";
import { Check } from "@/components/check";
import { ContinentsCountry } from "@/util/data/country";
import { AutoCompleteTagInputListType } from "@/components/input/auto-complete-tag-input";

export default function Transporte() {
  // var step 1
  const [NomeComplete, setNomeComplete] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Nif, setNif] = useState<string>("");
  const [Telefone, setTelefone] = useState<string>("");
  // var step 2
  const [ClassificacaoProdutoTransportado, setClassificacaoProdutoTransportado] = useState<string>("1");
  const [MeioTransporte, setMeioTransporte] = useState<string[]>([]);
  // var step 3
  const [PaisOrigem, setPaisOrigem] = useState<AutoCompleteTagInputListType[]>([]);
  const [PaisDestino, setPaisDestino] = useState<AutoCompleteTagInputListType[]>([]);
  const [Provincias, setProvincias] = useState<AutoCompleteTagInputListType[]>([]);
  // var step 4
  const [DetalhesAdicionais, setDetalhesAdicionaisFn] = useState<string[]>([]);
  const [CondicoesEspeciais, setCondicoesEspeciaisFn] = useState<string[]>([]);
  // var step 5
  const [CondicoesManuseioEmbalagemMercadoria, setCondicoesManuseioEmbalagemMercadoria] = useState<string>("");
  const [Coberturas, setCoberturas] = useState<string>("");
  const [DiasduracaoApolice, setDiasduracaoApolice] = useState<string>("");
  const [ValorMaximoMercadoria, setValorMaximoMercadoria] = useState<string>("");

  const steps = [
    {
      title: "1º Passo",

      content: (
        <StepOne
          title="Informações do tomador de seguro e segurado"
          setNomeCompleteFn={setNomeComplete}
          setEmailFn={setEmail}
          setNifFn={setNif}
          setTelefoneFn={setTelefone}
          NomeComplete={NomeComplete}
          Email={Email}
          Nif={Nif}
          Telefone={Telefone}
        />
      ),
    },
    {
      title: "2º Passo",
      content: (
        <StepTwo
          MeioTransporte={MeioTransporte}
          setMeioTransporteFn={setMeioTransporte}
          setClassificacaoProdutoTransportadoFn={setClassificacaoProdutoTransportado}
          ClassificacaoProdutoTransportado={ClassificacaoProdutoTransportado}
        />
      ),
    },
    {
      title: "3º Passo",
      content: (
        <StepThree
          setPaisOrigemFn={setPaisOrigem}
          PaisOrigem={PaisOrigem}
          setPaisDestinoFn={setPaisDestino}
          PaisDestino={PaisDestino}
          setProvinciasFn={setProvincias}
          Provincias={Provincias}
        />
      ),
    },
    {
      title: "4º Passo",
      content: (
        <StepFour
          CondicoesEspeciais={CondicoesEspeciais}
          DetalhesAdicionais={DetalhesAdicionais}
          setCondicoesEspeciaisFn={setCondicoesEspeciaisFn}
          setDetalhesAdicionaisFn={setDetalhesAdicionaisFn}
        />
      ),
    },
    {
      title: "5º Passo",
      content: (
        <StepFive
          Coberturas={Coberturas}
          setCoberturasFn={setCoberturas}
          CondicoesManuseioEmbalagemMercadoria={CondicoesManuseioEmbalagemMercadoria}
          setCondicoesManuseioEmbalagemMercadoriaFn={setCondicoesManuseioEmbalagemMercadoria}
          ValorMaximoMercadoria={ValorMaximoMercadoria}
          setValorMaximoMercadoriaFn={setValorMaximoMercadoria}
          DiasduracaoApolice={DiasduracaoApolice}
          setDiasduracaoApoliceFn={setDiasduracaoApolice}
        />
      ),
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

  function handleSubmitFn() {
    alert("Exemplo de Envio");
    window.location.reload();
  }

  return (
    <div className="text-gray-600 bg-[#eff4f9] lg:bg-[url('/blob-scene1.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-4 grid place-items-center">
      {/* <div className="text-gray-600 bg-[#eff4f9] lg:bg-[url('/wavess.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-4 grid place-items-center"> */}
      <div className="bg-white w-[62rem] p-4 rounded-lg min-h-[35rem] shadow-lg flex flex-col justify-between">
        <div>
          <Steps current={current} items={items} />
          <div className="h-[30rem] w-full overflow-y-auto mt-4">{steps[current].content}</div>
        </div>

        <div className="mt-6 self-end ">
          {/* <Button color="danger" variant="filled" className="mr-2" onClick={() => handleCleanInputs()}> */}
          {/* Limpar */}
          {/* </Button> */}
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
            <Button type="primary" onClick={handleSubmitFn}>
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
function StepOne({
  title,
  setNomeCompleteFn,
  setEmailFn,
  setNifFn,
  setTelefoneFn,
  NomeComplete,
  Nif,
  Telefone,
  Email,
}: {
  title: string;
  setNomeCompleteFn: (e: string) => void;
  setEmailFn: (e: string) => void;
  setNifFn: (e: string) => void;
  setTelefoneFn: (e: string) => void;
  NomeComplete: string;
  Email: string;
  Nif: string;
  Telefone: string;
}) {
  return (
    <div className="  pt-4 px-2 ">
      <StepHeader title={title} />
      <div className="grid grid-cols-2 gap-6 ">
        <Input.Default
          icon={User2Icon}
          onChange={(e) => setNomeCompleteFn(e.target.value)}
          value={NomeComplete}
          label="Nome Completo"
          placeholder="Insira o nome completo"
          borderColor="border-[#fba94c]"
        />

        <Input.Default
          icon={IdCardIcon}
          onChange={(e) => setNifFn(e.target.value)}
          value={Nif}
          label="Número de Identificação Fiscal"
          placeholder="Insira o NIF"
          maxLength={14}
          borderColor="border-[#fba94c]"
        />
        <Input.Default
          icon={PhoneIcon}
          onChange={(e) => setTelefoneFn(e.target.value)}
          value={Telefone}
          maxLength={9}
          label="Telefone"
          placeholder="Insira o número de telefone"
          borderColor="border-[#fba94c]"
        />

        <Input.Default
          icon={MailIcon}
          onChange={(e) => setEmailFn(e.target.value)}
          value={Email}
          label="E-mail"
          placeholder="Insira o e-mail (exemplo@dominio.com)"
          borderColor="border-[#fba94c]"
        />
      </div>
    </div>
  );
}
function StepTwo({
  MeioTransporte,
  setMeioTransporteFn,
  ClassificacaoProdutoTransportado,
  setClassificacaoProdutoTransportadoFn,
}: {
  MeioTransporte: string[];
  setMeioTransporteFn: (e: string[]) => void;
  ClassificacaoProdutoTransportado: string;
  setClassificacaoProdutoTransportadoFn: (e: string) => void;
}) {
  const Fake_Radio = [
    { id: "1", name: "Mercadorias gerais" },
    { id: "2", name: "Produtos perecíveis" },
    { id: "3", name: "Produtos perigosos" },
    { id: "4", name: "Produtos de alto valor" },
  ];

  const Fake_List = [
    { id: 0, name: "Terrestre" },
    { id: 1, name: "Marítimo" },
    { id: 2, name: "Fluvial" },
    { id: 3, name: "Aéreo" },
  ];

  return (
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Classificação do Produto Transportado" />
          <Check.Radio
            itemList={Fake_Radio}
            value={ClassificacaoProdutoTransportado}
            setValuesFn={setClassificacaoProdutoTransportadoFn}
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Meio de Transporte" />
          <Check.CheckBox className="gap-2 *:p-3 grid grid-cols-2" values={MeioTransporte} setValuesFn={setMeioTransporteFn} data={Fake_List} />
        </div>
      </div>
    </div>
  );
}
function StepThree({
  setPaisOrigemFn,
  PaisOrigem,
  setPaisDestinoFn,
  PaisDestino,
  setProvinciasFn,
  Provincias,
}: {
  setPaisOrigemFn: (e: AutoCompleteTagInputListType[]) => void;
  PaisOrigem: AutoCompleteTagInputListType[];
  setPaisDestinoFn: (e: AutoCompleteTagInputListType[]) => void;
  PaisDestino: AutoCompleteTagInputListType[];
  setProvinciasFn: (e: AutoCompleteTagInputListType[]) => void;
  Provincias: AutoCompleteTagInputListType[];
}) {
  const listOfOptions: { id: string; name: string }[] = [];

  ContinentsCountry.forEach((continent) => {
    continent.countries.forEach((country) => {
      listOfOptions.push({
        id: country.id,
        name: country.name,
      });
    });
  });

  return (
    <div className="  pt-4 px-2  h-full flex flex-col">
      <div className="flex flex-col flex-1 *:flex-1 ">
        <div className="">
          <StepHeader title="País de Origem" />
          <Input.AutoCompleteTagInput
            setValuesFn={setPaisOrigemFn}
            values={PaisOrigem}
            listOfOptions={listOfOptions}
            icon={Search}
            inputClassName="p-3 rounded-xl border-[#075985]"
            suggestionLiClassName="hover:bg-primary"
            selectedTagsClassName="bg-primary"
          />
        </div>
        <div className="mt-4">
          <StepHeader title="País de Destino" />
          <Input.AutoCompleteTagInput
            setValuesFn={setPaisDestinoFn}
            values={PaisDestino}
            listOfOptions={listOfOptions}
            icon={Search}
            inputClassName="p-3 rounded-xl border-[#075985]"
            suggestionLiClassName="hover:bg-primary"
            selectedTagsClassName="bg-primary"
          />
        </div>
        {PaisDestino.length > 0 && PaisDestino.every((pais) => pais.name === "Angola") && (
          <div className="mt-4">
            <StepHeader title="Provincias de Termino" />
            <Input.AutoCompleteTagInput
              setValuesFn={setProvinciasFn}
              values={Provincias}
              listOfOptions={listOfOptions}
              icon={Search}
              inputClassName="p-3 rounded-xl border-[#075985]"
              suggestionLiClassName="hover:bg-primary"
              selectedTagsClassName="bg-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function StepFour({
  CondicoesEspeciais,
  DetalhesAdicionais,
  setCondicoesEspeciaisFn,
  setDetalhesAdicionaisFn,
}: {
  DetalhesAdicionais: string[];
  setDetalhesAdicionaisFn: (e: string[]) => void;
  CondicoesEspeciais: string[];
  setCondicoesEspeciaisFn: (e: string[]) => void;
}) {
  const Fake_List = [
    { id: 0, name: "Nacional" },
    { id: 1, name: "Interprovincial" },
    { id: 2, name: "Países da SADC" },
    { id: 3, name: "Sem transbordo" },
    { id: 4, name: "Intra-provincial" },
    { id: 5, name: "Outros Continentes" },
  ];
  const Fake_List2 = [
    {
      id: 0,
      name: "Cobertura para Avaria/Perda Total",
    },
    {
      id: 1,
      name: "Roubo/Pirataria (marítimo)",
    },
    {
      id: 2,
      name: "Cobertura para eventos climáticos severos",
    },
    {
      id: 3,
      name: "Riscos Geopolíticos (Áreas de conflito)",
    },
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
          <Check.CheckBox className="gap-2 *:p-3 grid grid-cols-2" values={DetalhesAdicionais} setValuesFn={setDetalhesAdicionaisFn} data={Fake_List} />
        </div>
        <div>
          <StepHeader title="Condições Especiais" />
          <Check.CheckBox className="gap-2 *:p-3 grid grid-cols-2" values={CondicoesEspeciais} setValuesFn={setCondicoesEspeciaisFn} data={Fake_List2} />
        </div>
      </div>
    </div>
  );
}
function StepFive({
  CondicoesManuseioEmbalagemMercadoria,
  Coberturas,
  DiasduracaoApolice,
  ValorMaximoMercadoria,
  setCondicoesManuseioEmbalagemMercadoriaFn,
  setCoberturasFn,
  setDiasduracaoApoliceFn,
  setValorMaximoMercadoriaFn,
}: {
  CondicoesManuseioEmbalagemMercadoria: string;
  Coberturas: string;
  DiasduracaoApolice: string;
  ValorMaximoMercadoria: string;
  setCondicoesManuseioEmbalagemMercadoriaFn: (e: string) => void;
  setCoberturasFn: (e: string) => void;
  setDiasduracaoApoliceFn: (e: string) => void;
  setValorMaximoMercadoriaFn: (e: string) => void;
}) {
  const Fake_Radio = [
    { id: "1", name: "Embalados profissionalmente" },
    { id: "2", name: "Sem proteção ou embalagem inadequada" },
  ];
  const Fake_Radio2 = [
    { id: "1", name: "Cláusula A" },
    { id: "2", name: "Cláusula B" },
    { id: "3", name: "Cláusula C" },
  ];

  return (
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Condições de Manuseio e Embalagem da Mercadoria" />
          <Check.Radio
            itemList={Fake_Radio}
            value={CondicoesManuseioEmbalagemMercadoria}
            setValuesFn={setCondicoesManuseioEmbalagemMercadoriaFn}
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Coberturas" />
          <Check.Radio
            itemList={Fake_Radio2}
            value={Coberturas}
            setValuesFn={setCoberturasFn}
            className="grid grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
          <div className="space-y-2 mt-4">
            <Input.Default
              label="Dias de duração da apolice"
              placeholder="0"
              icon={CalendarDays}
              value={DiasduracaoApolice}
              onChange={(e) => setDiasduracaoApoliceFn(e.target.value)}
            />
            <Input.Default
              label="Valor máximo por mercadoria"
              placeholder="0"
              icon={CalendarDays}
              value={ValorMaximoMercadoria}
              onChange={(e) => setValorMaximoMercadoriaFn(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
