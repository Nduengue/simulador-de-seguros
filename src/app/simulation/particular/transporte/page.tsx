"use client";
import { useEffect, useState } from "react";
import { Button, Steps } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/input";
import { CalendarDays, IdCardIcon, MailIcon, PhoneIcon, Search, User2Icon } from "lucide-react";
import { Check } from "@/components/check";
import { ContinentsCountry } from "@/util/data/country";
import { AutoCompleteTagInputListType } from "@/components/input/auto-complete-tag-input";
import { IGetIdAndNameMapperResponse, GetIdAndNameMapper } from "@/util/function/mappers";
import Loading from "@/app/loading";
import { stepOneSchema, stepTwoSchema, stepThreeSchema, stepThreeSchemaProvincias, stepFourSchema, stepFiveSchema } from "./schema-validation";
import { Lib } from "@/lib";
import { API_LOCATION, API_LOCATION_2 } from "@/util/api";
import { Dialog } from "@/components/dialog";

interface IApiListData {
  merchandises: IGetIdAndNameMapperResponse[];
  ways: IGetIdAndNameMapperResponse[];
  countries: IGetIdAndNameMapperResponse[];
  states: IGetIdAndNameMapperResponse[];
  from_tos: IGetIdAndNameMapperResponse[];
  conditions: IGetIdAndNameMapperResponse[];
  coverages: IGetIdAndNameMapperResponse[];
  packaging: IGetIdAndNameMapperResponse[];
}

export default function Transporte() {
  // var step 1
  const [NomeComplete, setNomeComplete] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Nif, setNif] = useState<string>("");
  const [Telefone, setTelefone] = useState<string>("");
  // var step 2
  const [ClassificacaoProdutoTransportado, setClassificacaoProdutoTransportado] = useState<string>("");
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
  // Others
  const searchParams = useSearchParams();

  const insurance_id = Number(searchParams.get("insurance_id"));
  const policy_type_id = Number(searchParams.get("policy_type_id"));

  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [apiListDataResponse, setApiListDataResponse] = useState<IApiListData>({
    merchandises: [],
    ways: [],
    countries: [],
    states: [],
    from_tos: [],
    conditions: [],
    coverages: [],
    packaging: [],
  });

  const route = useRouter();

  const provicesAllowed = () => PaisDestino.every((pais) => pais.name == "Angola");

  useEffect(() => {
    const getListData = async () => {
      const response = await fetch(`${API_LOCATION}/mt_datas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          insurance_id: insurance_id,
          policy_type_id: policy_type_id,
        }),
      });

      const data = await response.json();
      // setApiListDataResponse(data);
      // console.log(data);

      return data;
    };

    if (insurance_id && policy_type_id) {
      getListData()
        .then((response: GoodsTransportedType) => {
          const { merchandises, ways, countries, states, from_tos, conditions, coverages, packaging } = response;
          // console.log(GetIdAndNameMapper(merchandises));
          setApiListDataResponse({
            merchandises: GetIdAndNameMapper(merchandises),
            ways: GetIdAndNameMapper(ways),
            countries: GetIdAndNameMapper(countries),
            states: GetIdAndNameMapper(states),
            from_tos: GetIdAndNameMapper(from_tos),
            conditions: GetIdAndNameMapper(conditions),
            coverages: GetIdAndNameMapper(coverages),
            packaging: GetIdAndNameMapper(packaging),
          });
          // Lib.Sonner({ type: "success", message: "Dados carregados com sucesso" });
        })
        .catch((error) => {
          console.log(error);
          Lib.Sonner({ type: "error", message: "Erro ao carregar dados da API" });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      route.replace("/");
    }
  }, [insurance_id, policy_type_id,route]);

  const steps = [
    {
      title: "",

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
      title: "",
      content: (
        <StepTwo
          merchandisesList={apiListDataResponse.merchandises}
          waysList={apiListDataResponse.ways}
          MeioTransporte={MeioTransporte}
          setMeioTransporteFn={setMeioTransporte}
          setClassificacaoProdutoTransportadoFn={setClassificacaoProdutoTransportado}
          ClassificacaoProdutoTransportado={ClassificacaoProdutoTransportado}
        />
      ),
    },
    {
      title: "",
      content: (
        <StepThree
          listOfCountries={apiListDataResponse.countries}
          listOfProvinces={apiListDataResponse.states}
          PaisOrigem={PaisOrigem}
          PaisDestino={PaisDestino}
          Provincias={Provincias}
          setPaisOrigemFn={setPaisOrigem}
          setPaisDestinoFn={setPaisDestino}
          setProvinciasFn={setProvincias}
        />
      ),
    },
    {
      title: "",
      content: (
        <StepFour
          aditionalDetailsList={apiListDataResponse.from_tos}
          specificConditionsList={apiListDataResponse.conditions}
          CondicoesEspeciais={CondicoesEspeciais}
          DetalhesAdicionais={DetalhesAdicionais}
          setCondicoesEspeciaisFn={setCondicoesEspeciaisFn}
          setDetalhesAdicionaisFn={setDetalhesAdicionaisFn}
        />
      ),
    },
    {
      title: "",
      content: (
        <StepFive
          coveragesList={apiListDataResponse.coverages}
          packagingList={apiListDataResponse.packaging}
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

  const next = () => {
    if (current === 0) {
      const validation = stepOneSchema.safeParse({
        NomeComplete,
        Email,
        Nif,
        Telefone,
      });

      if (!validation.success) {
        const errosMessages = validation.error.errors.map((error) => error.message);
        Lib.Sonner({ messages: errosMessages, type: "error" });
        return;
      }
    } else if (current === 1) {
      const validation = stepTwoSchema.safeParse({
        MeioTransporte,
        ClassificacaoProdutoTransportado,
      });

      if (!validation.success) {
        const errosMessages = validation.error.errors.map((error) => error.message);
        Lib.Sonner({ messages: errosMessages, type: "error" });
        return;
      }
    } else if (current === 2) {
      const validation = stepThreeSchema.safeParse({
        PaisOrigem,
        PaisDestino,
      });

      if (!validation.success) {
        const errosMessages = validation.error.errors.map((error) => error.message);
        Lib.Sonner({ messages: errosMessages, type: "error" });
        return;
      }

      if (provicesAllowed()) {
        const validationStates = stepThreeSchemaProvincias.safeParse(Provincias);

        if (!validationStates.success) {
          const errosMessages = validationStates.error.errors.map((error) => error.message);
          Lib.Sonner({ messages: errosMessages, type: "error" });
          return;
        }
      }
    } else if (current === 3) {
      const validation = stepFourSchema.safeParse({
        CondicoesEspeciais,
        DetalhesAdicionais,
      });
      if (!validation.success) {
        const errosMessages = validation.error.errors.map((error) => error.message);
        Lib.Sonner({ messages: errosMessages, type: "error" });
        return;
      }
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  function handleOpenModalToSubmitFn() {
    const validation = stepFiveSchema.safeParse({
      Coberturas,
      CondicoesManuseioEmbalagemMercadoria,
      ValorMaximoMercadoria,
      DiasduracaoApolice,
    });
    if (!validation.success) {
      const errosMessages = validation.error.errors.map((error) => error.message);
      Lib.Sonner({ messages: errosMessages, type: "error" });
      return false;
    }

    return true;
  }

  async function handleSubmitFn() {
    const dataBody = {
      user: {
        name: NomeComplete,
        nif: Nif,
        phone_number: Telefone,
        email: Email,
      },
      merchandise_id: Number(ClassificacaoProdutoTransportado),
      way_ids: MeioTransporte.map((value) => Number(value)),

      country_from_ids: PaisOrigem.map((value) => Number(value.id)),
      country_to_ids: PaisDestino.map((value) => Number(value.id)),
      states_to_ids: provicesAllowed() ? Provincias.map((value) => Number(value.id)) : [],

      from_to_ids: DetalhesAdicionais.map((value) => Number(value)),
      condition_ids: CondicoesEspeciais.map((value) => Number(value)),

      packaging_id: Number(CondicoesManuseioEmbalagemMercadoria),
      coverage_id: Number(Coberturas),
      value: Number(ValorMaximoMercadoria),
      duration: Number(DiasduracaoApolice),

      insurance_id: insurance_id,
      policy_type_id: policy_type_id,
      //TODO must be verified with time
      state_from_ids: [],
      insurance_type_id: 1,
      company_ids: [1],
      category_id: 1,
    };

    console.log(dataBody);

    try {
      const res = await fetch(`${API_LOCATION_2}/api/simulator/mt/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      if (res.ok) Lib.Sonner({ messages: ["Simulação enviada com sucesso!"], type: "success" });
      else Lib.Sonner({ messages: ["Ocorreu um erro no processo da simulação!\nTente novamente ou contacte o suporte."], type: "error" });

      console.log("->", res);
    } catch (error) {
      console.error(error);
      Lib.Sonner({
        messages: ["Ocorreu um erro no envio da simulação, Actualiza a página e certifica-se que esteja conectado com a internet.\nTente novamente ou contacte o suporte."],
        type: "error",
      });
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
        // window.location.reload();
      }, 1000)
    );
  }

  return (
    <div className="text-gray-600 bg-[#eff4f9] bg-[url('/blob-scene1.svg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-4 grid place-items-center">
      <div className="bg-white w-[95%] lg:w-[62rem] p-4 rounded-lg min-h-[35rem] shadow-lg flex flex-col justify-between">
        {isLoading ? (
          <Loading className="h-[35rem]" />
        ) : (
          <>
            <div>
              <div className="hidden sm:flex items-center">
                <Steps current={current} items={items} />
              </div>
              <div className="flex items-center sm:hidden gap-x-2 justify-end font-bold text-sm   ">
                <p>Etapas para a conclusão</p>
                <div className="bg-[#fba94c] text-zinc-100 p-2 rounded-full">{`${current + 1} de ${steps.length}`}</div>
              </div>
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
                // <Button type="primary" onClick={handleSubmitFn}>
                //   Concluir
                // </Button>
                <Dialog.Async
                  buttonTitle="Concluir"
                  buttonProps={{ type: "primary" }}
                  onOpenModal={handleOpenModalToSubmitFn}
                  onOkFn={handleSubmitFn}
                  modalTitle="Conclusão da Simulação"
                >
                  <p>Deseja concluir a simulação e receber o relatório da simulação?</p>
                </Dialog.Async>
              )}
            </div>
          </>
        )}
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
  setNomeCompleteFn,
  setEmailFn,
  setNifFn,
  setTelefoneFn,
  title,
  NomeComplete,
  Nif,
  Telefone,
  Email,
}: {
  title: string;
  NomeComplete: string;
  Email: string;
  Nif: string;
  Telefone: string;
  setNomeCompleteFn: (e: string) => void;
  setEmailFn: (e: string) => void;
  setNifFn: (e: string) => void;
  setTelefoneFn: (e: string) => void;
}) {
  return (
    <div className="  pt-4 px-2 ">
      <StepHeader title={title} />
      <div className="grid sm:grid-cols-2 gap-6 ">
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
  ClassificacaoProdutoTransportado,
  merchandisesList,
  waysList,
  setMeioTransporteFn,
  setClassificacaoProdutoTransportadoFn,
}: {
  MeioTransporte: string[];
  ClassificacaoProdutoTransportado: string;
  merchandisesList: IGetIdAndNameMapperResponse[];
  waysList: IGetIdAndNameMapperResponse[];
  setMeioTransporteFn: (e: string[]) => void;
  setClassificacaoProdutoTransportadoFn: (e: string) => void;
}) {
  return (
    <div className="  pt-4 px-2 ">
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Classificação do Produto Transportado" />
          <Check.Radio
            // defaultValue={merchandisesList[0].id}
            itemList={merchandisesList}
            value={ClassificacaoProdutoTransportado}
            setValuesFn={setClassificacaoProdutoTransportadoFn}
            className="grid sm:grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Meio de Transporte" />
          <Check.CheckBox className="sm:grid-cols-2" values={MeioTransporte} setValuesFn={setMeioTransporteFn} itemList={waysList} />
        </div>
      </div>
    </div>
  );
}
function StepThree({
  PaisOrigem,
  PaisDestino,
  Provincias,
  listOfCountries,
  listOfProvinces,
  setPaisOrigemFn,
  setPaisDestinoFn,
  setProvinciasFn,
}: {
  PaisOrigem: AutoCompleteTagInputListType[];
  PaisDestino: AutoCompleteTagInputListType[];
  Provincias: AutoCompleteTagInputListType[];
  listOfCountries: IGetIdAndNameMapperResponse[];
  listOfProvinces: IGetIdAndNameMapperResponse[];
  setPaisOrigemFn: (e: AutoCompleteTagInputListType[]) => void;
  setPaisDestinoFn: (e: AutoCompleteTagInputListType[]) => void;
  setProvinciasFn: (e: AutoCompleteTagInputListType[]) => void;
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
            listOfOptions={listOfCountries}
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
            listOfOptions={listOfCountries}
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
              listOfOptions={listOfProvinces}
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
  aditionalDetailsList,
  specificConditionsList,
  setCondicoesEspeciaisFn,
  setDetalhesAdicionaisFn,
}: {
  DetalhesAdicionais: string[];
  CondicoesEspeciais: string[];
  aditionalDetailsList: IGetIdAndNameMapperResponse[];
  specificConditionsList: IGetIdAndNameMapperResponse[];
  setDetalhesAdicionaisFn: (e: string[]) => void;
  setCondicoesEspeciaisFn: (e: string[]) => void;
}) {
  return (
    <div className="  pt-4 px-2 ">
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Detalhes Adicionais" />
          <Check.CheckBox className="sm:grid-cols-2" values={DetalhesAdicionais} setValuesFn={setDetalhesAdicionaisFn} itemList={aditionalDetailsList} />
        </div>
        <div>
          <StepHeader title="Condições Especiais" />
          <Check.CheckBox className="sm:grid-cols-2" values={CondicoesEspeciais} setValuesFn={setCondicoesEspeciaisFn} itemList={specificConditionsList} />
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
  coveragesList,
  packagingList,
  setCondicoesManuseioEmbalagemMercadoriaFn,
  setCoberturasFn,
  setDiasduracaoApoliceFn,
  setValorMaximoMercadoriaFn,
}: {
  CondicoesManuseioEmbalagemMercadoria: string;
  Coberturas: string;
  DiasduracaoApolice: string;
  ValorMaximoMercadoria: string;
  coveragesList: IGetIdAndNameMapperResponse[];
  packagingList: IGetIdAndNameMapperResponse[];
  setCondicoesManuseioEmbalagemMercadoriaFn: (e: string) => void;
  setCoberturasFn: (e: string) => void;
  setDiasduracaoApoliceFn: (e: string) => void;
  setValorMaximoMercadoriaFn: (e: string) => void;
}) {
  return (
    <div className="  pt-4 px-2 ">
      {/* <StepHeader title={""} /> */}
      <div className="grid gap-6  ">
        <div>
          <StepHeader title="Condições de Manuseio e Embalagem da Mercadoria" />
          <Check.Radio
            itemList={packagingList}
            value={CondicoesManuseioEmbalagemMercadoria}
            setValuesFn={setCondicoesManuseioEmbalagemMercadoriaFn}
            className="grid sm:grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
        </div>
        <div>
          <StepHeader title="Coberturas" />
          <Check.Radio
            itemList={coveragesList}
            value={Coberturas}
            setValuesFn={setCoberturasFn}
            className="grid sm:grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
          />
          <div className="space-y-2 mt-4">
            <Input.Default
              label="Dias de duração da apolice"
              placeholder="0"
              type="number"
              icon={CalendarDays}
              value={DiasduracaoApolice}
              onChange={(e) => setDiasduracaoApoliceFn(e.target.value)}
            />
            <Input.Default
              label="Valor máximo por mercadoria"
              placeholder="0"
              type="number"
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
