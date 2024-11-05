import React from 'react'
import ShowCardGroupPage from '../page'


export default function InsuranceTypePage() {
    return (
        <ShowCardGroupPage
            title='Selecione o Tipo de Seguro'
            description='Escolha abaixo o tipo de seguro que deseja simular. Cada opção oferece uma breve descrição para facilitar sua escolha. Basta clicar em um dos tipos e avançar para calcular a melhor oferta para você!'
            route='insurance_type'
            link='/simulation/policytype' />
    );
}
