--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-12-13 16:47:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 298723)
-- Name: category; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying,
    description character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean,
    icon character varying
);


ALTER TABLE public.category OWNER TO simulator_user;

--
-- TOC entry 215 (class 1259 OID 298722)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO simulator_user;

--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 215
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 244 (class 1259 OID 314445)
-- Name: ciip; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.ciip (
    id integer NOT NULL,
    category_id integer,
    insurance_id integer,
    insurance_type_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.ciip OWNER TO simulator_user;

--
-- TOC entry 243 (class 1259 OID 314444)
-- Name: ciip_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.ciip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ciip_id_seq OWNER TO simulator_user;

--
-- TOC entry 4953 (class 0 OID 0)
-- Dependencies: 243
-- Name: ciip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.ciip_id_seq OWNED BY public.ciip.id;


--
-- TOC entry 246 (class 1259 OID 314467)
-- Name: ciip_pt; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.ciip_pt (
    id integer NOT NULL,
    ciip_id integer,
    policy_type_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.ciip_pt OWNER TO simulator_user;

--
-- TOC entry 245 (class 1259 OID 314466)
-- Name: ciip_pt_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.ciip_pt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ciip_pt_id_seq OWNER TO simulator_user;

--
-- TOC entry 4954 (class 0 OID 0)
-- Dependencies: 245
-- Name: ciip_pt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.ciip_pt_id_seq OWNED BY public.ciip_pt.id;


--
-- TOC entry 218 (class 1259 OID 298732)
-- Name: company; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.company (
    id integer NOT NULL,
    name character varying,
    email character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.company OWNER TO simulator_user;

--
-- TOC entry 217 (class 1259 OID 298731)
-- Name: company_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.company_id_seq OWNER TO simulator_user;

--
-- TOC entry 4955 (class 0 OID 0)
-- Dependencies: 217
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.company_id_seq OWNED BY public.company.id;


--
-- TOC entry 220 (class 1259 OID 298741)
-- Name: condition; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.condition (
    id integer NOT NULL,
    first_value character varying,
    second_value character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.condition OWNER TO simulator_user;

--
-- TOC entry 219 (class 1259 OID 298740)
-- Name: condition_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.condition_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.condition_id_seq OWNER TO simulator_user;

--
-- TOC entry 4956 (class 0 OID 0)
-- Dependencies: 219
-- Name: condition_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.condition_id_seq OWNED BY public.condition.id;


--
-- TOC entry 222 (class 1259 OID 298759)
-- Name: insurance; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.insurance (
    id integer NOT NULL,
    domain_id integer,
    name character varying,
    icon character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean,
    description character varying
);


ALTER TABLE public.insurance OWNER TO simulator_user;

--
-- TOC entry 221 (class 1259 OID 298758)
-- Name: insurance_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.insurance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.insurance_id_seq OWNER TO simulator_user;

--
-- TOC entry 4957 (class 0 OID 0)
-- Dependencies: 221
-- Name: insurance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.insurance_id_seq OWNED BY public.insurance.id;


--
-- TOC entry 238 (class 1259 OID 298985)
-- Name: insurance_type; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.insurance_type (
    id integer NOT NULL,
    name character varying,
    icon character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean,
    description character varying
);


ALTER TABLE public.insurance_type OWNER TO simulator_user;

--
-- TOC entry 237 (class 1259 OID 298984)
-- Name: insurance_type_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.insurance_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.insurance_type_id_seq OWNER TO simulator_user;

--
-- TOC entry 4958 (class 0 OID 0)
-- Dependencies: 237
-- Name: insurance_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.insurance_type_id_seq OWNED BY public.insurance_type.id;


--
-- TOC entry 226 (class 1259 OID 298777)
-- Name: o_type; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.o_type (
    id integer NOT NULL,
    value character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.o_type OWNER TO simulator_user;

--
-- TOC entry 225 (class 1259 OID 298776)
-- Name: o_type_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.o_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.o_type_id_seq OWNER TO simulator_user;

--
-- TOC entry 4959 (class 0 OID 0)
-- Dependencies: 225
-- Name: o_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.o_type_id_seq OWNED BY public.o_type.id;


--
-- TOC entry 236 (class 1259 OID 298916)
-- Name: ogo; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.ogo (
    id integer NOT NULL,
    option_group_id integer,
    option_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.ogo OWNER TO simulator_user;

--
-- TOC entry 235 (class 1259 OID 298915)
-- Name: ogo_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.ogo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ogo_id_seq OWNER TO simulator_user;

--
-- TOC entry 4960 (class 0 OID 0)
-- Dependencies: 235
-- Name: ogo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.ogo_id_seq OWNED BY public.ogo.id;


--
-- TOC entry 228 (class 1259 OID 298806)
-- Name: option; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.option (
    id integer NOT NULL,
    name character varying,
    description character varying,
    abbreviation character varying,
    required boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean,
    auto_select boolean DEFAULT false,
    selected boolean DEFAULT false
);


ALTER TABLE public.option OWNER TO simulator_user;

--
-- TOC entry 240 (class 1259 OID 306221)
-- Name: option_group; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.option_group (
    id integer NOT NULL,
    insurance_id integer,
    name character varying,
    required boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.option_group OWNER TO simulator_user;

--
-- TOC entry 239 (class 1259 OID 306220)
-- Name: option_group_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.option_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.option_group_id_seq OWNER TO simulator_user;

--
-- TOC entry 4961 (class 0 OID 0)
-- Dependencies: 239
-- Name: option_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.option_group_id_seq OWNED BY public.option_group.id;


--
-- TOC entry 227 (class 1259 OID 298805)
-- Name: option_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.option_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.option_id_seq OWNER TO simulator_user;

--
-- TOC entry 4962 (class 0 OID 0)
-- Dependencies: 227
-- Name: option_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.option_id_seq OWNED BY public.option.id;


--
-- TOC entry 234 (class 1259 OID 298904)
-- Name: option_option; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.option_option (
    id integer NOT NULL,
    option_id integer,
    other_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.option_option OWNER TO simulator_user;

--
-- TOC entry 233 (class 1259 OID 298903)
-- Name: option_option_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.option_option_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.option_option_id_seq OWNER TO simulator_user;

--
-- TOC entry 4963 (class 0 OID 0)
-- Dependencies: 233
-- Name: option_option_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.option_option_id_seq OWNED BY public.option_option.id;


--
-- TOC entry 242 (class 1259 OID 314396)
-- Name: orc; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.orc (
    id integer NOT NULL,
    ciip_pt_id integer,
    company_id integer,
    option_id integer,
    rate_id integer,
    condition_id integer,
    valid boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.orc OWNER TO simulator_user;

--
-- TOC entry 241 (class 1259 OID 314395)
-- Name: orc_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.orc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orc_id_seq OWNER TO simulator_user;

--
-- TOC entry 4964 (class 0 OID 0)
-- Dependencies: 241
-- Name: orc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.orc_id_seq OWNED BY public.orc.id;


--
-- TOC entry 224 (class 1259 OID 298768)
-- Name: policy_type; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.policy_type (
    id integer NOT NULL,
    name character varying,
    icon character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean,
    description character varying
);


ALTER TABLE public.policy_type OWNER TO simulator_user;

--
-- TOC entry 223 (class 1259 OID 298767)
-- Name: policy_type_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.policy_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.policy_type_id_seq OWNER TO simulator_user;

--
-- TOC entry 4965 (class 0 OID 0)
-- Dependencies: 223
-- Name: policy_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.policy_type_id_seq OWNED BY public.policy_type.id;


--
-- TOC entry 230 (class 1259 OID 298839)
-- Name: rate; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.rate (
    id integer NOT NULL,
    value double precision,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.rate OWNER TO simulator_user;

--
-- TOC entry 229 (class 1259 OID 298838)
-- Name: rate_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.rate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rate_id_seq OWNER TO simulator_user;

--
-- TOC entry 4966 (class 0 OID 0)
-- Dependencies: 229
-- Name: rate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.rate_id_seq OWNED BY public.rate.id;


--
-- TOC entry 232 (class 1259 OID 298851)
-- Name: route; Type: TABLE; Schema: public; Owner: simulator_user
--

CREATE TABLE public.route (
    id integer NOT NULL,
    insurance_id integer,
    name character varying,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    deleted boolean
);


ALTER TABLE public.route OWNER TO simulator_user;

--
-- TOC entry 231 (class 1259 OID 298850)
-- Name: route_id_seq; Type: SEQUENCE; Schema: public; Owner: simulator_user
--

CREATE SEQUENCE public.route_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.route_id_seq OWNER TO simulator_user;

--
-- TOC entry 4967 (class 0 OID 0)
-- Dependencies: 231
-- Name: route_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: simulator_user
--

ALTER SEQUENCE public.route_id_seq OWNED BY public.route.id;


--
-- TOC entry 4709 (class 2604 OID 298726)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 4725 (class 2604 OID 314448)
-- Name: ciip id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip ALTER COLUMN id SET DEFAULT nextval('public.ciip_id_seq'::regclass);


--
-- TOC entry 4726 (class 2604 OID 314470)
-- Name: ciip_pt id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip_pt ALTER COLUMN id SET DEFAULT nextval('public.ciip_pt_id_seq'::regclass);


--
-- TOC entry 4710 (class 2604 OID 298735)
-- Name: company id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.company ALTER COLUMN id SET DEFAULT nextval('public.company_id_seq'::regclass);


--
-- TOC entry 4711 (class 2604 OID 298744)
-- Name: condition id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.condition ALTER COLUMN id SET DEFAULT nextval('public.condition_id_seq'::regclass);


--
-- TOC entry 4712 (class 2604 OID 298762)
-- Name: insurance id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.insurance ALTER COLUMN id SET DEFAULT nextval('public.insurance_id_seq'::regclass);


--
-- TOC entry 4722 (class 2604 OID 298988)
-- Name: insurance_type id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.insurance_type ALTER COLUMN id SET DEFAULT nextval('public.insurance_type_id_seq'::regclass);


--
-- TOC entry 4714 (class 2604 OID 298780)
-- Name: o_type id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.o_type ALTER COLUMN id SET DEFAULT nextval('public.o_type_id_seq'::regclass);


--
-- TOC entry 4721 (class 2604 OID 298919)
-- Name: ogo id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ogo ALTER COLUMN id SET DEFAULT nextval('public.ogo_id_seq'::regclass);


--
-- TOC entry 4715 (class 2604 OID 298809)
-- Name: option id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option ALTER COLUMN id SET DEFAULT nextval('public.option_id_seq'::regclass);


--
-- TOC entry 4723 (class 2604 OID 306224)
-- Name: option_group id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_group ALTER COLUMN id SET DEFAULT nextval('public.option_group_id_seq'::regclass);


--
-- TOC entry 4720 (class 2604 OID 298907)
-- Name: option_option id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_option ALTER COLUMN id SET DEFAULT nextval('public.option_option_id_seq'::regclass);


--
-- TOC entry 4724 (class 2604 OID 314399)
-- Name: orc id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc ALTER COLUMN id SET DEFAULT nextval('public.orc_id_seq'::regclass);


--
-- TOC entry 4713 (class 2604 OID 298771)
-- Name: policy_type id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.policy_type ALTER COLUMN id SET DEFAULT nextval('public.policy_type_id_seq'::regclass);


--
-- TOC entry 4718 (class 2604 OID 298842)
-- Name: rate id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.rate ALTER COLUMN id SET DEFAULT nextval('public.rate_id_seq'::regclass);


--
-- TOC entry 4719 (class 2604 OID 298854)
-- Name: route id; Type: DEFAULT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.route ALTER COLUMN id SET DEFAULT nextval('public.route_id_seq'::regclass);


--
-- TOC entry 4916 (class 0 OID 298723)
-- Dependencies: 216
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.category (id, name, description, created_at, updated_at, deleted, icon) FROM stdin;
1	Particular	Projetado para empresas de todos os portes, oferecendo proteção para ativos empresariais, como equipamentos, instalações e funcionários. Garantir a segurança da sua empresa é essencial para o sucesso e continuidade do seu negócio.	2024-10-19 19:44:01.928893+01	\N	f	person
2	Empresarial	Ideal para indivíduos que buscam proteger seus bens pessoais, como veículos, imóveis, ou contratar um seguro de vida. Escolha essa opção para garantir sua segurança e tranquilidade no dia a dia.	2024-10-19 19:44:11.755113+01	\N	f	build
\.


--
-- TOC entry 4944 (class 0 OID 314445)
-- Dependencies: 244
-- Data for Name: ciip; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.ciip (id, category_id, insurance_id, insurance_type_id, created_at, updated_at, deleted) FROM stdin;
1	1	2	1	2024-10-22 17:05:55.313015+01	\N	f
2	1	1	2	2024-10-22 17:05:55.313015+01	\N	f
4	2	2	1	2024-10-22 17:05:55.313015+01	\N	f
3	1	1	5	2024-10-22 17:05:55.313015+01	\N	f
6	2	1	3	2024-10-22 17:05:55.313015+01	\N	f
7	2	1	6	2024-10-22 17:05:55.313015+01	\N	f
5	2	1	4	2024-10-22 17:05:55.313015+01	\N	t
\.


--
-- TOC entry 4946 (class 0 OID 314467)
-- Dependencies: 246
-- Data for Name: ciip_pt; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.ciip_pt (id, ciip_id, policy_type_id, created_at, updated_at, deleted) FROM stdin;
1	1	1	2024-10-22 17:08:11.166373+01	\N	f
2	2	1	2024-10-22 17:08:11.166373+01	\N	f
3	1	3	2024-10-22 17:08:11.166373+01	\N	f
4	1	4	2024-10-22 17:08:11.166373+01	\N	f
5	2	12	2024-10-22 17:08:11.166373+01	\N	f
6	2	13	2024-10-22 17:08:11.166373+01	\N	f
7	2	14	2024-10-22 17:08:11.166373+01	\N	f
8	2	15	2024-10-22 17:08:11.166373+01	\N	f
9	2	16	2024-10-22 17:08:11.166373+01	\N	f
10	2	17	2024-10-22 17:08:11.166373+01	\N	f
11	3	18	2024-10-22 17:08:11.166373+01	\N	f
12	3	19	2024-10-22 17:08:11.166373+01	\N	f
13	6	20	2024-10-22 17:08:11.166373+01	\N	f
14	6	21	2024-10-22 17:08:11.166373+01	\N	f
\.


--
-- TOC entry 4918 (class 0 OID 298732)
-- Dependencies: 218
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.company (id, name, email, created_at, updated_at, deleted) FROM stdin;
1	Global Seguros	global@seguros.ao	2024-10-19 19:15:55.581817+01	\N	f
2	Giant Seguros SA	giant@seguros.ao	2024-10-19 19:15:55.625509+01	\N	f
3	Fidelidade Seguros	fidelidade@seguros.ao	2024-10-19 19:15:55.63648+01	\N	f
\.


--
-- TOC entry 4920 (class 0 OID 298741)
-- Dependencies: 220
-- Data for Name: condition; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.condition (id, first_value, second_value, created_at, updated_at, deleted) FROM stdin;
1	0	21	2024-10-21 14:30:40.401802+01	\N	f
2	22	42	2024-10-21 14:31:11.806284+01	\N	f
3	43	63	2024-10-21 14:31:30.883465+01	\N	f
4	2	9,10	2024-10-21 16:03:31.632413+01	\N	f
5	2	9,12	2024-10-21 16:03:45.146453+01	\N	f
6	2	10,12	2024-10-21 16:04:08.132052+01	\N	f
7	2	9,10,12	2024-10-21 16:04:50.117877+01	\N	f
8	\N	17,24,256	2024-10-23 12:51:16.061071+01	\N	f
9	\N	17,23,256	2024-10-23 12:52:19.274747+01	\N	f
10	\N	17,20,24	2024-10-23 12:52:39.048838+01	\N	f
11	\N	17,20,23	2024-10-23 12:53:10.826432+01	\N	f
12	\N	21,24	2024-10-23 14:05:33.435582+01	\N	f
13	\N	21,23	2024-10-23 14:05:51.241914+01	\N	f
14	\N	21,22,24	2024-10-25 15:14:06.28155+01	\N	f
15	\N	21,22,23	2024-10-25 15:14:51.194507+01	\N	f
16	\N	21,24,258	2024-10-25 15:15:02.90396+01	\N	f
17	\N	21,23,258	2024-10-25 15:15:15.833102+01	\N	f
18	10000000	50000000	2024-10-25 15:15:15.833102+01	\N	f
19	50000001	100000000	2024-10-25 15:15:15.833102+01	\N	f
20	100000001	999999999999999	2024-10-25 15:15:15.833102+01	\N	f
21	1	9999999 	2024-10-25 15:15:15.833102+01	\N	f
\.


--
-- TOC entry 4922 (class 0 OID 298759)
-- Dependencies: 222
-- Data for Name: insurance; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.insurance (id, domain_id, name, icon, created_at, updated_at, deleted, description) FROM stdin;
2	\N	Mercadoria Transportada	seg-tras-p.png	2024-10-19 19:50:19.412388+01	\N	f	“Garantia contra perdas e danos durante o transporte de mercadorias.”
1	\N	Vida	Seguro-de-Vida.png	2024-10-19 19:50:08.500428+01	\N	f	“Proteção financeira para sua família em caso de imprevistos.”
\.


--
-- TOC entry 4938 (class 0 OID 298985)
-- Dependencies: 238
-- Data for Name: insurance_type; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.insurance_type (id, name, icon, created_at, updated_at, deleted, description) FROM stdin;
1	\N	seg-resp-civil.png	2024-10-19 20:01:36.3671+01	\N	f	Nenhuma informação adicional fornecida.
2	Individual	seg-resp-civil.png	2024-10-19 20:01:44.060396+01	\N	f	Seguro destinado a uma única pessoa, geralmente para proteger contra riscos pessoais, como saúde ou vida.
3	Coletivo	seg-resp-civil.png	2024-10-19 20:01:52.211673+01	\N	f	Seguro que cobre um grupo de pessoas, como funcionários de uma empresa ou membros de uma associação.
4	Grupo	seg-resp-civil.png	2024-10-19 20:01:56.493535+01	\N	f	Variante do seguro coletivo com foco em pequenas comunidades ou grupos específicos.
5	Conjunto	seg-resp-civil.png	2024-10-19 20:01:56.493535+01	\N	f	Variante do seguro coletivo com foco em pequenas comunidades ou grupos específicos.
6	Benefícios Empresariais	seg-resp-civil.png	2024-10-19 20:01:56.493535+01	\N	f	Variante do seguro coletivo com foco em pequenas comunidades ou grupos específicos.
\.


--
-- TOC entry 4926 (class 0 OID 298777)
-- Dependencies: 226
-- Data for Name: o_type; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.o_type (id, value, created_at, updated_at, deleted) FROM stdin;
1	Coverage	2024-10-19 20:38:39.227567+01	\N	f
2	Aggravation	2024-10-19 20:39:20.753018+01	\N	f
3	Countries	2024-10-21 13:02:10.175618+01	\N	f
4	Angola States	2024-10-21 13:05:43.184938+01	\N	f
\.


--
-- TOC entry 4936 (class 0 OID 298916)
-- Dependencies: 236
-- Data for Name: ogo; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.ogo (id, option_group_id, option_id, created_at, updated_at, deleted) FROM stdin;
1	1	4	2024-10-21 12:33:21.930056+01	\N	f
2	1	5	2024-10-21 12:33:26.552019+01	\N	f
211	11	43	2024-10-24 10:55:46.120335+01	\N	f
4	1	7	2024-10-21 12:33:30.816295+01	\N	f
5	2	9	2024-10-21 12:35:39.422343+01	\N	f
6	2	10	2024-10-21 12:35:41.854407+01	\N	f
7	2	11	2024-10-21 12:35:44.005076+01	\N	f
8	2	12	2024-10-21 12:35:46.188389+01	\N	f
212	11	44	2024-10-24 10:55:46.147601+01	\N	f
213	11	45	2024-10-24 10:55:46.164731+01	\N	f
15	3	23	2024-10-21 13:19:44.399079+01	\N	f
16	3	24	2024-10-21 13:19:47.194331+01	\N	f
18	1	8	2024-10-22 08:52:20.358289+01	\N	f
214	11	46	2024-10-24 10:55:46.180688+01	\N	f
215	11	47	2024-10-24 10:55:46.195648+01	\N	f
216	11	48	2024-10-24 10:55:46.227408+01	\N	f
217	11	49	2024-10-24 10:55:46.245806+01	\N	f
218	11	50	2024-10-24 10:55:46.263602+01	\N	f
219	11	51	2024-10-24 10:55:46.279536+01	\N	f
220	11	52	2024-10-24 10:55:46.295518+01	\N	f
221	11	53	2024-10-24 10:55:46.31145+01	\N	f
222	11	54	2024-10-24 10:55:46.327448+01	\N	f
223	11	55	2024-10-24 10:55:46.343406+01	\N	f
224	11	56	2024-10-24 10:55:46.359389+01	\N	f
225	11	57	2024-10-24 10:55:46.375865+01	\N	f
226	11	58	2024-10-24 10:55:46.391789+01	\N	f
227	11	59	2024-10-24 10:55:46.40834+01	\N	f
228	11	60	2024-10-24 10:55:46.426541+01	\N	f
229	11	61	2024-10-24 10:55:46.442882+01	\N	f
230	11	62	2024-10-24 10:55:46.460507+01	\N	f
231	11	63	2024-10-24 10:55:46.516217+01	\N	f
232	11	64	2024-10-24 10:55:46.532174+01	\N	f
233	11	65	2024-10-24 10:55:46.547529+01	\N	f
234	11	66	2024-10-24 10:55:46.563486+01	\N	f
235	11	67	2024-10-24 10:55:46.578006+01	\N	f
236	11	68	2024-10-24 10:55:46.593076+01	\N	f
237	11	69	2024-10-24 10:55:46.608944+01	\N	f
238	11	70	2024-10-24 10:55:46.62407+01	\N	f
239	11	71	2024-10-24 10:55:46.637671+01	\N	f
240	11	72	2024-10-24 10:55:46.653686+01	\N	f
241	11	73	2024-10-24 10:55:46.668646+01	\N	f
242	11	74	2024-10-24 10:55:46.684603+01	\N	f
243	11	75	2024-10-24 10:55:46.70455+01	\N	f
244	11	76	2024-10-24 10:55:46.723901+01	\N	f
245	11	77	2024-10-24 10:55:46.740855+01	\N	f
246	11	78	2024-10-24 10:55:46.759804+01	\N	f
247	11	79	2024-10-24 10:55:46.776759+01	\N	f
248	11	80	2024-10-24 10:55:46.803687+01	\N	f
249	11	81	2024-10-24 10:55:46.822474+01	\N	f
250	11	82	2024-10-24 10:55:46.839693+01	\N	f
251	11	83	2024-10-24 10:55:46.858643+01	\N	f
252	11	84	2024-10-24 10:55:46.877591+01	\N	f
253	11	85	2024-10-24 10:55:46.89494+01	\N	f
254	11	86	2024-10-24 10:55:46.912891+01	\N	f
255	11	87	2024-10-24 10:55:46.930198+01	\N	f
256	11	88	2024-10-24 10:55:46.946155+01	\N	f
257	11	89	2024-10-24 10:55:46.964107+01	\N	f
258	11	90	2024-10-24 10:55:46.98206+01	\N	f
259	11	91	2024-10-24 10:55:46.998017+01	\N	f
260	11	92	2024-10-24 10:55:47.014508+01	\N	f
261	11	93	2024-10-24 10:55:47.030885+01	\N	f
262	11	94	2024-10-24 10:55:47.046201+01	\N	f
263	11	95	2024-10-24 10:55:47.061371+01	\N	f
264	11	96	2024-10-24 10:55:47.076331+01	\N	f
265	11	97	2024-10-24 10:55:47.092288+01	\N	f
266	11	98	2024-10-24 10:55:47.107249+01	\N	f
267	11	99	2024-10-24 10:55:47.122997+01	\N	f
268	11	100	2024-10-24 10:55:47.156906+01	\N	f
269	11	101	2024-10-24 10:55:47.174308+01	\N	f
270	11	102	2024-10-24 10:55:47.192516+01	\N	f
271	11	103	2024-10-24 10:55:47.211465+01	\N	f
272	11	104	2024-10-24 10:55:47.22842+01	\N	f
273	11	105	2024-10-24 10:55:47.246372+01	\N	f
274	11	106	2024-10-24 10:55:47.262329+01	\N	f
275	11	107	2024-10-24 10:55:47.278287+01	\N	f
276	11	108	2024-10-24 10:55:47.294001+01	\N	f
277	11	109	2024-10-24 10:55:47.309957+01	\N	f
278	11	110	2024-10-24 10:55:47.325639+01	\N	f
279	11	111	2024-10-24 10:55:47.340599+01	\N	f
280	11	112	2024-10-24 10:55:47.354782+01	\N	f
281	11	113	2024-10-24 10:55:47.369742+01	\N	f
282	11	114	2024-10-24 10:55:47.384702+01	\N	f
283	11	115	2024-10-24 10:55:47.399663+01	\N	f
284	11	116	2024-10-24 10:55:47.414623+01	\N	f
285	11	117	2024-10-24 10:55:47.430992+01	\N	f
286	11	118	2024-10-24 10:55:47.445954+01	\N	f
287	11	119	2024-10-24 10:55:47.460742+01	\N	f
288	11	120	2024-10-24 10:55:47.476702+01	\N	f
289	11	121	2024-10-24 10:55:47.490151+01	\N	f
290	11	122	2024-10-24 10:55:47.504114+01	\N	f
291	11	123	2024-10-24 10:55:47.519074+01	\N	f
292	11	124	2024-10-24 10:55:47.534103+01	\N	f
293	11	125	2024-10-24 10:55:47.549063+01	\N	f
294	11	126	2024-10-24 10:55:47.563413+01	\N	f
295	11	127	2024-10-24 10:55:47.577858+01	\N	f
296	11	128	2024-10-24 10:55:47.59392+01	\N	f
297	11	129	2024-10-24 10:55:47.608891+01	\N	f
298	11	130	2024-10-24 10:55:47.623787+01	\N	f
299	11	131	2024-10-24 10:55:47.637373+01	\N	f
300	11	132	2024-10-24 10:55:47.652598+01	\N	f
301	11	133	2024-10-24 10:55:47.667788+01	\N	f
302	11	134	2024-10-24 10:55:47.683746+01	\N	f
303	11	135	2024-10-24 10:55:47.698809+01	\N	f
304	11	136	2024-10-24 10:55:47.714502+01	\N	f
305	11	137	2024-10-24 10:55:47.729655+01	\N	f
306	11	138	2024-10-24 10:55:47.745081+01	\N	f
307	11	139	2024-10-24 10:55:47.760041+01	\N	f
308	11	140	2024-10-24 10:55:47.775998+01	\N	f
309	11	141	2024-10-24 10:55:47.791158+01	\N	f
310	11	142	2024-10-24 10:55:47.805312+01	\N	f
311	11	143	2024-10-24 10:55:47.820504+01	\N	f
312	11	144	2024-10-24 10:55:47.8356+01	\N	f
313	11	145	2024-10-24 10:55:47.851067+01	\N	f
314	11	146	2024-10-24 10:55:47.868219+01	\N	f
315	11	147	2024-10-24 10:55:47.884201+01	\N	f
316	11	148	2024-10-24 10:55:47.899137+01	\N	f
317	11	149	2024-10-24 10:55:47.916217+01	\N	f
318	11	150	2024-10-24 10:55:47.961664+01	\N	f
319	11	151	2024-10-24 10:55:47.977622+01	\N	f
320	11	152	2024-10-24 10:55:47.992517+01	\N	f
321	11	153	2024-10-24 10:55:48.006481+01	\N	f
322	11	154	2024-10-24 10:55:48.020675+01	\N	f
323	11	155	2024-10-24 10:55:48.034707+01	\N	f
324	11	156	2024-10-24 10:55:48.051108+01	\N	f
325	11	157	2024-10-24 10:55:48.066069+01	\N	f
326	11	158	2024-10-24 10:55:48.082026+01	\N	f
327	11	159	2024-10-24 10:55:48.096986+01	\N	f
328	11	160	2024-10-24 10:55:48.110972+01	\N	f
329	11	161	2024-10-24 10:55:48.12693+01	\N	f
330	11	162	2024-10-24 10:55:48.141446+01	\N	f
331	11	163	2024-10-24 10:55:48.155242+01	\N	f
332	11	164	2024-10-24 10:55:48.170201+01	\N	f
333	11	165	2024-10-24 10:55:48.18523+01	\N	f
334	11	166	2024-10-24 10:55:48.201187+01	\N	f
335	11	167	2024-10-24 10:55:48.220195+01	\N	f
336	11	168	2024-10-24 10:55:48.23715+01	\N	f
337	11	169	2024-10-24 10:55:48.254504+01	\N	f
338	11	170	2024-10-24 10:55:48.270518+01	\N	f
339	11	171	2024-10-24 10:55:48.287542+01	\N	f
340	11	172	2024-10-24 10:55:48.306556+01	\N	f
341	11	173	2024-10-24 10:55:48.320518+01	\N	f
342	11	174	2024-10-24 10:55:48.335479+01	\N	f
343	11	175	2024-10-24 10:55:48.365577+01	\N	f
344	11	176	2024-10-24 10:55:48.389512+01	\N	f
345	11	177	2024-10-24 10:55:48.412516+01	\N	f
346	11	178	2024-10-24 10:55:48.43346+01	\N	f
347	11	179	2024-10-24 10:55:48.454404+01	\N	f
348	11	180	2024-10-24 10:55:48.475348+01	\N	f
349	11	181	2024-10-24 10:55:48.496199+01	\N	f
350	11	182	2024-10-24 10:55:48.51707+01	\N	f
351	11	183	2024-10-24 10:55:48.534025+01	\N	f
352	11	184	2024-10-24 10:55:48.549983+01	\N	f
353	11	185	2024-10-24 10:55:48.565357+01	\N	f
354	11	186	2024-10-24 10:55:48.581922+01	\N	f
355	11	187	2024-10-24 10:55:48.598876+01	\N	f
356	11	188	2024-10-24 10:55:48.614898+01	\N	f
357	11	189	2024-10-24 10:55:48.630748+01	\N	f
358	11	190	2024-10-24 10:55:48.645865+01	\N	f
359	11	191	2024-10-24 10:55:48.660516+01	\N	f
360	11	192	2024-10-24 10:55:48.675497+01	\N	f
361	11	193	2024-10-24 10:55:48.690373+01	\N	f
362	11	194	2024-10-24 10:55:48.705333+01	\N	f
363	11	195	2024-10-24 10:55:48.72129+01	\N	f
364	11	196	2024-10-24 10:55:48.73625+01	\N	f
365	11	197	2024-10-24 10:55:48.75121+01	\N	f
366	11	198	2024-10-24 10:55:48.76731+01	\N	f
367	11	199	2024-10-24 10:55:48.782369+01	\N	f
368	11	200	2024-10-24 10:55:48.79733+01	\N	f
369	11	201	2024-10-24 10:55:48.812035+01	\N	f
370	11	202	2024-10-24 10:55:48.827185+01	\N	f
371	11	203	2024-10-24 10:55:48.842379+01	\N	f
372	11	204	2024-10-24 10:55:48.857387+01	\N	f
373	11	205	2024-10-24 10:55:48.872348+01	\N	f
374	11	206	2024-10-24 10:55:48.887467+01	\N	f
375	11	207	2024-10-24 10:55:48.902427+01	\N	f
376	11	208	2024-10-24 10:55:48.919405+01	\N	f
377	11	209	2024-10-24 10:55:48.934414+01	\N	f
378	11	210	2024-10-24 10:55:48.950678+01	\N	f
379	11	211	2024-10-24 10:55:48.965534+01	\N	f
380	11	212	2024-10-24 10:55:48.980044+01	\N	f
381	11	213	2024-10-24 10:55:48.995005+01	\N	f
382	11	214	2024-10-24 10:55:49.010803+01	\N	f
383	11	215	2024-10-24 10:55:49.024457+01	\N	f
384	11	216	2024-10-24 10:55:49.039416+01	\N	f
385	11	217	2024-10-24 10:55:49.054377+01	\N	f
386	11	218	2024-10-24 10:55:49.068705+01	\N	f
387	11	219	2024-10-24 10:55:49.085658+01	\N	f
388	11	220	2024-10-24 10:55:49.099766+01	\N	f
389	11	221	2024-10-24 10:55:49.114725+01	\N	f
390	11	222	2024-10-24 10:55:49.128688+01	\N	f
391	11	223	2024-10-24 10:55:49.142652+01	\N	f
392	11	224	2024-10-24 10:55:49.168939+01	\N	f
393	11	225	2024-10-24 10:55:49.185507+01	\N	f
394	11	226	2024-10-24 10:55:49.200893+01	\N	f
395	11	227	2024-10-24 10:55:49.216852+01	\N	f
396	11	228	2024-10-24 10:55:49.232011+01	\N	f
397	11	229	2024-10-24 10:55:49.249939+01	\N	f
398	11	230	2024-10-24 10:55:49.278861+01	\N	f
399	11	231	2024-10-24 10:55:49.297998+01	\N	f
400	11	232	2024-10-24 10:55:49.314561+01	\N	f
401	11	233	2024-10-24 10:55:49.346475+01	\N	f
402	11	234	2024-10-24 10:55:49.362599+01	\N	f
403	12	235	2024-10-24 10:56:33.386568+01	\N	f
404	12	236	2024-10-24 10:56:33.432393+01	\N	f
405	12	237	2024-10-24 10:56:33.449188+01	\N	f
406	12	238	2024-10-24 10:56:33.465185+01	\N	f
407	12	239	2024-10-24 10:56:33.481171+01	\N	f
408	12	240	2024-10-24 10:56:33.497317+01	\N	f
409	12	241	2024-10-24 10:56:33.514288+01	\N	f
410	12	242	2024-10-24 10:56:33.530495+01	\N	f
411	12	243	2024-10-24 10:56:33.546496+01	\N	f
412	12	244	2024-10-24 10:56:33.563581+01	\N	f
413	12	245	2024-10-24 10:56:33.581001+01	\N	f
414	12	246	2024-10-24 10:56:33.597939+01	\N	f
415	12	247	2024-10-24 10:56:33.615085+01	\N	f
416	12	248	2024-10-24 10:56:33.632147+01	\N	f
417	12	249	2024-10-24 10:56:33.647107+01	\N	f
418	12	250	2024-10-24 10:56:33.664065+01	\N	f
419	12	251	2024-10-24 10:56:33.68199+01	\N	f
420	12	252	2024-10-24 10:56:33.697982+01	\N	f
421	12	253	2024-10-24 10:56:33.713627+01	\N	f
422	12	254	2024-10-24 10:56:33.729669+01	\N	f
423	12	255	2024-10-24 10:56:33.745784+01	\N	f
424	13	1	2024-10-24 13:56:22.096883+01	\N	f
425	13	2	2024-10-24 13:56:22.145783+01	\N	f
426	13	3	2024-10-24 13:56:22.187228+01	\N	f
434	14	39	2024-10-24 13:56:41.930184+01	\N	f
435	14	40	2024-10-24 13:56:41.977347+01	\N	f
436	14	41	2024-10-24 13:56:41.992306+01	\N	f
437	14	42	2024-10-24 13:56:42.00929+01	\N	f
438	15	44	2024-10-24 15:46:53.314326+01	\N	f
439	15	48	2024-10-24 15:46:53.368064+01	\N	f
440	15	51	2024-10-24 15:46:53.390288+01	\N	f
441	15	63	2024-10-24 15:46:53.410552+01	\N	f
442	15	67	2024-10-24 15:46:53.440733+01	\N	f
443	15	71	2024-10-24 15:46:53.460863+01	\N	f
444	15	72	2024-10-24 15:46:53.482103+01	\N	f
445	15	74	2024-10-24 15:46:53.506397+01	\N	f
446	15	75	2024-10-24 15:46:53.530404+01	\N	f
447	15	80	2024-10-24 15:46:53.566725+01	\N	f
448	15	85	2024-10-24 15:46:53.606598+01	\N	f
449	15	86	2024-10-24 15:46:53.627542+01	\N	f
450	15	89	2024-10-24 15:46:53.646556+01	\N	f
451	15	95	2024-10-24 15:46:53.6638+01	\N	f
452	15	99	2024-10-24 15:46:53.680754+01	\N	f
453	15	106	2024-10-24 15:46:53.698359+01	\N	f
454	15	111	2024-10-24 15:46:53.715978+01	\N	f
455	15	112	2024-10-24 15:46:53.734325+01	\N	f
456	15	113	2024-10-24 15:46:53.751996+01	\N	f
457	15	119	2024-10-24 15:46:53.769644+01	\N	f
458	15	120	2024-10-24 15:46:53.788602+01	\N	f
459	15	121	2024-10-24 15:46:53.805556+01	\N	f
460	15	143	2024-10-24 15:46:53.823508+01	\N	f
461	15	146	2024-10-24 15:46:53.853793+01	\N	f
462	15	147	2024-10-24 15:46:53.871864+01	\N	f
463	15	151	2024-10-24 15:46:53.890154+01	\N	f
464	15	153	2024-10-24 15:46:53.909105+01	\N	f
465	15	155	2024-10-24 15:46:53.926422+01	\N	f
466	15	157	2024-10-24 15:46:53.944374+01	\N	f
467	15	158	2024-10-24 15:46:53.962141+01	\N	f
468	15	159	2024-10-24 15:46:53.979489+01	\N	f
470	15	168	2024-10-24 15:46:54.050171+01	\N	f
472	15	173	2024-10-24 15:46:54.085079+01	\N	f
474	15	189	2024-10-24 15:46:54.129981+01	\N	f
476	15	202	2024-10-24 15:46:54.173307+01	\N	f
478	15	207	2024-10-24 15:46:54.232209+01	\N	f
480	15	210	2024-10-24 15:46:54.276056+01	\N	f
482	15	218	2024-10-24 15:46:54.331903+01	\N	f
484	15	226	2024-10-24 15:46:54.369802+01	\N	f
486	15	234	2024-10-24 15:46:54.405852+01	\N	f
488	16	48	2024-10-24 15:46:54.446419+01	\N	f
490	16	105	2024-10-24 15:46:54.484308+01	\N	f
492	16	153	2024-10-24 15:46:54.523992+01	\N	f
494	16	168	2024-10-24 15:46:54.605701+01	\N	f
495	16	199	2024-10-24 15:46:54.629291+01	\N	f
497	16	233	2024-10-24 15:46:54.666664+01	\N	f
469	15	163	2024-10-24 15:46:54.031222+01	\N	f
471	15	172	2024-10-24 15:46:54.067127+01	\N	f
473	15	186	2024-10-24 15:46:54.105724+01	\N	f
475	15	193	2024-10-24 15:46:54.151922+01	\N	f
477	15	203	2024-10-24 15:46:54.196246+01	\N	f
479	15	209	2024-10-24 15:46:54.253153+01	\N	f
481	15	216	2024-10-24 15:46:54.313843+01	\N	f
483	15	221	2024-10-24 15:46:54.350853+01	\N	f
485	15	233	2024-10-24 15:46:54.386902+01	\N	f
487	16	44	2024-10-24 15:46:54.425466+01	\N	f
489	16	67	2024-10-24 15:46:54.464361+01	\N	f
491	16	143	2024-10-24 15:46:54.504254+01	\N	f
493	16	163	2024-10-24 15:46:54.586002+01	\N	f
496	16	216	2024-10-24 15:46:54.649199+01	\N	f
498	16	234	2024-10-24 15:46:54.684616+01	\N	f
499	16	257	2024-10-24 16:00:10.456573+01	\N	f
501	4	25	2024-10-25 16:10:01.9239+01	\N	f
502	4	26	2024-10-25 16:10:04.249159+01	\N	f
503	5	28	2024-10-25 16:37:03.64257+01	\N	f
504	5	29	2024-10-25 16:37:05.651267+01	\N	f
507	8	31	2024-10-25 16:44:13.296006+01	\N	f
508	8	32	2024-10-25 16:44:15.006112+01	\N	f
509	8	33	2024-10-25 16:44:16.595738+01	\N	f
510	8	34	2024-10-25 16:44:18.129033+01	\N	f
511	8	35	2024-10-25 16:45:00.318173+01	\N	f
512	10	36	2024-10-25 16:45:53.765979+01	\N	f
513	10	37	2024-10-25 16:45:55.394239+01	\N	f
514	10	38	2024-10-25 16:45:57.756434+01	\N	f
515	9	259	2024-10-25 16:54:05.182242+01	\N	f
516	9	260	2024-10-25 16:54:22.399101+01	\N	f
517	9	261	2024-10-25 16:54:44.769548+01	\N	f
518	9	262	2024-10-25 16:54:56.861297+01	\N	f
519	9	263	2024-10-25 16:54:59.135943+01	\N	f
522	17	17	2024-10-25 16:45:53.765979+01	\N	f
523	17	20	2024-10-25 16:45:53.765979+01	\N	f
524	17	21	2024-10-25 16:45:53.765979+01	\N	f
525	17	22	2024-10-25 16:45:53.765979+01	\N	f
526	17	23	2024-10-25 16:45:53.765979+01	\N	f
527	17	24	2024-10-25 16:45:53.765979+01	\N	f
528	17	256	2024-10-25 16:45:53.765979+01	\N	f
529	17	258	2024-10-25 16:45:53.765979+01	\N	f
530	18	264	2024-10-25 16:45:53.765979+01	\N	f
531	18	265	2024-10-25 16:45:53.765979+01	\N	f
532	19	266	2024-10-24 10:55:46.164731+01	\N	f
533	19	267	2024-10-24 10:55:46.164731+01	\N	f
534	19	268	2024-10-24 10:55:46.164731+01	\N	f
535	20	269	2024-10-24 10:55:47.652598+01	\N	f
521	4	30	2024-10-25 16:45:53.765979+01	\N	f
520	4	27	2024-10-25 16:45:53.765979+01	\N	f
\.


--
-- TOC entry 4928 (class 0 OID 298806)
-- Dependencies: 228
-- Data for Name: option; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.option (id, name, description, abbreviation, required, created_at, updated_at, deleted, auto_select, selected) FROM stdin;
5	Produtos perecíveis	\N	\N	f	2024-10-19 20:51:38.593295+01	\N	f	f	f
7	Produtos perigosos	\N	\N	f	2024-10-19 21:11:03.001856+01	\N	f	f	f
41	Diabetes Tipo 2 Controlada	Diabetes controlada com dieta e medicação	\N	f	2024-10-19 21:16:28.632186+01	\N	f	f	f
4	Mercadorias gerais	\N	\N	f	2024-10-19 20:50:38.006118+01	\N	f	f	t
59	Barbados	\N	\N	f	2024-10-21 13:03:31.848009+01	\N	f	f	f
28	Embalados profissionalmente	\N	\N	f	2024-10-19 21:11:03.25987+01	\N	f	f	t
9	Terrestre	Rodoviário ou Ferroviário	\N	f	2024-10-19 21:11:03.023796+01	\N	f	f	f
10	Marítimo	\N	\N	f	2024-10-19 21:11:03.03377+01	\N	f	f	f
11	Fluvial	\N	\N	f	2024-10-19 21:11:03.048246+01	\N	f	f	f
12	Aéreo	Internacional ou Interprovincial	\N	f	2024-10-19 21:11:03.06121+01	\N	f	f	f
24	Sem Transbordo	\N	\N	f	2024-10-19 21:11:03.210003+01	\N	f	f	t
23	Com Transbordo	\N	\N	f	2024-10-19 21:11:03.198036+01	\N	f	f	f
39	Hipertensão Controlada	Pressão arterial elevada controlada com medicação	\N	f	2024-10-19 21:15:57.529977+01	\N	f	f	f
1	Morte por qualquer causa	\N	M	t	2024-10-19 20:45:48.592748+01	\N	f	t	t
33	Valor total das mercadorias transportadas acima de 100 M	\N	\N	f	2024-10-19 21:11:03.33467+01	\N	f	t	f
32	Valor total das mercadorias transportadas acima de 50 M até 100 M	\N	\N	f	2024-10-19 21:11:03.324696+01	\N	f	t	f
31	Valor total das mercadorias transportadas até 50 M	\N	\N	f	2024-10-19 21:11:03.295774+01	\N	f	t	f
34	Frequência dos transportes	\N	\N	f	2024-10-19 21:11:03.371571+01	\N	f	t	f
8	Produtos de alto valor	Joias, Eletrónicos	\N	f	2024-10-19 21:11:03.011828+01	\N	f	f	f
37	Cláusula B	\N	\N	f	2024-10-19 21:11:03.409469+01	\N	f	f	f
38	Cláusula C	\N	\N	f	2024-10-19 21:11:03.420442+01	\N	f	f	f
43	Afeganistão	\N	\N	f	2024-10-21 13:03:22.882934+01	\N	f	f	f
44	África do Sul	\N	\N	f	2024-10-21 13:03:31.552661+01	\N	f	f	f
45	Albânia	\N	\N	f	2024-10-21 13:03:31.573605+01	\N	f	f	f
46	Alemanha	\N	\N	f	2024-10-21 13:03:31.592553+01	\N	f	f	f
47	Andorra	\N	\N	f	2024-10-21 13:03:31.608485+01	\N	f	f	f
48	Angola	\N	\N	f	2024-10-21 13:03:31.625439+01	\N	f	f	f
49	Antígua e Barbuda	\N	\N	f	2024-10-21 13:03:31.641396+01	\N	f	f	f
50	Arábia Saudita	\N	\N	f	2024-10-21 13:03:31.66137+01	\N	f	f	f
51	Argélia	\N	\N	f	2024-10-21 13:03:31.676385+01	\N	f	f	f
52	Argentina	\N	\N	f	2024-10-21 13:03:31.693339+01	\N	f	f	f
53	Armênia	\N	\N	f	2024-10-21 13:03:31.757169+01	\N	f	f	f
54	Austrália	\N	\N	f	2024-10-21 13:03:31.774123+01	\N	f	f	f
55	Áustria	\N	\N	f	2024-10-21 13:03:31.792667+01	\N	f	f	f
56	Azerbaijão	\N	\N	f	2024-10-21 13:03:31.806765+01	\N	f	f	f
57	Bahamas	\N	\N	f	2024-10-21 13:03:31.820468+01	\N	f	f	f
58	Bangladesh	\N	\N	f	2024-10-21 13:03:31.836041+01	\N	f	f	f
60	Barém	\N	\N	f	2024-10-21 13:03:31.86167+01	\N	f	f	f
61	Bélgica	\N	\N	f	2024-10-21 13:03:31.876219+01	\N	f	f	f
62	Belize	\N	\N	f	2024-10-21 13:03:31.91684+01	\N	f	f	f
63	Benim	\N	\N	f	2024-10-21 13:03:31.93878+01	\N	f	f	f
64	Bielorrússia	\N	\N	f	2024-10-21 13:03:31.95374+01	\N	f	f	f
65	Bolívia	\N	\N	f	2024-10-21 13:03:31.965729+01	\N	f	f	f
66	Bósnia e Herzegovina	\N	\N	f	2024-10-21 13:03:31.977697+01	\N	f	f	f
67	Botsuana	\N	\N	f	2024-10-21 13:03:31.993002+01	\N	f	f	f
68	Brasil	\N	\N	f	2024-10-21 13:03:32.006812+01	\N	f	f	f
69	Brunei	\N	\N	f	2024-10-21 13:03:32.019778+01	\N	f	f	f
70	Bulgária	\N	\N	f	2024-10-21 13:03:32.035756+01	\N	f	f	f
71	Burquina Faso	\N	\N	f	2024-10-21 13:03:32.046573+01	\N	f	f	f
72	Burundi	\N	\N	f	2024-10-21 13:03:32.059538+01	\N	f	f	f
73	Butão	\N	\N	f	2024-10-21 13:03:32.072504+01	\N	f	f	f
74	Cabo Verde	\N	\N	f	2024-10-21 13:03:32.085226+01	\N	f	f	f
75	Camarões	\N	\N	f	2024-10-21 13:03:32.097463+01	\N	f	f	f
76	Camboja	\N	\N	f	2024-10-21 13:03:32.109432+01	\N	f	f	f
77	Canadá	\N	\N	f	2024-10-21 13:03:32.150406+01	\N	f	f	f
78	Catar	\N	\N	f	2024-10-21 13:03:32.175339+01	\N	f	f	f
79	Cazaquistão	\N	\N	f	2024-10-21 13:03:32.191296+01	\N	f	f	f
80	Chade	\N	\N	f	2024-10-21 13:03:32.206255+01	\N	f	f	f
81	Chile	\N	\N	f	2024-10-21 13:03:32.219223+01	\N	f	f	f
82	China	\N	\N	f	2024-10-21 13:03:32.259971+01	\N	f	f	f
83	Chipre	\N	\N	f	2024-10-21 13:03:32.281911+01	\N	f	f	f
84	Colômbia	\N	\N	f	2024-10-21 13:03:32.296871+01	\N	f	f	f
85	Comores	\N	\N	f	2024-10-21 13:03:32.310834+01	\N	f	f	f
86	Congo (Brazzaville)	\N	\N	f	2024-10-21 13:03:32.346617+01	\N	f	f	f
87	Coreia do Norte	\N	\N	f	2024-10-21 13:03:32.364568+01	\N	f	f	f
88	Coreia do Sul	\N	\N	f	2024-10-21 13:03:32.379528+01	\N	f	f	f
89	Costa do Marfim	\N	\N	f	2024-10-21 13:03:32.394488+01	\N	f	f	f
90	Costa Rica	\N	\N	f	2024-10-21 13:03:32.409072+01	\N	f	f	f
91	Croácia	\N	\N	f	2024-10-21 13:03:32.424339+01	\N	f	f	f
92	Cuba	\N	\N	f	2024-10-21 13:03:32.4383+01	\N	f	f	f
93	Dinamarca	\N	\N	f	2024-10-21 13:03:32.452265+01	\N	f	f	f
94	Dominica	\N	\N	f	2024-10-21 13:03:32.468155+01	\N	f	f	f
95	Egito	\N	\N	f	2024-10-21 13:03:32.483115+01	\N	f	f	f
96	El Salvador	\N	\N	f	2024-10-21 13:03:32.521014+01	\N	f	f	f
97	Emirados Árabes Unidos	\N	\N	f	2024-10-21 13:03:32.534976+01	\N	f	f	f
98	Equador	\N	\N	f	2024-10-21 13:03:32.546295+01	\N	f	f	f
99	Eritreia	\N	\N	f	2024-10-21 13:03:32.560257+01	\N	f	f	f
100	Eslováquia	\N	\N	f	2024-10-21 13:03:32.576214+01	\N	f	f	f
101	Eslovênia	\N	\N	f	2024-10-21 13:03:32.58918+01	\N	f	f	f
102	Espanha	\N	\N	f	2024-10-21 13:03:32.602146+01	\N	f	f	f
17	Nacional	\N	\N	f	2024-10-19 21:11:03.125375+01	\N	f	t	f
35	Sem histórico de sinistros	\N	\N	f	2024-10-19 21:11:03.383539+01	\N	f	f	f
36	Cláusula A	\N	\N	f	2024-10-19 21:11:03.395507+01	\N	f	f	t
29	Sem proteção ou embalagem inadequada	\N	\N	f	2024-10-19 21:11:03.275827+01	\N	f	f	f
40	Hipertensão Não Controlada	Pressão arterial elevada sem controle adequado	\N	f	2024-10-19 21:16:07.613093+01	\N	f	f	t
42	Diabetes Tipo 2 Não Controlada	Diabetes sem controle adequado	\N	f	2024-10-19 21:16:37.153535+01	\N	f	f	t
2	Invalidez Total e Permanente	\N	ITP	f	2024-10-19 20:50:10.147396+01	\N	f	f	t
3	Doenças Críticas	\N	DC	f	2024-10-19 20:50:15.540007+01	\N	f	f	t
25	Cobertura para Avaria/Perda Total	\N	\N	f	2024-10-19 21:11:03.224963+01	\N	f	f	t
26	Roubo/Pirataria (marítimo)	\N	\N	f	2024-10-19 21:11:03.235934+01	\N	f	f	t
27	Cobertura para eventos climáticos severos	Inundações ou Tempestades	\N	f	2024-10-19 21:11:03.247909+01	\N	f	f	t
30	Riscos Geopolíticos (Áreas de conflito)	\N	\N	f	2024-10-19 21:11:03.285801+01	\N	f	f	t
103	Estados Unidos	\N	\N	f	2024-10-21 13:03:32.613607+01	\N	f	f	f
104	Estônia	\N	\N	f	2024-10-21 13:03:32.62757+01	\N	f	f	f
105	Eswatini	\N	\N	f	2024-10-21 13:03:32.643528+01	\N	f	f	f
106	Etiópia	\N	\N	f	2024-10-21 13:03:32.656493+01	\N	f	f	f
107	Fiji	\N	\N	f	2024-10-21 13:03:32.671453+01	\N	f	f	f
108	Filipinas	\N	\N	f	2024-10-21 13:03:32.684418+01	\N	f	f	f
109	Finlândia	\N	\N	f	2024-10-21 13:03:32.696342+01	\N	f	f	f
110	França	\N	\N	f	2024-10-21 13:03:32.710305+01	\N	f	f	f
111	Gabão	\N	\N	f	2024-10-21 13:03:32.724006+01	\N	f	f	f
112	Gâmbia	\N	\N	f	2024-10-21 13:03:32.736971+01	\N	f	f	f
113	Gana	\N	\N	f	2024-10-21 13:03:32.751734+01	\N	f	f	f
114	Geórgia	\N	\N	f	2024-10-21 13:03:32.762705+01	\N	f	f	f
115	Granada	\N	\N	f	2024-10-21 13:03:32.776667+01	\N	f	f	f
116	Grécia	\N	\N	f	2024-10-21 13:03:32.789771+01	\N	f	f	f
117	Guatemala	\N	\N	f	2024-10-21 13:03:32.803137+01	\N	f	f	f
118	Guiana	\N	\N	f	2024-10-21 13:03:32.819113+01	\N	f	f	f
119	Guiné	\N	\N	f	2024-10-21 13:03:32.830005+01	\N	f	f	f
120	Guiné-Bissau	\N	\N	f	2024-10-21 13:03:32.842971+01	\N	f	f	f
121	Guiné Equatorial	\N	\N	f	2024-10-21 13:03:32.855905+01	\N	f	f	f
122	Haiti	\N	\N	f	2024-10-21 13:03:32.867453+01	\N	f	f	f
123	Honduras	\N	\N	f	2024-10-21 13:03:32.87942+01	\N	f	f	f
124	Hungria	\N	\N	f	2024-10-21 13:03:32.893383+01	\N	f	f	f
125	Iêmen	\N	\N	f	2024-10-21 13:03:32.905877+01	\N	f	f	f
126	Ilhas Marshall	\N	\N	f	2024-10-21 13:03:32.918842+01	\N	f	f	f
127	Ilhas Salomão	\N	\N	f	2024-10-21 13:03:32.929813+01	\N	f	f	f
128	Índia	\N	\N	f	2024-10-21 13:03:32.943776+01	\N	f	f	f
129	Indonésia	\N	\N	f	2024-10-21 13:03:32.956334+01	\N	f	f	f
130	Irã	\N	\N	f	2024-10-21 13:03:32.970297+01	\N	f	f	f
131	Iraque	\N	\N	f	2024-10-21 13:03:32.984108+01	\N	f	f	f
132	Irlanda	\N	\N	f	2024-10-21 13:03:32.996076+01	\N	f	f	f
133	Islândia	\N	\N	f	2024-10-21 13:03:33.009061+01	\N	f	f	f
134	Israel	\N	\N	f	2024-10-21 13:03:33.022049+01	\N	f	f	f
135	Itália	\N	\N	f	2024-10-21 13:03:33.035015+01	\N	f	f	f
136	Jamaica	\N	\N	f	2024-10-21 13:03:33.045985+01	\N	f	f	f
137	Japão	\N	\N	f	2024-10-21 13:03:33.05997+01	\N	f	f	f
138	Jordânia	\N	\N	f	2024-10-21 13:03:33.071938+01	\N	f	f	f
139	Kiribati	\N	\N	f	2024-10-21 13:03:33.084905+01	\N	f	f	f
140	Kosovo	\N	\N	f	2024-10-21 13:03:33.095875+01	\N	f	f	f
141	Kuwait	\N	\N	f	2024-10-21 13:03:33.110838+01	\N	f	f	f
142	Laos	\N	\N	f	2024-10-21 13:03:33.123293+01	\N	f	f	f
143	Lesoto	\N	\N	f	2024-10-21 13:03:33.136259+01	\N	f	f	f
144	Letônia	\N	\N	f	2024-10-21 13:03:33.151795+01	\N	f	f	f
145	Líbano	\N	\N	f	2024-10-21 13:03:33.163788+01	\N	f	f	f
146	Libéria	\N	\N	f	2024-10-21 13:03:33.177727+01	\N	f	f	f
147	Líbia	\N	\N	f	2024-10-21 13:03:33.194231+01	\N	f	f	f
148	Liechtenstein	\N	\N	f	2024-10-21 13:03:33.20713+01	\N	f	f	f
149	Lituânia	\N	\N	f	2024-10-21 13:03:33.220071+01	\N	f	f	f
150	Luxemburgo	\N	\N	f	2024-10-21 13:03:33.249017+01	\N	f	f	f
151	Madagascar	\N	\N	f	2024-10-21 13:03:33.264563+01	\N	f	f	f
152	Malásia	\N	\N	f	2024-10-21 13:03:33.277505+01	\N	f	f	f
153	Maláui	\N	\N	f	2024-10-21 13:03:33.293462+01	\N	f	f	f
154	Maldivas	\N	\N	f	2024-10-21 13:03:33.306589+01	\N	f	f	f
155	Mali	\N	\N	f	2024-10-21 13:03:33.319555+01	\N	f	f	f
156	Malta	\N	\N	f	2024-10-21 13:03:33.343146+01	\N	f	f	f
157	Marrocos	\N	\N	f	2024-10-21 13:03:33.358948+01	\N	f	f	f
158	Maurício	\N	\N	f	2024-10-21 13:03:33.37291+01	\N	f	f	f
159	Mauritânia	\N	\N	f	2024-10-21 13:03:33.386873+01	\N	f	f	f
160	México	\N	\N	f	2024-10-21 13:03:33.400805+01	\N	f	f	f
161	Mianmar (Birmânia)	\N	\N	f	2024-10-21 13:03:33.412936+01	\N	f	f	f
162	Micronésia	\N	\N	f	2024-10-21 13:03:33.426898+01	\N	f	f	f
163	Moçambique	\N	\N	f	2024-10-21 13:03:33.439864+01	\N	f	f	f
164	Moldávia	\N	\N	f	2024-10-21 13:03:33.452477+01	\N	f	f	f
165	Mônaco	\N	\N	f	2024-10-21 13:03:33.468464+01	\N	f	f	f
166	Mongólia	\N	\N	f	2024-10-21 13:03:33.479863+01	\N	f	f	f
167	Montenegro	\N	\N	f	2024-10-21 13:03:33.494824+01	\N	f	f	f
168	Namíbia	\N	\N	f	2024-10-21 13:03:33.507788+01	\N	f	f	f
169	Nauru	\N	\N	f	2024-10-21 13:03:33.520754+01	\N	f	f	f
170	Nepal	\N	\N	f	2024-10-21 13:03:33.531343+01	\N	f	f	f
171	Nicarágua	\N	\N	f	2024-10-21 13:03:33.545306+01	\N	f	f	f
172	Níger	\N	\N	f	2024-10-21 13:03:33.558815+01	\N	f	f	f
173	Nigéria	\N	\N	f	2024-10-21 13:03:33.578761+01	\N	f	f	f
174	Noruega	\N	\N	f	2024-10-21 13:03:33.591725+01	\N	f	f	f
175	Nova Zelândia	\N	\N	f	2024-10-21 13:03:33.605689+01	\N	f	f	f
176	Omã	\N	\N	f	2024-10-21 13:03:33.619651+01	\N	f	f	f
177	Países Baixos	\N	\N	f	2024-10-21 13:03:33.632617+01	\N	f	f	f
178	Palau	\N	\N	f	2024-10-21 13:03:33.647576+01	\N	f	f	f
179	Panamá	\N	\N	f	2024-10-21 13:03:33.661539+01	\N	f	f	f
180	Papua-Nova Guiné	\N	\N	f	2024-10-21 13:03:33.680489+01	\N	f	f	f
181	Paquistão	\N	\N	f	2024-10-21 13:03:33.695448+01	\N	f	f	f
182	Paraguai	\N	\N	f	2024-10-21 13:03:33.709298+01	\N	f	f	f
183	Peru	\N	\N	f	2024-10-21 13:03:33.723701+01	\N	f	f	f
184	Polônia	\N	\N	f	2024-10-21 13:03:33.737668+01	\N	f	f	f
185	Portugal	\N	\N	f	2024-10-21 13:03:33.751653+01	\N	f	f	f
186	Quênia	\N	\N	f	2024-10-21 13:03:33.763566+01	\N	f	f	f
187	Quirguistão	\N	\N	f	2024-10-21 13:03:33.777058+01	\N	f	f	f
188	Reino Unido	\N	\N	f	2024-10-21 13:03:33.790228+01	\N	f	f	f
189	República Centro-Africana	\N	\N	f	2024-10-21 13:03:33.803141+01	\N	f	f	f
190	República Dominicana	\N	\N	f	2024-10-21 13:03:33.838429+01	\N	f	f	f
191	República Tcheca	\N	\N	f	2024-10-21 13:03:33.85706+01	\N	f	f	f
192	Romênia	\N	\N	f	2024-10-21 13:03:33.872021+01	\N	f	f	f
193	Ruanda	\N	\N	f	2024-10-21 13:03:33.887137+01	\N	f	f	f
194	Rússia	\N	\N	f	2024-10-21 13:03:33.901641+01	\N	f	f	f
195	Samoa	\N	\N	f	2024-10-21 13:03:33.915604+01	\N	f	f	f
196	San Marino	\N	\N	f	2024-10-21 13:03:33.931561+01	\N	f	f	f
197	Santa Lúcia	\N	\N	f	2024-10-21 13:03:33.945523+01	\N	f	f	f
198	São Cristóvão e Névis	\N	\N	f	2024-10-21 13:03:33.961142+01	\N	f	f	f
199	São Tomé e Príncipe	\N	\N	f	2024-10-21 13:03:33.974831+01	\N	f	f	f
200	São Vicente e Granadinas	\N	\N	f	2024-10-21 13:03:33.988793+01	\N	f	f	f
201	Seicheles	\N	\N	f	2024-10-21 13:03:34.00076+01	\N	f	f	f
202	Senegal	\N	\N	f	2024-10-21 13:03:34.017126+01	\N	f	f	f
203	Serra Leoa	\N	\N	f	2024-10-21 13:03:34.032086+01	\N	f	f	f
204	Sérvia	\N	\N	f	2024-10-21 13:03:34.057019+01	\N	f	f	f
205	Singapura	\N	\N	f	2024-10-21 13:03:34.074972+01	\N	f	f	f
206	Síria	\N	\N	f	2024-10-21 13:03:34.088935+01	\N	f	f	f
207	Somália	\N	\N	f	2024-10-21 13:03:34.101901+01	\N	f	f	f
208	Sri Lanka	\N	\N	f	2024-10-21 13:03:34.118855+01	\N	f	f	f
209	Sudão	\N	\N	f	2024-10-21 13:03:34.13182+01	\N	f	f	f
210	Sudão do Sul	\N	\N	f	2024-10-21 13:03:34.145783+01	\N	f	f	f
211	Suécia	\N	\N	f	2024-10-21 13:03:34.16174+01	\N	f	f	f
212	Suíça	\N	\N	f	2024-10-21 13:03:34.176699+01	\N	f	f	f
213	Suriname	\N	\N	f	2024-10-21 13:03:34.19166+01	\N	f	f	f
214	Tailândia	\N	\N	f	2024-10-21 13:03:34.204624+01	\N	f	f	f
215	Tajiquistão	\N	\N	f	2024-10-21 13:03:34.223575+01	\N	f	f	f
216	Tanzânia	\N	\N	f	2024-10-21 13:03:34.235543+01	\N	f	f	f
217	Timor-Leste	\N	\N	f	2024-10-21 13:03:34.247511+01	\N	f	f	f
218	Togo	\N	\N	f	2024-10-21 13:03:34.261178+01	\N	f	f	f
219	Tonga	\N	\N	f	2024-10-21 13:03:34.274663+01	\N	f	f	f
220	Trindade e Tobago	\N	\N	f	2024-10-21 13:03:34.287631+01	\N	f	f	f
221	Tunísia	\N	\N	f	2024-10-21 13:03:34.323536+01	\N	f	f	f
222	Turcomenistão	\N	\N	f	2024-10-21 13:03:34.347178+01	\N	f	f	f
223	Turquia	\N	\N	f	2024-10-21 13:03:34.366126+01	\N	f	f	f
224	Tuvalu	\N	\N	f	2024-10-21 13:03:34.381099+01	\N	f	f	f
225	Ucrânia	\N	\N	f	2024-10-21 13:03:34.396059+01	\N	f	f	f
226	Uganda	\N	\N	f	2024-10-21 13:03:34.412016+01	\N	f	f	f
227	Uruguai	\N	\N	f	2024-10-21 13:03:34.447943+01	\N	f	f	f
228	Uzbequistão	\N	\N	f	2024-10-21 13:03:34.465895+01	\N	f	f	f
229	Vanuatu	\N	\N	f	2024-10-21 13:03:34.479857+01	\N	f	f	f
230	Vaticano	\N	\N	f	2024-10-21 13:03:34.494506+01	\N	f	f	f
231	Venezuela	\N	\N	f	2024-10-21 13:03:34.544046+01	\N	f	f	f
232	Vietnã	\N	\N	f	2024-10-21 13:03:34.599864+01	\N	f	f	f
233	Zâmbia	\N	\N	f	2024-10-21 13:03:34.619811+01	\N	f	f	f
234	Zimbábue	\N	\N	f	2024-10-21 13:03:34.636168+01	\N	f	f	f
235	Bengo	\N	\N	f	2024-10-21 13:05:57.166843+01	\N	f	f	f
236	Benguela	\N	\N	f	2024-10-21 13:05:57.213173+01	\N	f	f	f
237	Bié	\N	\N	f	2024-10-21 13:05:57.233182+01	\N	f	f	f
238	Cabinda	\N	\N	f	2024-10-21 13:05:57.248137+01	\N	f	f	f
239	Cuanza Norte	\N	\N	f	2024-10-21 13:05:57.260106+01	\N	f	f	f
240	Cuanza Sul	\N	\N	f	2024-10-21 13:05:57.274092+01	\N	f	f	f
241	Cunene	\N	\N	f	2024-10-21 13:05:57.290375+01	\N	f	f	f
242	Huambo	\N	\N	f	2024-10-21 13:05:57.3038+01	\N	f	f	f
243	Huila	\N	\N	f	2024-10-21 13:05:57.318145+01	\N	f	f	f
244	Icolo e Bengo	\N	\N	f	2024-10-21 13:05:57.33168+01	\N	f	f	f
245	Luanda	\N	\N	f	2024-10-21 13:05:57.344627+01	\N	f	f	f
246	Lunda Norte	\N	\N	f	2024-10-21 13:05:57.35859+01	\N	f	f	f
247	Lunda Sul	\N	\N	f	2024-10-21 13:05:57.373549+01	\N	f	f	f
248	Malanje	\N	\N	f	2024-10-21 13:05:57.386543+01	\N	f	f	f
249	Moxico	\N	\N	f	2024-10-21 13:05:57.399536+01	\N	f	f	f
250	Moxico-Leste	\N	\N	f	2024-10-21 13:05:57.423502+01	\N	f	f	f
251	Namibe	\N	\N	f	2024-10-21 13:05:57.438431+01	\N	f	f	f
252	Uíge	\N	\N	f	2024-10-21 13:05:57.453391+01	\N	f	f	f
253	Zaire	\N	\N	f	2024-10-21 13:05:57.467354+01	\N	f	f	f
254	Cuando	\N	\N	f	2024-10-21 13:05:57.481129+01	\N	f	f	f
255	Kubango	\N	\N	f	2024-10-21 13:05:57.493342+01	\N	f	f	f
20	Interprovincial	\N	\N	f	2024-10-19 21:11:03.160797+01	\N	f	t	f
21	Internacional	\N	\N	f	2024-10-19 21:11:03.175097+01	\N	f	t	f
256	Intra-provincial	\N	\N	f	2024-10-21 13:05:57.493342+01	\N	f	t	f
257	República Democrática do Congo	\N	RDC	f	2024-10-24 16:00:10.281041+01	\N	f	f	f
258	Outros Continentes	\N	\N	f	2024-10-19 21:11:03.371571+01	\N	f	t	f
22	Países da SADC	\N	\N	f	2024-10-19 21:11:03.18507+01	\N	f	t	f
263	25%	\N	\N	f	2024-10-25 16:54:59.114973+01	\N	f	f	f
262	20%	\N	\N	f	2024-10-25 16:54:56.837744+01	\N	f	f	f
261	15%	\N	\N	f	2024-10-25 16:54:44.746409+01	\N	f	f	f
260	10%	\N	\N	f	2024-10-25 16:54:22.375858+01	\N	f	f	f
264	Sim	Sim, se a entidade transportadora possui um ou mais históricos de sinistros.	Y	f	2024-10-25 16:54:05.104915+01	\N	f	f	f
268	AOA 1 500 000,00	\N	\N	f	2024-10-21 13:05:57.493342+01	\N	f	f	f
267	AOA 750 000,00	\N	\N	f	2024-10-21 13:05:57.493342+01	\N	f	f	f
266	AOA 150 000,00	\N	\N	f	2024-10-21 13:05:57.493342+01	\N	f	f	t
269	tran_value	\N	\N	f	2024-10-19 21:11:03.235934+01	\N	f	f	f
265	Não	Não, se a entidade não tem nenhum histórico de sinistro.	N	f	2024-10-25 16:54:05.104915+01	\N	f	f	t
259	5%	\N	\N	f	2024-10-25 16:54:05.104915+01	\N	f	f	t
\.


--
-- TOC entry 4940 (class 0 OID 306221)
-- Dependencies: 240
-- Data for Name: option_group; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.option_group (id, insurance_id, name, required, created_at, updated_at, deleted) FROM stdin;
1	2	1. Classificação do Produto Transportado	t	2024-10-21 11:35:53.069447+01	\N	f
2	2	2. Meio de Transporte	t	2024-10-21 11:36:14.379298+01	\N	f
3	2	3. Distância e Destino	t	2024-10-21 11:36:19.026367+01	\N	f
4	2	4. Condições Especiais	f	2024-10-21 11:36:29.470597+01	\N	f
8	2	8. Factores de Descontos	f	2024-10-21 11:37:12.440286+01	\N	f
9	2	9. Franquia - prejuízos indemnizáveis	f	2024-10-21 11:38:03.900906+01	\N	f
10	2	10. Coberturas	t	2024-10-21 11:38:13.651444+01	\N	f
11	2	countries	t	2024-10-21 11:38:13.651444+01	\N	f
12	2	states	f	2024-10-21 11:38:13.651444+01	\N	f
13	1	coverages	t	2024-10-21 11:38:13.651444+01	\N	f
14	1	aggravations	f	2024-10-21 11:38:13.651444+01	\N	f
15	2	africa	f	2024-10-21 11:38:13.651444+01	\N	f
5	2	5. Condições de Manuseio e Embalagem	t	2024-10-21 11:36:50.054362+01	\N	f
18	2	claim_histories	f	2024-10-21 11:38:13.651444+01	\N	f
16	2	sadc	f	2024-10-21 11:38:13.651444+01	\N	f
17	2	transport_scope	f	2024-10-21 11:38:13.651444+01	\N	f
19	2	Franquia Mínima	t	2024-10-21 11:38:13.651444+01	\N	f
20	2	Valor	t	2024-10-21 11:38:13.651444+01	\N	f
\.


--
-- TOC entry 4934 (class 0 OID 298904)
-- Dependencies: 234
-- Data for Name: option_option; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.option_option (id, option_id, other_id, created_at, updated_at, deleted) FROM stdin;
1	39	40	2024-10-21 16:35:42.071422+01	\N	f
2	40	39	2024-10-21 16:43:57.289625+01	\N	f
3	41	42	2024-10-21 16:44:32.863626+01	\N	f
4	42	41	2024-10-21 16:44:32.874723+01	\N	f
5	23	24	2024-10-22 11:10:11.467117+01	\N	f
6	24	23	2024-10-22 11:10:11.503154+01	\N	f
9	28	29	2024-10-25 17:34:41.383835+01	\N	f
10	29	28	2024-10-25 17:34:41.42745+01	\N	f
11	263	262	2024-10-25 17:47:09.313995+01	\N	f
12	263	261	2024-10-25 17:47:09.325963+01	\N	f
13	263	260	2024-10-25 17:47:09.340922+01	\N	f
14	263	259	2024-10-25 17:47:09.35289+01	\N	f
15	262	263	2024-10-25 17:47:09.366853+01	\N	f
16	262	261	2024-10-25 17:47:09.376826+01	\N	f
17	262	260	2024-10-25 17:47:09.390789+01	\N	f
18	262	259	2024-10-25 17:47:09.401759+01	\N	f
19	261	263	2024-10-25 17:47:09.417718+01	\N	f
20	261	262	2024-10-25 17:47:09.426693+01	\N	f
21	261	260	2024-10-25 17:47:09.44265+01	\N	f
22	261	259	2024-10-25 17:47:09.454618+01	\N	f
23	260	263	2024-10-25 17:47:09.467583+01	\N	f
24	260	262	2024-10-25 17:47:09.476559+01	\N	f
25	260	261	2024-10-25 17:47:09.490522+01	\N	f
26	260	259	2024-10-25 17:47:09.501492+01	\N	f
27	259	263	2024-10-25 17:47:09.516507+01	\N	f
28	259	262	2024-10-25 17:47:09.52648+01	\N	f
29	259	261	2024-10-25 17:47:09.540442+01	\N	f
30	259	260	2024-10-25 17:47:09.551414+01	\N	f
31	38	37	2024-10-25 17:52:38.998546+01	\N	f
32	38	36	2024-10-25 17:52:39.012507+01	\N	f
33	37	38	2024-10-25 17:52:39.026264+01	\N	f
34	37	36	2024-10-25 17:52:39.037897+01	\N	f
35	36	38	2024-10-25 17:52:39.04988+01	\N	f
36	36	37	2024-10-25 17:52:39.06193+01	\N	f
\.


--
-- TOC entry 4942 (class 0 OID 314396)
-- Dependencies: 242
-- Data for Name: orc; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.orc (id, ciip_pt_id, company_id, option_id, rate_id, condition_id, valid, created_at, updated_at, deleted) FROM stdin;
1	1	1	4	11	\N	t	2024-10-22 17:59:38.22976+01	\N	f
2	1	1	5	12	\N	t	2024-10-22 17:59:53.561974+01	\N	f
3	1	1	7	30	\N	t	2024-10-22 18:00:01.561231+01	\N	f
4	1	1	8	14	\N	t	2024-10-22 18:00:14.177137+01	\N	f
5	1	1	9	15	\N	t	2024-10-22 18:07:48.582851+01	\N	f
6	1	1	10	11	\N	t	2024-10-22 18:08:12.077112+01	\N	f
7	1	1	11	16	\N	t	2024-10-22 18:08:20.07965+01	\N	f
8	1	1	12	17	\N	t	2024-10-22 18:08:29.629029+01	\N	f
9	1	1	\N	17	4	t	2024-10-22 18:17:11.691363+01	\N	f
10	1	1	\N	18	5	t	2024-10-22 18:17:36.857024+01	\N	f
11	1	1	\N	18	6	t	2024-10-22 18:17:59.852497+01	\N	f
12	1	1	\N	14	7	t	2024-10-22 18:18:13.581136+01	\N	f
13	1	1	\N	23	8	t	2024-10-23 12:56:07.917985+01	\N	f
14	1	1	\N	8	9	t	2024-10-23 12:56:23.318425+01	\N	f
15	1	1	\N	31	10	t	2024-10-23 12:56:36.49965+01	\N	f
16	1	1	\N	20	11	t	2024-10-23 12:56:47.417933+01	\N	f
17	1	1	\N	31	12	t	2024-10-23 14:10:21.269161+01	\N	f
18	1	1	\N	32	13	t	2024-10-23 14:16:21.125945+01	\N	f
19	1	2	9	17	\N	t	2024-10-24 16:16:54.016672+01	\N	f
20	1	2	10	16	\N	t	2024-10-24 16:17:05.691969+01	\N	f
21	1	2	11	11	\N	t	2024-10-24 16:17:15.134097+01	\N	f
22	1	2	12	15	\N	t	2024-10-24 16:17:25.823654+01	\N	f
23	1	2	4	14	\N	t	2024-10-24 16:18:28.577836+01	\N	f
24	1	2	5	30	\N	t	2024-10-24 16:18:38.213269+01	\N	f
25	1	2	7	12	\N	t	2024-10-24 16:18:59.680486+01	\N	f
26	1	2	8	11	\N	t	2024-10-24 16:19:10.406768+01	\N	f
27	1	2	\N	14	4	t	2024-10-24 16:19:58.177434+01	\N	f
28	1	2	\N	18	5	t	2024-10-24 16:20:11.6151+01	\N	f
29	1	2	\N	17	6	t	2024-10-24 16:20:25.483189+01	\N	f
30	1	2	\N	18	7	t	2024-10-24 16:20:35.24388+01	\N	f
31	1	2	\N	32	12	t	2024-10-24 16:22:32.131105+01	\N	f
32	1	2	\N	12	13	t	2024-10-24 16:22:42.654769+01	\N	f
33	2	1	1	1	1	t	2024-10-25 11:48:12.755273+01	\N	f
34	2	1	1	2	2	t	2024-10-25 11:48:23.624143+01	\N	f
35	2	1	1	3	3	t	2024-10-25 11:48:32.353607+01	\N	f
36	2	1	2	8	1	t	2024-10-25 11:49:58.101503+01	\N	f
37	2	1	2	9	2	t	2024-10-25 11:50:07.707811+01	\N	f
38	2	1	2	10	3	t	2024-10-25 11:50:15.461822+01	\N	f
39	2	1	3	19	1	t	2024-10-25 11:52:02.548085+01	\N	f
40	2	1	3	20	2	t	2024-10-25 11:52:10.623088+01	\N	f
41	2	1	3	21	3	t	2024-10-25 11:52:16.468685+01	\N	f
42	2	1	39	4	\N	t	2024-10-25 12:24:25.586803+01	\N	f
43	2	1	40	5	\N	t	2024-10-25 12:24:32.204556+01	\N	f
44	2	1	41	6	\N	t	2024-10-25 12:24:39.096917+01	\N	f
45	2	1	42	7	\N	t	2024-10-25 12:24:52.66416+01	\N	f
46	2	2	1	8	1	t	2024-10-25 12:29:39.484699+01	\N	f
47	2	2	1	9	2	t	2024-10-25 12:29:58.16647+01	\N	f
48	2	2	1	16	3	t	2024-10-25 12:30:18.523107+01	\N	f
49	2	2	2	31	1	t	2024-10-25 12:30:51.353804+01	\N	f
50	2	2	2	20	2	t	2024-10-25 12:31:09.705553+01	\N	f
51	2	2	2	21	3	t	2024-10-25 12:31:26.962003+01	\N	f
52	2	2	3	20	1	t	2024-10-25 12:31:49.366819+01	\N	f
53	2	2	3	8	2	t	2024-10-25 12:32:03.530887+01	\N	f
54	2	2	3	9	3	t	2024-10-25 12:32:18.946677+01	\N	f
55	2	2	39	34	\N	t	2024-10-25 12:34:09.642445+01	\N	f
56	2	2	40	35	\N	t	2024-10-25 12:34:18.771352+01	\N	f
57	2	2	41	36	\N	t	2024-10-25 12:34:23.905917+01	\N	f
58	2	2	42	37	\N	t	2024-10-25 12:34:28.13846+01	\N	f
59	1	1	\N	9	14	t	2024-10-25 15:21:38.508843+01	\N	f
60	1	1	\N	32	15	t	2024-10-25 15:21:49.465472+01	\N	f
61	1	1	\N	32	16	t	2024-10-25 15:21:55.875281+01	\N	f
62	1	1	\N	33	17	t	2024-10-25 15:22:03.144741+01	\N	f
63	2	1	\N	9	14	t	2024-10-25 17:01:17.219475+01	\N	f
64	2	1	\N	33	15	t	2024-10-25 17:01:44.89129+01	\N	f
65	2	1	\N	32	16	t	2024-10-25 17:01:57.093087+01	\N	f
66	1	1	\N	9	17	t	2024-10-25 17:02:47.362414+01	\N	f
67	1	1	259	23	\N	t	2024-10-25 17:05:32.998628+01	\N	f
68	1	1	260	38	\N	t	2024-10-25 17:05:41.858049+01	\N	f
69	1	1	261	39	\N	t	2024-10-25 17:05:46.498936+01	\N	f
70	1	1	262	40	\N	t	2024-10-25 17:05:51.277965+01	\N	f
71	1	1	263	41	\N	t	2024-10-25 17:05:56.902613+01	\N	f
72	1	1	28	23	\N	\N	2024-10-22 18:17:36.857024+01	\N	f
73	1	1	29	24	\N	t	2024-10-22 18:17:36.857024+01	\N	f
74	1	1	25	2	\N	t	2024-10-28 17:07:17.364567+01	\N	f
75	1	1	26	11	\N	t	2024-10-28 17:07:28.173192+01	\N	f
76	1	1	27	22	\N	t	2024-10-28 17:07:38.564564+01	\N	f
77	1	1	30	12	\N	t	2024-10-28 17:08:12.647641+01	\N	f
80	1	1	36	42	\N	t	2024-10-28 17:17:05.414019+01	\N	f
81	1	1	37	43	\N	t	2024-10-28 17:17:15.137376+01	\N	f
82	1	1	38	44	\N	t	2024-10-28 17:17:25.938243+01	\N	f
83	1	1	264	23	\N	t	2024-10-22 18:07:48.582851+01	\N	f
85	1	1	266	23	\N	t	2024-10-22 18:17:36.857024+01	\N	f
86	1	1	267	37	\N	t	2024-10-22 18:17:36.857024+01	\N	f
87	1	1	268	46	\N	t	2024-10-22 18:17:36.857024+01	\N	f
89	1	1	269	27	19	t	2024-10-28 17:08:12.647641+01	\N	f
84	1	1	265	26	\N	t	2024-10-22 18:07:48.582851+01	\N	f
90	1	1	269	28	20	t	2024-10-28 17:08:12.647641+01	\N	f
88	1	1	269	26	18	t	2024-10-22 18:17:36.857024+01	\N	f
91	1	1	269	23	21	t	2024-10-28 17:17:15.137376+01	\N	f
\.


--
-- TOC entry 4924 (class 0 OID 298768)
-- Dependencies: 224
-- Data for Name: policy_type; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.policy_type (id, name, icon, created_at, updated_at, deleted, description) FROM stdin;
1	Temporária	seg-resp-civil.png	2024-10-19 20:12:20.917286+01	\N	f	Apólice válida por um período específico e curto, ideal para coberturas pontuais.
2	Permanente	seg-resp-civil.png	2024-10-19 20:12:31.38923+01	\N	f	Apólice com cobertura contínua, sem prazo de validade predeterminado.
3	Anual	seg-resp-civil.png	2024-10-19 20:12:35.439649+01	\N	f	Apólice que oferece cobertura por um ano, com possibilidade de renovação.
4	Aberta	seg-resp-civil.png	2024-10-19 20:12:51.206963+01	\N	f	Apólice que permite ajustes contínuos nos valores segurados ou itens cobertos durante a vigência.
5	Universal	seg-resp-civil.png	2024-10-19 20:12:55.298214+01	\N	f	Apólice flexível que combina elementos de seguro e investimento, permitindo alterações na cobertura e prêmios.
6	Variável	seg-resp-civil.png	2024-10-19 20:12:59.534442+01	\N	f	Apólice cuja cobertura e valores segurados podem variar conforme as condições de mercado ou necessidades do segurado.
7	Universal Variável	seg-resp-civil.png	2024-10-19 20:13:04.375651+01	\N	f	Combina a flexibilidade do seguro universal com a variação dos valores garantidos, baseada em investimentos.
8	Indexado	seg-resp-civil.png	2024-10-19 20:13:07.792887+01	\N	f	Apólice com valores e prêmios ajustados com base em índices econômicos, como inflação.
9	Despesas Finais	seg-resp-civil.png	2024-10-19 20:13:11.444421+01	\N	f	Apólice específica para cobrir custos finais, como funeral e dívidas pendentes.
10	Conjunto	seg-resp-civil.png	2024-10-19 20:13:14.651137+01	\N	f	Apólice que cobre vários indivíduos ou bens de forma integrada.
11	Ipotecário	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
12	Inteira	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
13	Universal	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
14	Variável	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
15	Universal Variável	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
16	Indexado	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
17	Despesas Finais (ou Funeral)	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
18	Sobrevivência	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Para Casais
19	Hipotecário	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	Seguro vinculado a um empréstimo imobiliário, garantindo o pagamento do saldo devedor em caso de imprevistos.
20	Grupo	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	para colaboradores
21	Empresa 	seg-resp-civil.png	2024-10-19 20:13:19.190246+01	\N	f	geral para a organização
\.


--
-- TOC entry 4930 (class 0 OID 298839)
-- Dependencies: 230
-- Data for Name: rate; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.rate (id, value, created_at, updated_at, deleted) FROM stdin;
1	0.07	2024-10-19 21:29:55.413504+01	\N	f
2	0.13	2024-10-19 21:29:55.48132+01	\N	f
3	0.28	2024-10-19 21:29:55.497278+01	\N	f
4	10	2024-10-19 21:29:55.514233+01	\N	f
5	25	2024-10-19 21:29:55.53019+01	\N	f
6	15	2024-10-19 21:29:55.544325+01	\N	f
7	30	2024-10-19 21:29:55.559285+01	\N	f
8	0.03	2024-10-19 21:29:55.574245+01	\N	f
9	0.06	2024-10-19 21:29:55.590202+01	\N	f
10	0.12	2024-10-19 21:29:55.606159+01	\N	f
11	0.18	2024-10-19 21:29:55.621489+01	\N	f
12	0.27	2024-10-19 21:29:55.637446+01	\N	f
13	0.46	2024-10-19 21:29:55.651412+01	\N	f
14	0.34	2024-10-19 21:29:55.665961+01	\N	f
15	0.16	2024-10-19 21:29:55.681917+01	\N	f
16	0.19	2024-10-19 21:29:55.732901+01	\N	f
17	0.22	2024-10-19 21:29:55.755838+01	\N	f
18	0.25	2024-10-19 21:29:55.806324+01	\N	f
19	0.02	2024-10-19 21:29:55.818292+01	\N	f
20	0.05	2024-10-19 21:29:55.826271+01	\N	f
21	0.08	2024-10-19 21:29:55.84123+01	\N	f
22	0.11	2024-10-19 21:29:55.850207+01	\N	f
23	0	2024-10-19 21:29:55.859183+01	\N	f
24	0.9	2024-10-19 21:29:55.876138+01	\N	f
25	-7	2024-10-19 21:29:55.886111+01	\N	f
26	-5	2024-10-19 21:29:55.900073+01	\N	f
27	-12	2024-10-19 21:29:55.923012+01	\N	f
28	-16	2024-10-19 21:29:55.932985+01	\N	f
29	0.07	2024-10-19 22:14:14.697946+01	\N	f
30	0.45	2024-10-22 17:57:11.371858+01	\N	f
31	0.01	2024-10-23 12:34:46.032293+01	\N	f
32	0.15	2024-10-23 14:08:50.563479+01	\N	f
33	0.24	2024-10-23 14:08:56.594898+01	\N	f
34	2	2024-10-25 12:33:22.274019+01	\N	f
35	7	2024-10-25 12:33:24.28323+01	\N	f
36	5	2024-10-25 12:33:26.426834+01	\N	f
37	1	2024-10-25 12:33:28.182146+01	\N	f
38	-1	2024-10-25 16:58:14.110423+01	\N	f
39	-3	2024-10-25 16:58:39.085331+01	\N	f
40	-6	2024-10-25 16:58:50.812368+01	\N	f
41	-10	2024-10-25 16:58:58.558133+01	\N	f
42	100	2024-10-28 17:11:28.615269+01	\N	f
43	77	2024-10-28 17:11:35.449901+01	\N	f
44	46	2024-10-28 17:11:40.976847+01	\N	f
46	3	2024-10-28 17:11:40.976847+01	\N	f
\.


--
-- TOC entry 4932 (class 0 OID 298851)
-- Dependencies: 232
-- Data for Name: route; Type: TABLE DATA; Schema: public; Owner: simulator_user
--

COPY public.route (id, insurance_id, name, created_at, updated_at, deleted) FROM stdin;
2	2	/seguros/tiposdeseguros/tiposdeapolices/form/mt	2024-10-18 19:07:56.155583+01	\N	f
1	1	/seguros/tiposdeseguros/tiposdeapolices/form/vida	2024-10-18 19:07:56.155583+01	\N	f
\.


--
-- TOC entry 4968 (class 0 OID 0)
-- Dependencies: 215
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.category_id_seq', 9, true);


--
-- TOC entry 4969 (class 0 OID 0)
-- Dependencies: 243
-- Name: ciip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.ciip_id_seq', 7, true);


--
-- TOC entry 4970 (class 0 OID 0)
-- Dependencies: 245
-- Name: ciip_pt_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.ciip_pt_id_seq', 14, true);


--
-- TOC entry 4971 (class 0 OID 0)
-- Dependencies: 217
-- Name: company_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.company_id_seq', 3, true);


--
-- TOC entry 4972 (class 0 OID 0)
-- Dependencies: 219
-- Name: condition_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.condition_id_seq', 21, true);


--
-- TOC entry 4973 (class 0 OID 0)
-- Dependencies: 221
-- Name: insurance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.insurance_id_seq', 2, true);


--
-- TOC entry 4974 (class 0 OID 0)
-- Dependencies: 237
-- Name: insurance_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.insurance_type_id_seq', 6, true);


--
-- TOC entry 4975 (class 0 OID 0)
-- Dependencies: 225
-- Name: o_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.o_type_id_seq', 4, true);


--
-- TOC entry 4976 (class 0 OID 0)
-- Dependencies: 235
-- Name: ogo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.ogo_id_seq', 535, true);


--
-- TOC entry 4977 (class 0 OID 0)
-- Dependencies: 239
-- Name: option_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.option_group_id_seq', 20, true);


--
-- TOC entry 4978 (class 0 OID 0)
-- Dependencies: 227
-- Name: option_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.option_id_seq', 269, true);


--
-- TOC entry 4979 (class 0 OID 0)
-- Dependencies: 233
-- Name: option_option_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.option_option_id_seq', 48, true);


--
-- TOC entry 4980 (class 0 OID 0)
-- Dependencies: 241
-- Name: orc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.orc_id_seq', 91, true);


--
-- TOC entry 4981 (class 0 OID 0)
-- Dependencies: 223
-- Name: policy_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.policy_type_id_seq', 21, true);


--
-- TOC entry 4982 (class 0 OID 0)
-- Dependencies: 229
-- Name: rate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.rate_id_seq', 46, true);


--
-- TOC entry 4983 (class 0 OID 0)
-- Dependencies: 231
-- Name: route_id_seq; Type: SEQUENCE SET; Schema: public; Owner: simulator_user
--

SELECT pg_catalog.setval('public.route_id_seq', 2, true);


--
-- TOC entry 4728 (class 2606 OID 298730)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 4756 (class 2606 OID 314450)
-- Name: ciip ciip_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip
    ADD CONSTRAINT ciip_pkey PRIMARY KEY (id);


--
-- TOC entry 4758 (class 2606 OID 314472)
-- Name: ciip_pt ciip_pt_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip_pt
    ADD CONSTRAINT ciip_pt_pkey PRIMARY KEY (id);


--
-- TOC entry 4730 (class 2606 OID 298739)
-- Name: company company_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- TOC entry 4732 (class 2606 OID 298748)
-- Name: condition condition_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.condition
    ADD CONSTRAINT condition_pkey PRIMARY KEY (id);


--
-- TOC entry 4734 (class 2606 OID 298766)
-- Name: insurance insurance_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.insurance
    ADD CONSTRAINT insurance_pkey PRIMARY KEY (id);


--
-- TOC entry 4750 (class 2606 OID 298992)
-- Name: insurance_type insurance_type_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.insurance_type
    ADD CONSTRAINT insurance_type_pkey PRIMARY KEY (id);


--
-- TOC entry 4738 (class 2606 OID 298782)
-- Name: o_type o_type_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.o_type
    ADD CONSTRAINT o_type_pkey PRIMARY KEY (id);


--
-- TOC entry 4748 (class 2606 OID 298921)
-- Name: ogo ogo_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ogo
    ADD CONSTRAINT ogo_pkey PRIMARY KEY (id);


--
-- TOC entry 4752 (class 2606 OID 306228)
-- Name: option_group option_group_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_group
    ADD CONSTRAINT option_group_pkey PRIMARY KEY (id);


--
-- TOC entry 4746 (class 2606 OID 298909)
-- Name: option_option option_option_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_option
    ADD CONSTRAINT option_option_pkey PRIMARY KEY (id);


--
-- TOC entry 4740 (class 2606 OID 298813)
-- Name: option option_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option
    ADD CONSTRAINT option_pkey PRIMARY KEY (id);


--
-- TOC entry 4754 (class 2606 OID 314401)
-- Name: orc orc_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc
    ADD CONSTRAINT orc_pkey PRIMARY KEY (id);


--
-- TOC entry 4736 (class 2606 OID 298775)
-- Name: policy_type policy_type_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.policy_type
    ADD CONSTRAINT policy_type_pkey PRIMARY KEY (id);


--
-- TOC entry 4742 (class 2606 OID 298844)
-- Name: rate rate_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.rate
    ADD CONSTRAINT rate_pkey PRIMARY KEY (id);


--
-- TOC entry 4744 (class 2606 OID 298858)
-- Name: route route_pkey; Type: CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.route
    ADD CONSTRAINT route_pkey PRIMARY KEY (id);


--
-- TOC entry 4767 (class 2606 OID 314451)
-- Name: ciip ciip_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip
    ADD CONSTRAINT ciip_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 4768 (class 2606 OID 314456)
-- Name: ciip ciip_insurance_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip
    ADD CONSTRAINT ciip_insurance_id_fkey FOREIGN KEY (insurance_id) REFERENCES public.insurance(id);


--
-- TOC entry 4769 (class 2606 OID 314461)
-- Name: ciip ciip_insurance_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip
    ADD CONSTRAINT ciip_insurance_type_id_fkey FOREIGN KEY (insurance_type_id) REFERENCES public.insurance_type(id);


--
-- TOC entry 4770 (class 2606 OID 314473)
-- Name: ciip_pt ciip_pt_ciip_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip_pt
    ADD CONSTRAINT ciip_pt_ciip_id_fkey FOREIGN KEY (ciip_id) REFERENCES public.ciip(id);


--
-- TOC entry 4771 (class 2606 OID 314478)
-- Name: ciip_pt ciip_pt_policy_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ciip_pt
    ADD CONSTRAINT ciip_pt_policy_type_id_fkey FOREIGN KEY (policy_type_id) REFERENCES public.policy_type(id);


--
-- TOC entry 4761 (class 2606 OID 298927)
-- Name: ogo ogo_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.ogo
    ADD CONSTRAINT ogo_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.option(id);


--
-- TOC entry 4762 (class 2606 OID 306229)
-- Name: option_group option_group_insurance_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_group
    ADD CONSTRAINT option_group_insurance_id_fkey FOREIGN KEY (insurance_id) REFERENCES public.insurance(id);


--
-- TOC entry 4760 (class 2606 OID 298910)
-- Name: option_option option_option_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.option_option
    ADD CONSTRAINT option_option_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.option(id);


--
-- TOC entry 4763 (class 2606 OID 314407)
-- Name: orc orc_company_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc
    ADD CONSTRAINT orc_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.company(id);


--
-- TOC entry 4764 (class 2606 OID 314422)
-- Name: orc orc_condition_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc
    ADD CONSTRAINT orc_condition_id_fkey FOREIGN KEY (condition_id) REFERENCES public.condition(id);


--
-- TOC entry 4765 (class 2606 OID 314412)
-- Name: orc orc_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc
    ADD CONSTRAINT orc_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.option(id);


--
-- TOC entry 4766 (class 2606 OID 314417)
-- Name: orc orc_rate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.orc
    ADD CONSTRAINT orc_rate_id_fkey FOREIGN KEY (rate_id) REFERENCES public.rate(id);


--
-- TOC entry 4759 (class 2606 OID 298859)
-- Name: route route_insurance_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: simulator_user
--

ALTER TABLE ONLY public.route
    ADD CONSTRAINT route_insurance_id_fkey FOREIGN KEY (insurance_id) REFERENCES public.insurance(id);


-- Completed on 2024-12-13 16:47:27

--
-- PostgreSQL database dump complete
--

