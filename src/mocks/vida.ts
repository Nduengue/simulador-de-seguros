const coberturas: ICoberturas[] = [
  { id: 1, name: "Responsabilidade Civil", abbreviation: "RC", required: true },
  { id: 2, name: "Danos Próprios", abbreviation: "DP", required: false },
  {
    id: 3,
    name: "Quebra Isolada de Vidros",
    abbreviation: "QIV",
    required: false,
  },
  { id: 4, name: "Assistência em Viagem", abbreviation: "AV", required: true },
];
export async function Fake_GetCoberturas() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return coberturas;
}

const agravamentos: IAgravamentos[] = [
  {
    id: 1,
    policy_type_id: 1,
    rate_id: 101,
    name: "Condutor Jovem",
    descrition: "Condutor com menos de 25 anos",
    taggle_ids: [1, 2],
  },
  {
    id: 2,
    policy_type_id: 1,
    rate_id: 102,
    name: "Carta Recente",
    descrition: "Carta há menos de 2 anos",
    taggle_ids: [3],
  },
  {
    id: 3,
    policy_type_id: 2,
    rate_id: 103,
    name: "Zona de Risco",
    descrition: "Zona com alto índice de sinistralidade",
    taggle_ids: [4, 5, 6],
  },
];

export async function Fake_GetAgravamentos() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return agravamentos;
}

const seguradoras: ISeguradora[] = [
    { id: 1, name: "Fidelidade", required: true, abbreviation: "FID" },
    { id: 2, name: "Tranquilidade", required: false, abbreviation: "TRANQ" },
    { id: 3, name: "Allianz", required: true, abbreviation: "ALZ" },
    { id: 4, name: "Liberty", required: false, abbreviation: "LIB" }
];

export async function Fake_GetSeguradoras() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return seguradoras;
}

