"use client";

import { Check } from "@/components/check";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/input";
import { OptionDTOType } from "@/types/dto-doods-transported";
import { API_LOCATION, API_LOCATION_2 } from "@/util/api";
import { GetIdAndNameMapper, IGetIdAndNameMapperResponse } from "@/util/function/mappers";
import { Button } from "antd";
import { BadgeDollarSign, CalendarDays, ChevronLeft, Download, Handshake, IdCard, Mail, Rss, SendIcon, ShieldEllipsis, Timer, User2, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { LifeInsureceSchema } from "./schema-validation";
import { Lib } from "@/lib";
import Loading from "@/app/loading";

const Data_Gender = [
  { id: "M", name: "👨‍🦰 Masculino" },
  { id: "F", name: "👩‍🦰 Femenino" },
];


function clickTopLeftCorner() {
  // Cria um novo evento de clique
  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 14, // Coordenada X do canto superior esquerdo
    clientY: 14, // Coordenada Y do canto superior esquerdo
  });

  // Dispara o evento no documento
  document.dispatchEvent(clickEvent);
}

export default function Vida() {
  
  const router = useRouter();
  const [gender, setGender] = useState("M");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nif: "",
    birth_date: "",
    covarge_value: "",
    covarge_duration: "",
  });

  const [coberturas, setCoberturas] = useState<OptionDTOType[]>([]);
  const [selectedCoberturas, setSelectedCoberturas] = useState<number[]>([]);

  const [agravamentos, setAgravamento] = useState<OptionDTOType[]>([]);
  const [selectedAgravamento, setSelectedAgravamento] = useState<number[]>([]);

  const [seguradora, setSeguradora] = useState<OptionDTOType[]>([]);
  const [selectedSeguradora, setSelectedSeguradora] = useState<number[]>([]);

  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const insurance_type_id = Number(searchParams.get("insurance_type_id"));
  const category_id = Number(searchParams.get("category_id"));
  const insurance_id = Number(searchParams.get("insurance_id"));
  const policy_type_id = Number(searchParams.get("policy_type_id"));
  useEffect(() => {
    fetch(`${API_LOCATION}/life_datas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        insurance_type_id: insurance_type_id,
        category_id: category_id,
        insurance_id: insurance_id,
        policy_type_id: policy_type_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const defaultCoveragesSelected: number[] = data.coverages.filter((item: OptionDTOType) => item.selected).map((item: OptionDTOType) => item.id);
        setSelectedCoberturas(defaultCoveragesSelected);
        // console.log("---<", defaultSelected);

        // const coverages = GetIdAndNameMapper()
        setCoberturas(data.coverages);
        // const aggravations = GetIdAndNameMapper()
        setAgravamento(data.aggravations);
        // const companies = GetIdAndNameMapper()
        setSeguradora(data.companies);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar Coberturas:", error);
        setLoading(false);
      });
  }, []);
  const handleSalvar = (receber: string) => {

    clickTopLeftCorner()
    const formDataValue = {
      NomeComplete: formData.name,
      Nif: formData.nif,
      Email: formData.email,
      Genero: gender,
      DataNascimento: new Date(formData.birth_date),
      DuracaoCobertura: Number(formData.covarge_value),
      ValorCobertura: Number(formData.covarge_duration),
      Coberturas: selectedCoberturas,
      Agravamento: selectedAgravamento,
      Seguradora: selectedSeguradora,
    };

    // console.log(formDataValue);

    const validation = LifeInsureceSchema.safeParse(formDataValue);

    if (!validation.success) {
      const errosMessages = validation.error.errors.map((error) => error.message);
      Lib.Sonner({ messages: errosMessages, type: "error" });
      return;
    }

    const dataBody = {
      user: {
        name: formDataValue.NomeComplete,
        nif: formDataValue.Nif,
        gender: formDataValue.Genero,
        birth_date: formDataValue.DataNascimento,
        email: formDataValue.Email,
      },
      coverage_value: formDataValue.ValorCobertura,
      coverage_duration: formDataValue.DuracaoCobertura,

      coverage_ids: formDataValue.Coberturas,
      aggravation_ids: formDataValue.Agravamento,
      company_ids: formDataValue.Seguradora,

      insurance_type_id: insurance_type_id,
      category_id: category_id,
      insurance_id: insurance_id,
      policy_type_id: policy_type_id,
      receber: receber,
    };

    fetch(`${API_LOCATION_2}/simulator/life/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.pdf) {
          const openPdf = (pdfData: string) => {
            const byteCharacters = atob(pdfData);
            const byteNumbers = new Uint8Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const blob = new Blob([byteNumbers], { type: "application/pdf" });
            const blobUrl = window.URL.createObjectURL(blob);

            window.open(blobUrl);
            console.log("PDF recebido:", pdfData);
          };

          if (Array.isArray(response.pdf)) {
            response.pdf.forEach((element: string) => {
              openPdf(element);
            });
          } else {
            openPdf(response.pdf);
          }
        } else {
          Lib.Sonner({ message: "Nenhum PDF encontrado na resposta.", type: "info" });
          console.error("Nenhum PDF encontrado na resposta.");
        }
        setLoading(false);
      })
      .catch((error) => {
        Lib.Sonner({ message: "Erro ao buscar Coberturas.", type: "error" });
        console.error("Erro ao buscar Coberturas:", error);
        setLoading(false);
      });
  };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-[#eff4f9] grid place-items-center ">
  //       <Loading labelClassName="text-gray-800" />
  //     </div>
  //   );
  // }

  return (
    // <Suspense fallback={<Loading labelClassName="text-gray-800" />}>
    <div className="text-gray-600 bg-[url('/wavess.svg')] bg-cover bg-center bg-no-repeat bg-fixed bg-[#eff4f9] min-h-screen p-4 grid place-items-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white  p-4 rounded-lg min-h-[35rem] flex items-center gap-x-4 shadow-lg ">
          <div className=" h-[25rem] w-[26rem] relative mx-8 hidden lg:block">
            <Image src="/app-icons/popp.png" alt="logo" className="absolute" fill />
          </div>

          {/* <form className="w-[29rem] space-y-2.5" action={handleSaveLifeSimulation}> */}
          <form className=" space-y-2.5">
            <div className="flex items-center flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 *:w-full gap-x-2">
              <Input.Default
                icon={User2}
                label="Nome Completo"
                placeholder="Insira nome completo"
                borderColor="border-[#fba94c]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input.Default
                icon={IdCard}
                label="NIF"
                placeholder="000000000LA000"
                borderColor="border-[#fba94c]"
                value={formData.nif}
                onChange={(e) => setFormData({ ...formData, nif: e.target.value })}
              />
            </div>
            <Input.Default
              icon={Mail}
              label="E-mail"
              placeholder="exemplo@dominio.com"
              borderColor="border-[#fba94c]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="space-y-2">
              <h2 className="font-bold ">Gênero</h2>
              {/* <Check.Radio itemList={Data_Gender} value="M" setValuesFn={setGender} /> */}

              <Check.Radio
                // disableAllChanges={MeioTransporte.length > 1}
                // defaultValue={MeioTransporte.length > 1 ? String(aditionalDetailsList.find((item) => item.name == "Com Transbordo")?.id) : undefined}
                // defaultValue={undefined}
                itemList={Data_Gender}
                value={gender}
                setValuesFn={setGender}
                className="grid sm:grid-cols-2 gap-2 items-start *:w-full gap-y-2 *:text-start *:justify-start"
              />
            </div>

            <Input.Default
              icon={CalendarDays}
              type="date"
              label="Data de Nascimento"
              borderColor="border-[#fba94c]"
              value={formData.birth_date}
              onChange={(e) => setFormData({ ...formData, birth_date: e.target.value })}
            />

            <div className="flex items-center flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0 *:w-full gap-x-2 pt-1 mt-2 border-t ">
              <Input.Default
                type="number"
                icon={BadgeDollarSign}
                label="Valor da Cobertura"
                placeholder="0.00"
                borderColor="border-[#fba94c]"
                value={formData.covarge_value}
                onChange={(e) => setFormData({ ...formData, covarge_value: e.target.value })}
              />
              <Input.Default
                type="number"
                icon={Timer}
                label="Duração do Seguro em Ano"
                placeholder="0"
                borderColor="border-[#fba94c]"
                value={formData.covarge_duration}
                onChange={(e) => setFormData({ ...formData, covarge_duration: e.target.value })}
              />
            </div>
            <div className="flex gap-x-2 text-sm *:bg-orange-400 *:flex-1 text-gray-100 mt-2 *:py-1 *:rounded-lg items-center justify-between *:flex *:flex-col *:items-center *:justify-center">
              <Dialog.Drawer title="Selectione a Cobertura" buttonProps={{ type: "button" }} buttonTitle="Cobertura" icon={Rss}>
                <Check.CheckBox className="sm:grid-cols-2" values={selectedCoberturas} setValuesFn={setSelectedCoberturas} itemList={coberturas} />

                {/* <Check.CheckBox
                                    className="sm:grid-cols-2 lg:grid-cols-4 gap-2"
                                    selectedOptions={selectedCoberturas}
                                    setSelectedOptions={setSelectedCoberturas}
                                    options={coberturas}
                                /> */}
              </Dialog.Drawer>

              <Dialog.Drawer title="Selectione o Agravamento" buttonTitle="Agravamento" buttonProps={{ type: "button" }} icon={ShieldEllipsis}>
                <Check.CheckBox className="sm:grid-cols-2" values={selectedAgravamento} setValuesFn={setSelectedAgravamento} itemList={agravamentos} />
                {/* <Check.CheckBox
                                    className="sm:grid-cols-2 lg:grid-cols-4 gap-2"
                                    selectedOptions={selectedAgravamento}
                                    setSelectedOptions={setSelectedAgravamento}
                                    options={agravamentos}
                                    /> */}
              </Dialog.Drawer>

              <Dialog.Drawer title="Selectione a Seguradora" buttonTitle="Seguradora" buttonProps={{ type: "button" }} icon={Handshake}>
                <Check.CheckBox className="sm:grid-cols-2" values={selectedSeguradora} setValuesFn={setSelectedSeguradora} itemList={seguradora} />
                {/* <Check.CheckBox
                                    className="sm:grid-cols-2 lg:grid-cols-4 gap-2"
                                    selectedOptions={selectedSeguradora}
                                    setSelectedOptions={setSelectedSeguradora}
                                    options={seguradora}
                                /> */}
              </Dialog.Drawer>
            </div>

            <hr />

            <div className="flex gap-x-2 justify-end *:flex *:items-center *:gap-x-1.5 text-gray-50 *:rounded *:bg-[#f76b15] *:px-3 *:py-1">
              <button type="button" onClick={() => router.back()}>
                <ChevronLeft size={15} />
                Voltar
              </button>
              <button type="reset" className="">
                <X size={15} />
                Limpar
              </button>

              <Dialog.Drawer title="Como você deseja receber os resultados?" buttonTitle="Enviar" buttonProps={{ type: "button" }} icon={SendIcon}>
                <div className="gap-4 p-2 flex flex-wrap *:p-5 *:rounded *:flex-1">
                  <Button className="hover:animate-pulse" icon={<Mail />} type="primary" onClick={() => handleSalvar("email")}>
                    Receber PDF por email
                  </Button>
                  <Button className="hover:animate-pulse" icon={<Download />} type="primary" onClick={() => handleSalvar("site")}>
                    Baixar resultados diretamente
                  </Button>
                </div>
              </Dialog.Drawer>
            </div>
          </form>
        </div>
      )}
    </div>
    // </Suspense>
  );
}
