import { z } from "zod";

const MINIMUM_AGE = 18;

const today = new Date();
const cutoffDate = new Date(today.getFullYear() - MINIMUM_AGE, today.getMonth(), today.getDate());

export const LifeInsureceSchema = z.object({
  NomeComplete: z
    .string({ required_error: "Campo de 'Nome Completo' obrigatorio" })
    .min(3, { message: "Nome completo deve ter pelo menos 3 caracteres" })
    .min(5, "O nome deve ter pelo menos mais de 5 caracter")
    .regex(/^[a-zA-ZÀ-ú\s]+$/, "Apenas é permitido Letras no 'Nome Completo'"),

  Email: z.string().email({ message: "Email inválido" }),
  Nif: z
    .string()
    .length(14, { message: "NIF deve ter 14 caracteres" })
    .regex(/^\d{9}[A-Z]{2}\d{3}$/, {
      message: "NIF inserido é inválido",
    }),
  // Genero: z.string().min(1, { message: "Selecione pelo menos um 'Gênero'" }),
  Genero: z.enum(["M", "F"], {
    errorMap: () => ({ message: "Apenas é permitido Masculino ou Feminino" }),
  }),
  DataNascimento: z
    .date({
      required_error: "Data de nascimento é obrigatório",
      invalid_type_error: "Data de nascimento é obrigatório",
    })
    .max(today, "A data de nascimento não pode ser superior ao dia de hoje.")
    .refine((date) => date <= cutoffDate, `O cliente deve ter pelo menos ${MINIMUM_AGE} anos de idade.`),
  DuracaoCobertura: z.number().min(1, { message: "'Duração da Cobertura', não pode estar vazia ou deve ser maior de 0" }),
  ValorCobertura: z.number().min(1, { message: "'Duração da Cobertura', não pode estar vazia ou deve ser maior de 0" }),
  Coberturas: z.number().array().min(1, { message: "Selecione pelo menos uma 'Coberturas'" }),
  Agravamento: z.number().array().min(1, { message: "Selecione pelo menos um 'Agravamento'" }),
  Seguradora: z.number().array().min(1, { message: "Selecione pelo menos uma 'Seguradora'" }),
});

//   Telefone: z
//     .string()
//     .regex(/^[0-9]*$/, "Só é permitido números para o campo de Nº de Telemóvel")
//     .min(9, { message: "Telefone deve ter pelo menos 9 caracteres" }),
// });

// export const stepTwoSchema = z.object({
//   MeioTransporte: z.number().array().min(1, { message: "Selecione pelo menos um 'Meio de Transporte'" }),
//   ClassificacaoProdutoTransportado: z.string().min(1, { message: "Selecione Uma 'Classificação de Produto Transportado'" }),
// });

// export const stepThreeSchema = z.object({
//   PaisOrigem: z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos um 'País de Origem'" }),
//   PaisDestino: z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos um 'País de Destino'" }),
// });

// export const stepThreeSchemaProvincias = z.array(z.object({ id: z.string(), name: z.string() })).min(1, { message: "Selecione pelo menos uma 'Província'" });

// export const stepFourSchema = z.object({
//   DetalhesAdicionais: z.string().min(1, { message: "Selecione pelo menos um 'Detalhes Adicionais'" }),
//   CondicoesEspeciais: z.number().array().min(1, { message: "Selecione pelo menos um 'Condições Especiais'" }),
// });

// export const stepFiveSchema = z.object({
//   CondicoesManuseioEmbalagemMercadoria: z.string().min(1, { message: "Selecione pelo menos um 'Condições de Manuseio da Embalagem da Mercadoria'" }),
//   Coberturas: z.string().min(1, { message: "Selecione pelo menos uma 'Cobertura'" }),
//   DiasduracaoApolice: z.string().regex(/^[0-9]*$/, "Apenas números são permitidos no campo'Dias de duração da apolice'").min(1, { message: "Preencha a 'Duração da Apólice'" }),
//   ValorMaximoMercadoria: z.string().regex(/^[0-9]*$/, "Apenas números são permitidos no campo'Valor máximo por mercadoria'").min(1, { message: "Preencha o 'Valor Máximo da Mercadoria'" }),});
