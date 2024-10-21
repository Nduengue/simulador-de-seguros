from models import (
    Company,
    Option,
    Option_Option,
    Company_Rate,
    Rate,
    Condition,
    Ciip,
    Ciip_Pt,
    InsuranceType,
    Insurance,
    PolicyType,
    OGO,
    OptionGroup,
    OType,
)

# companies = [
#     ["Global Seguros", "global@seguros.ao"],
#     ["Giant Seguros SA", "giant@seguros.ao"],
#     ["Fidelidade Seguros", "fidelidade@seguros.ao"],
# ]

# for company in companies:
#     res = Company.put(company[0], company[1])
#     print(res)


# ciip_pts = [
#     {
#         "ciip_id": 1,
#         "policy_type_id": 1
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 2
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 5
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 6
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 7
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 8
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 9
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 10
#     },
#     {
#         "ciip_id": 1,
#         "policy_type_id": 11
#     },
#     {
#         "ciip_id": 4,
#         "policy_type_id": 1
#     },
#     {
#         "ciip_id": 4,
#         "policy_type_id": 3
#     },
#     {
#         "ciip_id": 4,
#         "policy_type_id": 4
#     },
#     {
#         "ciip_id": 5,
#         "policy_type_id": 1
#     },
#     {
#         "ciip_id": 5,
#         "policy_type_id": 3
#     },
#     {
#         "ciip_id": 5,
#         "policy_type_id": 4
#     }
# ]

# for ciip_pt in ciip_pts:
#     res = Ciip_Pt.put(ciip_pt['ciip_id'], ciip_pt['policy_type_id'])
#     print(res)


# options = [
#     ("Morte por qualquer causa", "M", True),
#     ("Invalidez Total e Permanente", "ITP", False),
#     ("Doenças Críticas", "DC", False),
#     ("Mercadorias gerais", None, False),
#     ("Produtos perecíveis", None, False),
#     ("Produtos perigosos", None, False),
#     ("Produtos de alto valor (joias, eletrónicos)", None, False),
#     ("Transporte Terrestre (Rodoviário/Ferroviário)", None, False),
#     ("Transporte Marítimo", None, False),
#     ("Transporte Fluvial", None, False),
#     ("Aéreo (internacional ou interprovincial)", None, False),
#     ("Terestre + Marítimo", None, False),
#     ("Terestre + Aéreo", None, False),
#     ("Marítimo + Aéreo", None, False),
#     ("Aéreo + Marítimo + Terestre", None, False),
#     ("Nacional Curta distância (intra-província) Sem transbordo", None, False),
#     ("Nacional Curta distância (intra-província) Com transbordo", None, False),
#     ("Nacional Longa distância (interprovincial) Sem transbordo", None, False),
#     ("Nacional Longa distância (interprovincial) Com transbordo", None, False),
#     ("Internacional Países da SADC Sem transbordo", None, False),
#     ("Internacional Países da SADC Com transbordo", None, False),
#     ("Internacional Outros continentes Sem transbordo", None, False),
#     ("Internacional Outros continentes Com transbordo", None, False),
#     ("Cobertura para Avaria/Perda Total", None, False),
#     ("Roubo/Pirataria (marítimo)", None, False),
#     (
#         "Cobertura para eventos climáticos severos (inundações, tempestades)",
#         None,
#         False,
#     ),
#     ("Produtos embalados profissionalmente", None, False),
#     ("Produtos sem proteção ou embalagem inadequada", None, False),
#     ("Áreas de conflito", None, False),
#     ("Valor total das mercadorias transportadas até 50 M", None, False),
#     ("Valor total das mercadorias transportadas acima de 50 M até 100 M", None, False),
#     ("Valor total das mercadorias transportadas acima de 100 M", None, False),
#     (
#         "Hipertensão Controlada",
#         "Pressão arterial elevada controlada com medicação",
#         None,
#         False,
#     ),
#     (
#         "Hipertensão Não Controlada",
#         "Pressão arterial elevada sem controle adequado",
#         None,
#         False,
#     ),
#     (
#         "Diabetes Tipo 2 Controlada",
#         "Diabetes controlada com dieta e medicação",
#         None,
#         False,
#     ),
#     ("Diabetes Tipo 2 Não Controlada", "Diabetes sem controle adequado", None, False),
# ]


# items = [
#     "Mercadorias gerais",
#     "Produtos perecíveis",
#     "Produtos perigosos",
#     "Produtos de alto valor (joias, eletrónicos)",
#     "Transporte Terrestre (Rodoviário/Ferroviário)",
#     "Transporte Marítimo",
#     "Transporte Fluvial",
#     "Aéreo (internacional ou interprovincial)",
#     "Terestre + Marítimo",
#     "Terestre + Aéreo",
#     "Marítimo + Aéreo",
#     "Aéreo + Marítimo + Terestre",
#     "Nacional Curta distância (intra-província) Sem transbordo",
#     "Nacional Curta distância (intra-província) Com transbordo",
#     "Nacional Longa distância (interprovincial) Sem transbordo",
#     "Nacional Longa distância (interprovincial) Com transbordo",
#     "Internacional Países da SADC Sem transbordo",
#     "Internacional Países da SADC Com transbordo",
#     "Internacional Outros continentes Sem transbordo",
#     "Internacional Outros continentes Com transbordo",
#     "Cobertura para Avaria/Perda Total",
#     "Roubo/Pirataria (marítimo)",
#     "Cobertura para eventos climáticos severos (inundações, tempestades)",
#     "Produtos embalados profissionalmente",
#     "Produtos sem proteção ou embalagem inadequada",
#     "Áreas de conflito",
#     "Valor total das mercadorias transportadas até 50 M",
#     "Valor total das mercadorias transportadas acima de 50 M até 100 M",
#     "Valor total das mercadorias transportadas acima de 100 M",
#     "Frequência dos transportes",
#     "Histórico de sinistros da empresa transportadora",
#     "Cláusula A",
#     "Cláusula B",
#     "Cláusula C"
# ]

# values = [
#     0.07,
#     0.13,
#     0.28,
#     10,
#     25,
#     15,
#     30,
#     0.03,
#     0.06,
#     0.12,
#     0.18,
#     0.27,
#     0.46,
#     0.34,
#     0.16,
#     0.19,
#     0.22,
#     0.25,
#     0.02,
#     0.05,
#     0.08,
#     0.11,
#     0,
#     0.9,
#     -7,
#     -5,
#     -12,
#     -16
# ]

# values = [
#     "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Antígua e Barbuda", "Arábia Saudita",
#     "Argélia", "Argentina", "Armênia", "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bangladesh", "Barbados",
#     "Barém", "Bélgica", "Belize", "Benim", "Bielorrússia", "Bolívia", "Bósnia e Herzegovina", "Botsuana", "Brasil",
#     "Brunei", "Bulgária", "Burquina Faso", "Burundi", "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", 
#     "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Colômbia", "Comores", "Congo (Brazzaville)", 
#     "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca", 
#     "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador", "Eritreia", "Eslováquia", "Eslovênia", 
#     "Espanha", "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", 
#     "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala", "Guiana", "Guiné", "Guiné-Bissau", 
#     "Guiné Equatorial", "Haiti", "Honduras", "Hungria", "Iêmen", "Ilhas Marshall", "Ilhas Salomão", "Índia", 
#     "Indonésia", "Irã", "Iraque", "Irlanda", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", 
#     "Kiribati", "Kosovo", "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia", "Liechtenstein", 
#     "Lituânia", "Luxemburgo", "Madagascar", "Malásia", "Maláui", "Maldivas", "Mali", "Malta", "Marrocos", 
#     "Maurício", "Mauritânia", "México", "Mianmar (Birmânia)", "Micronésia", "Moçambique", "Moldávia", "Mônaco", 
#     "Mongólia", "Montenegro", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", 
#     "Nova Zelândia", "Omã", "Países Baixos", "Palau", "Panamá", "Papua-Nova Guiné", "Paquistão", "Paraguai", 
#     "Peru", "Polônia", "Portugal", "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", 
#     "República Dominicana", "República Tcheca", "Romênia", "Ruanda", "Rússia", "Samoa", "San Marino", "Santa Lúcia", 
#     "São Cristóvão e Névis", "São Tomé e Príncipe", "São Vicente e Granadinas", "Seicheles", "Senegal", "Serra Leoa", 
#     "Sérvia", "Singapura", "Síria", "Somália", "Sri Lanka", "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", 
#     "Tailândia", "Tajiquistão", "Tanzânia", "Timor-Leste", "Togo", "Tonga", "Trindade e Tobago", "Tunísia", 
#     "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", 
#     "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
# ]

# values = [
#     "Bengo", "Benguela", "Bié", "Cabinda", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Icolo e Bengo",
#     "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Moxico-Leste", "Namibe", "Uíge", "Zaire", "Cuando", "Kubango"
# ]

# for value in values:
#     res = Option.put(value, 4)
#     print(res)
