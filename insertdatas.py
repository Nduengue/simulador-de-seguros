from models import (
    Company,
    Option,
    Option_Option,
    Rate,
    Condition,
    Ciip,
    Ciip_Pt,
    InsuranceType,
    Insurance,
    PolicyType,
    OGO,
    OptionGroup,
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

values = [
    "Afeganistão",
    "África do Sul",
    "Albânia",
    "Alemanha",
    "Andorra",
    "Angola",
    "Antígua e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Armênia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bangladesh",
    "Barbados",
    "Barém",
    "Bélgica",
    "Belize",
    "Benim",
    "Bielorrússia",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burquina Faso",
    "Burundi",
    "Butão",
    "Cabo Verde",
    "Camarões",
    "Camboja",
    "Canadá",
    "Catar",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Colômbia",
    "Comores",
    "Congo (Brazzaville)",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa do Marfim",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Egito",
    "El Salvador",
    "Emirados Árabes Unidos",
    "Equador",
    "Eritreia",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estados Unidos",
    "Estônia",
    "Eswatini",
    "Etiópia",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Gana",
    "Geórgia",
    "Granada",
    "Grécia",
    "Guatemala",
    "Guiana",
    "Guiné",
    "Guiné-Bissau",
    "Guiné Equatorial",
    "Haiti",
    "Honduras",
    "Hungria",
    "Iêmen",
    "Ilhas Marshall",
    "Ilhas Salomão",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jordânia",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letônia",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Madagascar",
    "Malásia",
    "Maláui",
    "Maldivas",
    "Mali",
    "Malta",
    "Marrocos",
    "Maurício",
    "Mauritânia",
    "México",
    "Mianmar (Birmânia)",
    "Micronésia",
    "Moçambique",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Noruega",
    "Nova Zelândia",
    "Omã",
    "Países Baixos",
    "Palau",
    "Panamá",
    "Papua-Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Polônia",
    "Portugal",
    "Quênia",
    "Quirguistão",
    "Reino Unido",
    "República Centro-Africana",
    "República Dominicana",
    "República Tcheca",
    "Romênia",
    "Ruanda",
    "Rússia",
    "Samoa",
    "San Marino",
    "Santa Lúcia",
    "São Cristóvão e Névis",
    "São Tomé e Príncipe",
    "São Vicente e Granadinas",
    "Seicheles",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Singapura",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Sudão",
    "Sudão do Sul",
    "Suécia",
    "Suíça",
    "Suriname",
    "Tailândia",
    "Tajiquistão",
    "Tanzânia",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trindade e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Zâmbia",
    "Zimbábue",
]

# values = [
#     "Bengo", "Benguela", "Bié", "Cabinda", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Icolo e Bengo",
#     "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Moxico-Leste", "Namibe", "Uíge", "Zaire", "Cuando", "Kubango"
# ]

# for value in values:
#     res = Option.put(value, 4)
#     print(res)

# 1	1	Morte por qualquer causa		M
# 2	1	Invalidez Total e Permanente		ITP
# 3	1	Doenças Críticas		DC
# 25	1	Cobertura para Avaria/Perda Total
# 26	1	Roubo/Pirataria (marítimo)
# 27	1	Cobertura para eventos climáticos severos	Inundações ou Tempestades
# 30	1	Áreas de conflito
# 36	1	Cláusula A
# 37	1	Cláusula B
# 38	1	Cláusula C


# res = Option.group_countries()
# print(res)
{
    "company_ids": [1, 2, 3],
    "category_id": 1,
    "insurance_id": 2,
    "insurance_type_id": 1,
    "policy_type_id": 1,
    "merchandise_id": 7,
    "way_ids": [9],
    "country_from_ids": [48],
    "state_from_ids": [238, 236],
    "country_to_ids": [54],
    "states_to_ids": [],
    "from_to_ids": [23, 21],
    "value": 231552,
}
(
    {
        "status": "success",
        "company_simulations": [
            {
                "company": {
                    "id": 1,
                    "name": "Global Seguros",
                    "email": "global@seguros.ao",
                    "created_at": "2024-10-19T19:15:55.581817+01:00",
                    "updated_at": None,
                    "deleted": False,
                },
                "merchandise": {
                    "option": {"id": 7, "name": "Produtos perigosos"},
                    "option_group_id": 1,
                    "rate": {"id": 30, "value": 0.45},
                },
                "ways": {
                    "options": [{"id": 9, "name": "Terrestre"}],
                    "option_group_id": 2,
                    "rate": {"id": 15, "value": 0.16},
                },
                "from_tos": {
                    "options": [
                        {"id": 21, "name": "Internacional"},
                        {"id": 23, "name": "Com Transbordo"},
                    ],
                    "option_group_id": 3,
                    "rate": {"id": 32, "value": 0.15},
                },
                "countries_from": {
                    "options": [{"id": 48, "name": "Angola"}],
                    "option_group_id": 11,
                },
                "states_from": {
                    "options": [
                        {"id": 238, "name": "Cabinda"},
                        {"id": 236, "name": "Benguela"},
                    ],
                    "option_group_id": 12,
                },
                "countries_to": {
                    "options": [{"id": 54, "name": "Austrália"}],
                    "option_group_id": 11,
                },
                "states_to": {"options": [], "option_group_id": 12},
            },
            {
                "company": {
                    "id": 2,
                    "name": "Giant Seguros SA",
                    "email": "giant@seguros.ao",
                    "created_at": "2024-10-19T19:15:55.625509+01:00",
                    "updated_at": None,
                    "deleted": False,
                },
                "merchandise": {
                    "option": {"id": 7, "name": "Produtos perigosos"},
                    "option_group_id": 1,
                    "rate": None,
                },
                "ways": {
                    "options": [{"id": 9, "name": "Terrestre"}],
                    "option_group_id": 2,
                    "rate": None,
                },
                "from_tos": {
                    "options": [
                        {"id": 21, "name": "Internacional"},
                        {"id": 23, "name": "Com Transbordo"},
                    ],
                    "option_group_id": 3,
                    "rate": None,
                },
                "countries_from": {
                    "options": [{"id": 48, "name": "Angola"}],
                    "option_group_id": 11,
                },
                "states_from": {
                    "options": [
                        {"id": 238, "name": "Cabinda"},
                        {"id": 236, "name": "Benguela"},
                    ],
                    "option_group_id": 12,
                },
                "countries_to": {
                    "options": [{"id": 54, "name": "Austrália"}],
                    "option_group_id": 11,
                },
                "states_to": {"options": [], "option_group_id": 12},
            },
            {
                "company": {
                    "id": 3,
                    "name": "Fidelidade Seguros",
                    "email": "fidelidade@seguros.ao",
                    "created_at": "2024-10-19T19:15:55.636480+01:00",
                    "updated_at": None,
                    "deleted": False,
                },
                "merchandise": {
                    "option": {"id": 7, "name": "Produtos perigosos"},
                    "option_group_id": 1,
                    "rate": None,
                },
                "ways": {
                    "options": [{"id": 9, "name": "Terrestre"}],
                    "option_group_id": 2,
                    "rate": None,
                },
                "from_tos": {
                    "options": [
                        {"id": 21, "name": "Internacional"},
                        {"id": 23, "name": "Com Transbordo"},
                    ],
                    "option_group_id": 3,
                    "rate": None,
                },
                "countries_from": {
                    "options": [{"id": 48, "name": "Angola"}],
                    "option_group_id": 11,
                },
                "states_from": {
                    "options": [
                        {"id": 238, "name": "Cabinda"},
                        {"id": 236, "name": "Benguela"},
                    ],
                    "option_group_id": 12,
                },
                "countries_to": {
                    "options": [{"id": 54, "name": "Austrália"}],
                    "option_group_id": 11,
                },
                "states_to": {"options": [], "option_group_id": 12},
            },
        ],
    },
    200,
)

# Países africanos
# paises_africanos = [
#     "África do Sul", "Angola", "Argélia", "Benim", "Botsuana", "Burquina Faso", "Burundi",
#     "Cabo Verde", "Camarões", "Chade", "Comores", "Congo (Brazzaville)", "Costa do Marfim",
#     "Egito", "Eritreia", "Etiópia", "Gabão", "Gâmbia", "Gana", "Guiné", "Guiné-Bissau",
#     "Guiné Equatorial", "Lesoto", "Libéria", "Líbia", "Madagascar", "Maláui", "Mali",
#     "Marrocos", "Maurício", "Mauritânia", "Moçambique", "Namíbia", "Níger", "Nigéria",
#     "Quênia", "República Centro-Africana", "Ruanda", "Senegal", "Serra Leoa", "Somália",
#     "Sudão", "Sudão do Sul", "Tanzânia", "Togo", "Tunísia", "Uganda", "Zâmbia", "Zimbábue"
# ]

# for country in paises_africanos:
#     option = Option.get(country)
#     if not option:
#         print(f"Pais nao encontrado {country}")
#         continue
#     OGO.put(15, option.id)

# # Países da SADC
# paises_sadc = [
#     "África do Sul", "Angola", "Botsuana", "Eswatini", "Lesoto", "Maláui", "Moçambique",
#     "Namíbia", "República Democrática do Congo", "São Tomé e Príncipe", "Tanzânia",
#     "Zâmbia", "Zimbábue"
# ]

# for country in paises_sadc:
#     option = Option.get(country)
#     if not option:
#         print(f"Pais nao encontrado {country}")
#         continue
#     OGO.put(16, option.id)


# Option.put("República Democrática do Congo", 16, "RDC")
# country = Option.get("República Democrática do Congo")
# if not country:
#     print(f"Pais nao encontrado República Democrática do Congo")
#     OGO.put(16, country.id)
