<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class Validation extends Controller
{
    public function ValidarDadoSimulacao($data)
    {

        $validator = Validator::make($data->all(), [
            'user_id' => 'required|integer|min:1',

            // Validando o array de 'user_covarge'
            'user_covarge' => 'required|array|min:1',
            'user_covarge.*.covarge_id' => 'required|integer|min:1',

            // Validando o array de 'user_agravation'
            'user_aggravation' => 'required|array|min:1',
            'user_aggravation.*.aggravation_id' => 'required|integer|min:1',

            // Validando o array de 'user_beneficiario'
            'user_beneficiario' => 'required|array|min:1',
            'user_beneficiario.*.nome' => 'required|string|min:2|max:255',
            'user_beneficiario.*.sobrenome' => 'required|string|min:2|max:255',
            'user_beneficiario.*.sexo' => 'required|in:M,F', // Verifica se é 'M' ou 'F'
            'user_beneficiario.*.data_nascimento' => 'required|date|before:today', // Data de nascimento válida e antes de hoje

            // Validando 'user_preco_duracao' como objeto
            'user_price_duraction_year' => 'required|array',
            'user_price_duraction_year.price' => 'required|numeric|min:1', // Preço número positivo
            'user_price_duraction_year.duraction_year' => 'required|integer|min:1', // Duração em anos número inteiro positivo
        ], [
            // Mensagens personalizadas para todos os campos
            'user_id.required' => 'O campo ID do usuário é obrigatório.',
            'user_id.integer' => 'O campo ID do usuário deve ser um número inteiro.',
            'user_covarge.required' => 'É necessário fornecer pelo menos uma cobertura.',
            'user_covarge.*.covarge_id.required' => 'O campo ID da cobertura é obrigatório.',
            'user_covarge.*.covarge_id.integer' => 'O campo ID da cobertura  deve ser um número inteiro.',
            'user_agravation.required' => 'É necessário fornecer pelo menos um agravamento.',
            'user_agravation.*.aggravation_id.required' => 'O campo ID do agravamento é obrigatório.',
            'user_agravation.*.aggravation_id.integer' => 'O campo ID do agravamento deve ser um número inteiro.',
            'user_beneficiario.required' => 'É necessário fornecer pelo menos um beneficiário.',
            'user_beneficiario.*.nome.required' => 'O campo nome do beneficiário é obrigatório.',
            'user_beneficiario.*.nome.string' => 'O campo nome do beneficiário é do tipo string.',
            'user_beneficiario.*.sobrenome.required' => 'O campo sobrenome do beneficiário é obrigatório.',
            'user_beneficiario.*.sexo.required' => 'O campo sexo do beneficiário é obrigatório.',
            'user_beneficiario.*.data_nascimento.required' => 'O campo data de nascimento do beneficiário é obrigatório.',
            'user_price_duraction_year.price.required' => 'O campo preço é obrigatório.',
            'user_price_duraction_year.price.numeric' => 'O campo preço deve ser numérico.',
            'user_price_duraction_year.price.min' => 'O campo preço deve conter apenas dois válores numéricos.',
            'user_price_duraction_year.duraction_year.required' => 'O campo duração (anos) é obrigatório.',
            'user_price_duraction_year.duraction_year.integer' => 'O campo duração deve ser um número inteiro.',
        ]);
        return $validator;
    }

    public function ValidFieldsLife($data)
    {
        $validator = Validator::make($data, [
            'user.name' => 'required|string',
            'user.nif' => 'required|string|max:20',
            'user.gender' => 'required|in:M,F',
            'user.birth_date' => 'required|date|before:today',
            'user.email' => 'nullable|email',
            'coverage_value' => 'required|numeric|min:1',
            'coverage_duration' => 'required|integer|min:1',
            'coverage_ids' => 'required|array|min:1',
            'coverage_ids.*' => 'integer',
            'aggravation_ids' => 'required|array|min:1',
            'aggravation_ids.*' => 'integer',
            'insurance_type_id' => 'required|integer',
            'category_id' => 'required|integer',
            'insurance_id' => 'required|integer',
            'policy_type_id' => 'required|integer',
            'company_ids' => 'required|array|min:1',
            'company_ids.*' => 'integer',
            'email' => 'required|email'
        ], [
            'user.name.required' => 'O nome do usuário é obrigatório.',
            'user.nif.required' => 'O NIF do usuário é obrigatório.',
            'user.nif.unique' => 'Este NIF já está em uso.',
            'user.gender.required' => 'O gênero é obrigatório.',
            'user.gender.in' => 'O gênero deve ser M ou F.',
            'user.birth_date.required' => 'A data de nascimento é obrigatória.',
            'user.birth_date.date' => 'A data de nascimento deve estar no formato válido.',
            'user.birth_date.before' => 'A data de nascimento deve ser anterior a hoje.',
            'user.email.email' => 'O email do usuário deve ser um endereço de email válido.',
            'coverage_value.required' => 'O valor da cobertura é obrigatório.',
            'coverage_value.numeric' => 'O valor da cobertura deve ser numérico.',
            'coverage_duration.required' => 'A duração da cobertura é obrigatória.',
            'coverage_duration.integer' => 'A duração da cobertura deve ser um número inteiro.',
            'coverage_ids.required' => 'É necessário selecionar ao menos uma cobertura.',
            'coverage_ids.*.exists' => 'Uma das coberturas selecionadas é inválida.',
            'aggravation_ids.required' => 'É necessário selecionar ao menos um agravamento.',
            'aggravation_ids.*.exists' => 'Um dos agravamentos selecionados é inválido.',
            'insurance_type_id.required' => 'O tipo de seguro é obrigatório.',
            'insurance_type_id.exists' => 'O tipo de seguro selecionado é inválido.',
            'category_id.required' => 'A categoria é obrigatória.',
            'category_id.exists' => 'A categoria selecionada é inválida.',
            'insurance_id.required' => 'O ID do seguro é obrigatório.',
            'insurance_id.exists' => 'O seguro selecionado é inválido.',
            'policy_type_id.required' => 'O tipo de apólice é obrigatório.',
            'policy_type_id.exists' => 'O tipo de apólice selecionado é inválido.',
            'company_ids.required' => 'É necessário selecionar ao menos uma companhia.',
            'company_ids.*.exists' => 'Uma das companhias selecionadas é inválida.',
            'email.required' => 'O campo de email é obrigatório.',
            'email.email' => 'O email deve ser um endereço de email válido.'
        ]);
        return $validator->fails();       
    }



    public function ValidFieldsMt($data)
    {
        $validatedData = Validator::make($data->all(), [
            'company_ids' => 'required|array|min:1',
            'company_ids.*' => 'integer|exists:companies,id',

            'user.name' => 'required|string|max:255',
            'user.nif' => 'required|string|max:20',
            'user.phone_number' => 'required|string|max:15',
            'user.email' => 'required|email',

            'duration' => 'required|integer|min:1',

            'category_id' => 'required|integer',
            'insurance_id' => 'required|integer',
            'insurance_type_id' => 'required|integer',
            'policy_type_id' => 'required|integer',

            'merchandise_id' => 'required|integer',
            'way_ids' => 'required|array|min:1',
            'way_ids.*' => 'integer',

            'condition_ids' => 'required|array|min:1',
            'condition_ids.*' => 'integer',

            'packaging_id' => 'required|integer',
            'coverage_id' => 'required|integer',

            'country_from_ids' => 'required|array|min:1',
            'country_from_ids.*' => 'integer',

            'state_from_ids' => 'nullable|array',
            'state_from_ids.*' => 'integer',

            'country_to_ids' => 'required|array|min:1',
            'country_to_ids.*' => 'integer',

            'states_to_ids' => 'required|array|min:1',
            'states_to_ids.*' => 'integer',

            'from_to_ids' => 'required|array|min:1',
            'from_to_ids.*' => 'integer',

            'value' => 'required|numeric|min:1'
        ], [
            'company_ids.required' => 'É necessário selecionar ao menos uma companhia.',
            'company_ids.*.exists' => 'Uma das companhias selecionadas é inválida.',

            'user.name.required' => 'O nome do usuário é obrigatório.',
            'user.nif.required' => 'O NIF do usuário é obrigatório.',
            'user.nif.unique' => 'Este NIF já está em uso.',
            'user.phone_number.required' => 'O número de telefone é obrigatório.',
            'user.email.required' => 'O email do usuário é obrigatório.',
            'user.email.email' => 'O email do usuário deve ser válido.',

            'duration.required' => 'A duração é obrigatória.',
            'duration.integer' => 'A duração deve ser um número inteiro.',

            'category_id.required' => 'A categoria é obrigatória.',
            'category_id.exists' => 'A categoria selecionada é inválida.',

            'insurance_id.required' => 'O seguro é obrigatório.',
            'insurance_id.exists' => 'O seguro selecionado é inválido.',

            'insurance_type_id.required' => 'O tipo de seguro é obrigatório.',
            'insurance_type_id.exists' => 'O tipo de seguro selecionado é inválido.',

            'policy_type_id.required' => 'O tipo de apólice é obrigatório.',
            'policy_type_id.exists' => 'O tipo de apólice selecionado é inválido.',

            'merchandise_id.required' => 'O ID da mercadoria é obrigatório.',
            'merchandise_id.exists' => 'A mercadoria selecionada é inválida.',

            'way_ids.required' => 'É necessário selecionar ao menos um meio de transporte.',
            'way_ids.*.exists' => 'Um dos meios de transporte selecionados é inválido.',

            'condition_ids.required' => 'É necessário selecionar ao menos uma condição.',
            'condition_ids.*.exists' => 'Uma das condições selecionadas é inválida.',

            'packaging_id.required' => 'O ID da embalagem é obrigatório.',
            'packaging_id.exists' => 'A embalagem selecionada é inválida.',

            'coverage_id.required' => 'O ID da cobertura é obrigatório.',
            'coverage_id.exists' => 'A cobertura selecionada é inválida.',

            'country_from_ids.required' => 'É necessário selecionar ao menos um país de origem.',
            'country_from_ids.*.exists' => 'Um dos países de origem selecionados é inválido.',

            'state_from_ids.*.exists' => 'Um dos estados de origem selecionados é inválido.',

            'country_to_ids.required' => 'É necessário selecionar ao menos um país de destino.',
            'country_to_ids.*.exists' => 'Um dos países de destino selecionados é inválido.',

            'states_to_ids.required' => 'É necessário selecionar ao menos um estado de destino.',
            'states_to_ids.*.exists' => 'Um dos estados de destino selecionados é inválido.',

            'from_to_ids.required' => 'É necessário selecionar ao menos uma rota de origem e destino.',
            'from_to_ids.*.exists' => 'Uma das rotas de origem e destino selecionadas é inválida.',

            'value.required' => 'O valor é obrigatório.',
            'value.numeric' => 'O valor deve ser numérico.'
        ]);

        return $validatedData->fails();
    }


    public function ValidParamsMt($data_params)
    {
        $allParams = [
            'company_ids',
            'user',
            'duration',
            'category_id',
            'insurance_id',
            'insurance_type_id',
            'policy_type_id',
            'merchandise_id',
            'way_ids',
            'country_from_ids',
            'state_from_ids',
            'country_to_ids',
            'states_to_ids',
            'from_to_ids',
            'value',
            'packaging_id',
            'coverage_id',
            'condition_ids',
        ];
        $Params = [];

        // Verificar quais parâmetros estão faltando
        foreach ($allParams as $param) {
            if (!array_key_exists($param, $data_params)) {
                $Params[] = $param;
            }
        }
        return $Params;
    }

    public function ValidParamsLife($data_params)
    {
        $allParams = [
            'company_ids',
            'user',
            'coverage_duration',
            'category_id',
            'insurance_id',
            'insurance_type_id',
            'policy_type_id',
            'coverage_value',
            'coverage_ids',
            'aggravation_ids',
            'email'
        ];
        $Params = [];

        // Verificar quais parâmetros estão faltando
        foreach ($allParams as $param) {
            if (!array_key_exists($param, $data_params)) {
                $Params[] = $param;
            }
        }
        return $Params;
    }
}
