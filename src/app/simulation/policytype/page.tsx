import React from 'react'
import ShowCardGroupPage from '../page'

const PolicyTypePage = () => {
    return (
        <ShowCardGroupPage
            title='Selecione o Tipo de Apólice'
            description='Escolha abaixo a apólice de seguro que deseja.'
            route='policy_type'
            link='/simulation/form'
        />
    )
}

export default PolicyTypePage