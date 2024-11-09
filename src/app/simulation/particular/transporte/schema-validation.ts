import { z } from "zod";

export const stepOneSchema = z.object({
  NomeComplete: z
    .string({ required_error: "Campo de 'Nome Completo' obrigatorio" })
    .min(3, { message: "Nome completo deve ter pelo menos 3 caracteres" })
    .min(5, "O nome deve ter pelo menos mais de 5 caracter")
    .regex(/^[a-zA-ZÀ-ú\s]+$/, "Apenas é permitido Letras no 'Nome Completo'"),

  Email: z.string().email({ message: "Email inválido" }),
  Nif: z
    .string()
    .min(9, { message: "NIF deve ter pelo menos 9 caracteres" })
    .regex(/^\d{9}[A-Z]{2}\d{3}$/, {
      message: "Número de Identificação Fiscal inválido",
    }),
  Telefone: z
    .string()
    .regex(/^[0-9]*$/, "Só é permitido números para o campo de Nº de Telemóvel")
    .min(9, { message: "Telefone deve ter pelo menos 9 caracteres" }),
});

export const stepTwoSchema = z.object({
  MeioTransporte: z.string().array().min(1, { message: "Selecione pelo menos um 'Meio de Transporte'" }),
  ClassificacaoProdutoTransportado: z.string().min(1, { message: "Selecione Uma 'Classificação de Produto Transportado'" }),
});

export const stepThreeSchema = z.object({
  PaisOrigem: z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos um 'País de Origem'" }),
  PaisDestino: z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos um 'País de Destino'" }),
});

export const stepThreeSchemaProvincias = z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos uma 'Província'" });

export const stepFourSchema = z.object({
  DetalhesAdicionais: z.string().array().min(1, { message: "Selecione pelo menos um 'Detalhes Adicionais'" }),
  CondicoesEspeciais: z.string().array().min(1, { message: "Selecione pelo menos um 'Condições Especiais'" }),
});

export const stepFiveSchema = z.object({
  CondicoesManuseioEmbalagemMercadoria: z.string().min(1, { message: "Selecione pelo menos um 'Condições de Manuseio da Embalagem da Mercadoria'" }),
  Coberturas: z.string().min(1, { message: "Selecione pelo menos uma 'Cobertura'" }),
  DiasduracaoApolice: z.string().regex(/^[0-9]*$/, "Apenas números são permitidos no campo'Dias de duração da apolice'").min(1, { message: "Preencha a 'Duração da Apólice'" }),
  ValorMaximoMercadoria: z.string().regex(/^[0-9]*$/, "Apenas números são permitidos no campo'Valor máximo por mercadoria'").min(1, { message: "Preencha o 'Valor Máximo da Mercadoria'" }),});