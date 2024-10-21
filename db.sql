COPY public.aggravation (
    id,
    name,
    description,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	Hipertensão Controlada	Pressão arterial elevada controlada com medicação	2024-10-16 14:08:34.38898+01	\N	f
2	Hipertensão Não Controlada	Pressão arterial elevada sem controle adequado	2024-10-16 14:08:46.786536+01	\N	f
3	Diabetes Tipo 2 Controlada	Diabetes controlada com dieta e medicação	2024-10-16 14:08:59.118728+01	\N	f
4	Diabetes Tipo 2 Não Controlada	Diabetes sem controle adequado	2024-10-16 14:09:13.043325+01	\N	f
\.


COPY public.aggravation_aggravation (
    id,
    aggravation_id,
    agravation_toggle_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	2	2024-10-15 16:49:21.978186+01	\N	f
2	2	1	2024-10-15 16:49:22.01013+01	\N	f
3	3	4	2024-10-15 16:50:00.605992+01	\N	f
4	4	3	2024-10-15 16:50:00.615966+01	\N	f
\.


COPY public.aggravation_rate (
    id,
    aggravation_id,
    rate_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	4	2024-10-17 17:34:03.832385+01	\N	f
2	2	5	2024-10-17 17:34:29.791029+01	\N	f
3	3	6	2024-10-17 17:34:43.874836+01	\N	f
4	4	7	2024-10-17 17:34:56.998468+01	\N	f
\.


COPY public.category (
    id,
    name,
    created_at,
    updated_at,
    deleted,
    description
)
FROM stdin;

2	Empresarial	2024-10-14 20:52:25.154312+01	\N	f	Projetado para empresas de todos os portes, oferecendo proteção para ativos empresariais, como equipamentos, instalações e funcionários. Garantir a segurança da sua empresa é essencial para o sucesso e continuidade do seu negócio.
1	Particular	2024-10-14 20:52:20.24133+01	\N	f	Ideal para indivíduos que buscam proteger seus bens pessoais, como veículos, imóveis, ou contratar um seguro de vida. Escolha essa opção para garantir sua segurança e tranquilidade no dia a dia.
3	SFFS	2024-10-16 18:22:20.419016+01	\N	t	\N
\.


COPY public.ciip (
    id,
    category_id,
    insurance_id,
    insurance_type_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	1	2	2024-10-15 11:45:00.225802+01	\N	f
2	1	1	3	2024-10-15 11:48:11.27651+01	\N	f
3	2	1	4	2024-10-15 11:48:25.656328+01	\N	f
5	2	2	1	2024-10-15 11:49:06.017971+01	\N	f
4	1	2	1	2024-10-15 11:48:55.384582+01	\N	f
\.


COPY public.ciip__policy_type (
    id,
    ciip_id,
    policy_type_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	1	2024-10-15 14:31:56.964528+01	\N	f
2	1	2	2024-10-15 14:35:34.317971+01	\N	f
3	1	5	2024-10-15 14:41:46.077343+01	\N	f
4	1	6	2024-10-15 14:41:50.204102+01	\N	f
5	1	7	2024-10-15 14:41:52.67821+01	\N	f
6	1	8	2024-10-15 14:41:54.735407+01	\N	f
7	1	9	2024-10-15 14:41:56.9369+01	\N	f
8	1	10	2024-10-15 14:41:59.230957+01	\N	f
9	1	11	2024-10-15 14:42:01.406615+01	\N	f
10	4	1	2024-10-15 15:21:13.046632+01	\N	f
11	4	3	2024-10-15 15:21:58.438732+01	\N	f
12	4	4	2024-10-15 15:22:10.315568+01	\N	f
13	5	1	2024-10-15 15:24:09.351154+01	\N	f
14	5	3	2024-10-15 15:24:23.709317+01	\N	f
15	5	4	2024-10-15 15:24:31.23449+01	\N	f
\.


COPY public.company (
    id,
    name,
    email,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	Global Seguros	global@seguros.ao	2024-10-17 09:56:58.944847+01	\N	f
2	Giant Seguros SA	giant@seguros.ao	2024-10-19 11:59:19.632556+01	\N	f
3	Fidelidade Seguros	fidelidade@seguros.ao	2024-10-19 11:59:56.332575+01	\N	f
\.


COPY public.condition (
    id,
    first_value,
    second_value,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	0	21	2024-10-17 10:56:23.129894+01	\N	f
2	22	42	2024-10-17 10:57:22.592107+01	\N	f
3	43	63	2024-10-17 10:57:41.032406+01	\N	f
\.


COPY public.coverage (
    id,
    name,
    abbreviation,
    required,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	Morte por qualquer causa	M	t	2024-10-16 13:25:56.804451+01	\N	f
2	Invalidez Total e Permanente	ITP	f	2024-10-16 13:31:34.184853+01	\N	f
3	Doenças Críticas	DC	f	2024-10-16 13:31:47.939506+01	\N	f
4	Mercadorias gerais	\N	f	2024-10-18 11:45:45.076276+01	\N	f
5	Produtos perecíveis	\N	f	2024-10-18 11:45:49.485123+01	\N	f
6	Produtos perigosos	\N	f	2024-10-18 11:45:52.931115+01	\N	f
7	Produtos de alto valor (joias, eletrónicos)	\N	f	2024-10-18 11:45:59.968225+01	\N	f
8	Transporte Terrestre (Rodoviário/Ferroviário)	\N	f	2024-10-18 13:10:52.328902+01	\N	f
9	Transporte Marítimo	\N	f	2024-10-18 13:10:55.592305+01	\N	f
10	Transporte Fluvial	\N	f	2024-10-18 13:10:58.447608+01	\N	f
11	Aéreo (internacional ou interprovincial)	\N	f	2024-10-18 13:11:01.186998+01	\N	f
12	Terestre + Marítimo	\N	f	2024-10-18 13:11:13.460969+01	\N	f
13	Terestre + Aéreo	\N	f	2024-10-18 13:11:18.88233+01	\N	f
14	Marítimo + Aéreo	\N	f	2024-10-18 13:11:22.343714+01	\N	f
15	Aéreo + Marítimo + Terestre	\N	f	2024-10-18 13:11:25.368512+01	\N	f
16	Nacional Curta distância (intra-província) Sem transbordo	\N	f	2024-10-18 15:14:09.18712+01	\N	f
17	Nacional Curta distância (intra-província) Com transbordo	\N	f	2024-10-18 15:14:12.64682+01	\N	f
18	Nacional Longa distância (interprovincial) Sem transbordo	\N	f	2024-10-18 15:14:16.993817+01	\N	f
19	Nacional Longa distância (interprovincial) Com transbordo	\N	f	2024-10-18 15:14:20.990186+01	\N	f
21	Internacional Países da SADC Sem transbordo	\N	f	2024-10-18 15:14:36.475578+01	\N	f
22	Internacional Países da SADC Com transbordo	\N	f	2024-10-18 15:14:42.361159+01	\N	f
23	Internacional Outros continentes Sem transbordo	\N	f	2024-10-18 15:14:49.052598+01	\N	f
24	Internacional Outros continentes Com transbordo	\N	f	2024-10-18 15:14:52.110483+01	\N	f
26	Cobertura para Avaria/Perda Total	\N	f	2024-10-19 11:13:09.506756+01	\N	f
27	Roubo/Pirataria (marítimo)	\N	f	2024-10-19 11:13:26.203092+01	\N	f
28	Cobertura para eventos climáticos severos (inundações, tempestades)	\N	f	2024-10-19 11:24:38.362482+01	\N	f
29	Produtos embalados profissionalmente	\N	f	2024-10-19 11:27:39.12954+01	\N	f
30	Produtos sem proteção ou embalagem inadequada	\N	f	2024-10-19 11:27:43.421587+01	\N	f
31	Áreas de conflito	\N	f	2024-10-19 11:34:38.531002+01	\N	f
34	Valor total das mercadorias transportadas até 50 M	\N	f	2024-10-19 11:40:10.982592+01	\N	f
35	Valor total das mercadorias transportadas acima de 50 M até 100 M	\N	f	2024-10-19 11:40:14.004437+01	\N	f
36	Valor total das mercadorias transportadas acima de 100 M	\N	f	2024-10-19 11:40:18.930923+01	\N	f
32	Frequência dos transportes	\N	f	2024-10-19 11:40:03.29082+01	\N	f
33	Histórico de sinistros da empresa transportadora	\N	f	2024-10-19 11:40:08.308421+01	\N	f
38	Cláusula A	\N	f	2024-10-19 12:09:55.191018+01	\N	f
39	Cláusula B	\N	f	2024-10-19 12:09:59.414302+01	\N	f
40	Cláusula C	\N	f	2024-10-19 12:10:01.975698+01	\N	f
\.


COPY public.coverage__rate_condition (
    id,
    rate_id,
    coverage_id,
    condition_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	1	1	2024-10-17 11:05:44.050105+01	\N	f
2	2	1	2	2024-10-17 11:07:29.669958+01	\N	f
3	3	1	3	2024-10-17 11:07:39.46723+01	\N	f
4	8	2	1	2024-10-17 17:49:58.156535+01	\N	f
5	9	2	2	2024-10-17 17:50:23.988368+01	\N	f
6	10	2	3	2024-10-17 17:50:39.315203+01	\N	f
7	11	4	\N	2024-10-18 11:57:19.146951+01	\N	f
8	12	5	\N	2024-10-18 11:58:04.648506+01	\N	f
9	13	6	\N	2024-10-18 11:58:10.206576+01	\N	f
10	14	7	\N	2024-10-18 11:58:14.902454+01	\N	f
11	19	3	1	2024-10-18 14:04:56.296671+01	\N	f
12	20	3	2	2024-10-18 14:05:18.662722+01	\N	f
13	21	3	3	2024-10-18 14:05:34.562095+01	\N	f
14	15	8	\N	2024-10-18 14:23:08.450276+01	\N	f
15	11	9	\N	2024-10-18 14:23:32.946636+01	\N	f
16	16	10	\N	2024-10-18 14:24:00.177568+01	\N	f
17	17	11	\N	2024-10-18 14:24:44.062447+01	\N	f
18	17	12	\N	2024-10-18 14:25:01.513692+01	\N	f
19	18	13	\N	2024-10-18 14:25:24.52907+01	\N	f
20	18	14	\N	2024-10-18 14:25:27.914915+01	\N	f
21	14	15	\N	2024-10-18 14:25:43.76185+01	\N	f
22	2	26	\N	2024-10-19 11:16:50.069498+01	\N	f
23	11	27	\N	2024-10-19 11:17:16.879953+01	\N	f
24	22	28	\N	2024-10-19 11:25:25.745222+01	\N	f
25	23	29	\N	2024-10-19 11:28:50.597149+01	\N	f
26	24	30	\N	2024-10-19 11:30:16.612958+01	\N	f
27	12	31	\N	2024-10-19 11:35:14.424697+01	\N	f
28	25	32	\N	2024-10-19 11:43:24.434784+01	\N	f
29	26	33	\N	2024-10-19 11:44:12.354147+01	\N	f
30	26	34	\N	2024-10-19 11:44:25.121455+01	\N	f
31	27	35	\N	2024-10-19 11:44:39.34962+01	\N	f
32	28	36	\N	2024-10-19 11:53:49.495573+01	\N	f
\.


COPY public.coverage_coverage (
    id,
    coverage_id,
    other_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

\. 

COPY public.cpt_aggravation (
    id,
    ciip__policy_type_id,
    aggravation_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	1	2024-10-16 14:13:51.691382+01	\N	f
2	1	2	2024-10-16 14:14:18.341777+01	\N	f
3	1	3	2024-10-16 14:14:21.231671+01	\N	f
4	1	4	2024-10-16 14:14:24.0071+01	\N	f
\.


COPY public.cpt_coverage (
    id,
    ciip__policy_type_id,
    coverage_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	1	2024-10-16 13:58:52.86458+01	\N	f
2	1	2	2024-10-16 14:03:07.456037+01	\N	f
3	1	3	2024-10-16 14:03:12.492428+01	\N	f
\.


COPY public.insurance (
    id,
    domain_id,
    name,
    icon,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	Vida	heart-pulse	2024-10-14 20:50:46.906793+01	\N	f
2	2	Mercadoria Transportada	cart3	2024-10-14 20:51:37.981305+01	\N	f
\.


COPY public.insurance_type (
    id,
    name,
    created_at,
    updated_at,
    deleted,
    icon
)
FROM stdin;

2	Individual	2024-10-14 20:52:57.482305+01	\N	f	person
3	Coletivo	2024-10-14 20:53:03.156714+01	\N	f	people
4	Grupo	2024-10-14 20:53:09.474544+01	\N	f	people
1	\N	2024-10-14 20:52:51.340952+01	\N	f	slash-circle
\.


COPY public.option (
    id,
    insurance_id,
    name,
    created_at,
    updated_at,
    deleted,
    required
)
FROM stdin;

4	2	4. Condições Especiais	2024-10-18 12:23:54.643108+01	\N	f	f
6	2	6. Condições Climatéricas	2024-10-18 12:29:42.749191+01	\N	f	f
7	2	7. Riscos Geopolíticos	2024-10-18 12:30:17.329426+01	\N	f	f
8	2	8. Factores de Descontos	2024-10-18 12:30:33.569285+01	\N	f	f
1	2	1. Classificação do Produto Transportado	2024-10-18 12:22:48.759563+01	\N	f	t
2	2	2. Meio de Transporte	2024-10-18 12:23:25.069061+01	\N	f	t
3	2	3. Distância e Destino	2024-10-18 12:23:40.195381+01	\N	f	t
5	2	5. Condições de Manuseio e Embalagem	2024-10-18 12:24:09.284098+01	\N	f	t
9	2	9. Coberturas	2024-10-18 12:30:49.252607+01	\N	f	t
\.


COPY public.option_coverage (
    id,
    option_id,
    coverage_id,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	4	2024-10-18 12:35:49.656688+01	\N	f
2	1	5	2024-10-18 12:35:53.788788+01	\N	f
3	1	6	2024-10-18 12:35:56.256266+01	\N	f
4	1	7	2024-10-18 12:35:58.863268+01	\N	f
5	2	8	2024-10-18 14:21:17.550006+01	\N	f
6	2	9	2024-10-18 14:21:20.492135+01	\N	f
7	2	10	2024-10-18 14:21:23.999235+01	\N	f
8	2	11	2024-10-18 14:21:28.096035+01	\N	f
9	2	12	2024-10-18 14:21:30.560405+01	\N	f
10	2	13	2024-10-18 14:21:32.70464+01	\N	f
11	2	14	2024-10-18 14:21:35.741469+01	\N	f
12	2	15	2024-10-18 14:21:37.905137+01	\N	f
13	3	16	2024-10-19 11:10:14.138067+01	\N	f
14	3	17	2024-10-19 11:10:16.653991+01	\N	f
15	3	18	2024-10-19 11:10:18.79774+01	\N	f
16	3	19	2024-10-19 11:10:20.98537+01	\N	f
17	3	21	2024-10-19 11:10:33.638737+01	\N	f
18	3	22	2024-10-19 11:10:38.112173+01	\N	f
19	3	23	2024-10-19 11:10:40.670149+01	\N	f
20	3	24	2024-10-19 11:10:43.05091+01	\N	f
21	4	26	2024-10-19 11:21:28.527548+01	\N	f
22	4	27	2024-10-19 11:21:32.117454+01	\N	f
24	5	29	2024-10-19 11:32:27.856547+01	\N	f
25	5	30	2024-10-19 11:32:30.771858+01	\N	f
26	6	28	2024-10-19 11:33:14.867957+01	\N	f
27	7	31	2024-10-19 11:35:32.855286+01	\N	f
28	8	32	2024-10-19 11:55:54.614324+01	\N	f
29	8	33	2024-10-19 11:55:59.138613+01	\N	f
30	8	34	2024-10-19 11:56:03.658081+01	\N	f
31	8	35	2024-10-19 11:56:07.016576+01	\N	f
32	8	36	2024-10-19 11:56:09.17207+01	\N	f
33	9	38	2024-10-19 13:33:57.855556+01	\N	f
34	9	39	2024-10-19 13:33:59.842949+01	\N	f
35	9	40	2024-10-19 13:34:02.400427+01	\N	f
\.


COPY public.policy_type (
    id,
    name,
    created_at,
    updated_at,
    deleted,
    icon
)
FROM stdin;

1	Temporária	2024-10-14 20:57:08.259449+01	\N	f	hourglass-split
2	Permanente	2024-10-14 20:57:23.246827+01	\N	f	calendar2-x
3	Anual	2024-10-14 20:57:49.161328+01	\N	f	calendar-check
4	Aberta	2024-10-14 20:57:55.355502+01	\N	f	door-open
5	Universal	2024-10-15 14:39:50.930905+01	\N	f	universal-access
6	Variável	2024-10-15 14:40:14.078458+01	\N	f	activity
7	Universal Variável	2024-10-15 14:40:20.016361+01	\N	f	arrow-repeat
8	Indexado	2024-10-15 14:40:25.316354+01	\N	f	hand-index
9	Despesas Finais	2024-10-15 14:40:30.426677+01	\N	f	align-end
10	Conjunto	2024-10-15 14:40:36.682483+01	\N	f	app-indicator
11	Ipotecário	2024-10-15 14:40:42.318055+01	\N	f	house-door
\.


COPY public.rate (
    id,
    company_id,
    value,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	0.07	2024-10-17 10:21:33.439245+01	\N	f
2	1	0.13	2024-10-17 10:21:42.312162+01	\N	f
3	1	0.28	2024-10-17 10:25:30.741658+01	\N	f
4	1	10	2024-10-17 17:30:46.667553+01	\N	f
5	1	25	2024-10-17 17:30:54.998566+01	\N	f
6	1	15	2024-10-17 17:31:02.302771+01	\N	f
7	1	30	2024-10-17 17:31:08.032734+01	\N	f
8	1	0.03	2024-10-17 17:47:51.352546+01	\N	f
9	1	0.06	2024-10-17 17:48:09.561946+01	\N	f
10	1	0.12	2024-10-17 17:48:24.260167+01	\N	f
11	1	0.18	2024-10-18 11:48:08.821751+01	\N	f
12	1	0.27	2024-10-18 11:48:12.783223+01	\N	f
13	1	0.46	2024-10-18 11:48:16.3998+01	\N	f
14	1	0.34	2024-10-18 11:48:21.302472+01	\N	f
15	1	0.16	2024-10-18 13:53:38.106863+01	\N	f
16	1	0.19	2024-10-18 13:53:45.45319+01	\N	f
17	1	0.22	2024-10-18 13:53:57.69097+01	\N	f
18	1	0.25	2024-10-18 13:54:02.844398+01	\N	f
19	1	0.02	2024-10-18 14:04:11.970227+01	\N	f
20	1	0.05	2024-10-18 14:04:15.533998+01	\N	f
21	1	0.08	2024-10-18 14:04:18.279215+01	\N	f
22	1	0.11	2024-10-19 11:24:52.12225+01	\N	f
23	1	0	2024-10-19 11:27:56.61898+01	\N	f
24	1	0.9	2024-10-19 11:29:23.942367+01	\N	f
25	1	-7	2024-10-19 11:42:12.847547+01	\N	f
26	1	-5	2024-10-19 11:42:17.413934+01	\N	f
27	1	-12	2024-10-19 11:42:21.122589+01	\N	f
28	1	-16	2024-10-19 11:42:26.326988+01	\N	f
\.


COPY public.route (
    id,
    insurance_id,
    name,
    created_at,
    updated_at,
    deleted
)
FROM stdin;

1	1	simulador/vida	2024-10-18 19:07:56.155583+01	\N	f
2	2	simulador/mt	2024-10-18 19:08:26.546063+01	\N	f
\.
