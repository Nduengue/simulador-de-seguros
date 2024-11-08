export interface ContinentsCountryType {
  id: string;
  name: string;
  countries: CountryType[];
}

export interface CountryType {
  id: string;
  name: string;
  country_abreviation: string;
  phone_code: string[];
  flag: string;
}

export const ContinentsCountry: ContinentsCountryType[] = [
  {
    id: "10048f70-37e7-45fe-b579-c452892dad13",
    name: "África",
    countries: [
      {
        id: "28fada63-2a6b-4f77-b76f-03b4ab645867",
        name: "África do Sul",
        country_abreviation: "ZA",
        phone_code: ["+27"],
        flag: "🇿🇦",
      },
      {
        id: "5f0271a2-c4c3-461d-907f-f9dc051c30d9",
        name: "Argélia",
        country_abreviation: "DZ",
        phone_code: ["+213"],
        flag: "🇩🇿",
      },
      {
        id: "18fe672e-25e0-4621-aa64-58614283ade2",
        name: "Angola",
        country_abreviation: "AO",
        phone_code: ["+244"],
        flag: "🇦🇴",
      },
      {
        id: "8d26da39-5038-4ef5-baee-cc2e1584e21f",
        name: "Benin",
        country_abreviation: "BJ",
        phone_code: ["+229"],
        flag: "🇧🇯",
      },
      {
        id: "22cdb57c-66cc-4ecd-baa1-db9560814b03",
        name: "Botsuana",
        country_abreviation: "BW",
        phone_code: ["+267"],
        flag: "🇧🇼",
      },
      {
        id: "f0db218e-d71b-4e40-83cf-ba279bc36dab",
        name: "Burquina Faso",
        country_abreviation: "BF",
        phone_code: ["+226"],
        flag: "🇧🇫",
      },
      {
        id: "47abf3ef-ed7a-4074-997e-ae403d0331b7",
        name: "Burundi",
        country_abreviation: "BI",
        phone_code: ["+257"],
        flag: "🇧🇮",
      },
      {
        id: "36d106d6-8cc4-450e-a66c-d20ea253520b",
        name: "Cabo Verde",
        country_abreviation: "CV",
        phone_code: ["+238"],
        flag: "🇨🇻",
      },
      {
        id: "e7b14c4a-bdff-44ff-9b1c-bc33128b0b13",
        name: "Camarões",
        country_abreviation: "CM",
        phone_code: ["+237"],
        flag: "🇨🇲",
      },
      {
        id: "da6c8a4c-82f2-4585-bc3b-cfb7b4077aee",
        name: "República Centro-Africana",
        country_abreviation: "CF",
        phone_code: ["+236"],
        flag: "🇨🇫",
      },
      {
        id: "47b80bd1-e543-4a54-8ac1-9cd77c059809",
        name: "Chade",
        country_abreviation: "TD",
        phone_code: ["+235"],
        flag: "🇹🇩",
      },
      {
        id: "e45aa38c-3bcf-471e-be7e-9133b84e44a2",
        name: "Comores",
        country_abreviation: "KM",
        phone_code: ["+269"],
        flag: "🇰🇲",
      },
      {
        id: "e9f7f947-0683-48a0-8969-d5bc3ab5a449",
        name: "Congo, República do",
        country_abreviation: "CG",
        phone_code: ["+242"],
        flag: "🇨🇬",
      },
      {
        id: "87f0c087-36b3-4252-a502-ad9616160d68",
        name: "Congo, República Democrática do",
        country_abreviation: "CD",
        phone_code: ["+243"],
        flag: "🇨🇩",
      },
      {
        id: "44510b01-6559-4efc-8d9b-c473fda609a3",
        name: "Djibuti",
        country_abreviation: "DJ",
        phone_code: ["+253"],
        flag: "🇩🇯",
      },
      {
        id: "3867c88b-b257-4880-a5dd-34af8c1135d6",
        name: "Egito",
        country_abreviation: "EG",
        phone_code: ["+20"],
        flag: "🇪🇬",
      },
      {
        id: "4e4be5af-2363-44fc-9457-5b479c752a06",
        name: "Eswatini",
        country_abreviation: "SZ",
        phone_code: ["+268"],
        flag: "🇸🇿",
      },
      {
        id: "fad91021-7615-4b9f-b88c-93991ba8f419",
        name: "Eritreia",
        country_abreviation: "ER",
        phone_code: ["+291"],
        flag: "🇪🇷",
      },
      {
        id: "ec04d2d1-6ec2-48c9-8b36-c528193e50dd",
        name: "Etiópia",
        country_abreviation: "ET",
        phone_code: ["+251"],
        flag: "🇪🇹",
      },
      {
        id: "0259a575-600a-41d1-b499-bc1f3a4b6c20",
        name: "Gana",
        country_abreviation: "GH",
        phone_code: ["+233"],
        flag: "🇬🇭",
      },
      {
        id: "2887a98e-d85b-4cea-8272-4a03c0b8e832",
        name: "Guiné",
        country_abreviation: "GN",
        phone_code: ["+224"],
        flag: "🇬🇳",
      },
      {
        id: "f2352993-407f-4582-810e-a05b10accee2",
        name: "Guiné-Bissau",
        country_abreviation: "GW",
        phone_code: ["+245"],
        flag: "🇬🇼",
      },
      {
        id: "8e8c5a5a-7613-4285-aec8-1eff2d629c25",
        name: "Iémen",
        country_abreviation: "YE",
        phone_code: ["+967"],
        flag: "🇾🇪",
      },
      {
        id: "51f1ff2a-d76a-4fe7-bcc2-f5d2c012b158",
        name: "Lesoto",
        country_abreviation: "LS",
        phone_code: ["+266"],
        flag: "🇱🇸",
      },
      {
        id: "3ae3d9d7-fc67-4ee1-939d-bb3ae35b376a",
        name: "Liberia",
        country_abreviation: "LR",
        phone_code: ["+231"],
        flag: "🇱🇷",
      },
      {
        id: "3c7952da-e1f1-422b-afe2-0e92b219cdd7",
        name: "Líbia",
        country_abreviation: "LY",
        phone_code: ["+218"],
        flag: "🇱🇾",
      },
      {
        id: "c54580f3-4f57-4c32-9607-b1ef41f0f11a",
        name: "Marrocos",
        country_abreviation: "MA",
        phone_code: ["+212"],
        flag: "🇲🇦",
      },
      {
        id: "e2004fbe-100b-4586-bca3-4e770f64c42a",
        name: "Maurício",
        country_abreviation: "MU",
        phone_code: ["+230"],
        flag: "🇲🇺",
      },
      {
        id: "4fca865f-4352-40b7-a9ad-891e235877fd",
        name: "Moçambique",
        country_abreviation: "MZ",
        phone_code: ["+258"],
        flag: "🇲🇿",
      },
      {
        id: "b29d104a-aec0-4b52-88aa-cb6af5f3d96e",
        name: "Namíbia",
        country_abreviation: "NA",
        phone_code: ["+264"],
        flag: "🇳🇦",
      },
      {
        id: "13a1f4ab-2918-4001-b779-068be8913076",
        name: "Níger",
        country_abreviation: "NE",
        phone_code: ["+227"],
        flag: "🇳🇪",
      },
      {
        id: "a85e45a6-88c5-4ad5-8d5d-bc8f29e26ad5",
        name: "Nigéria",
        country_abreviation: "NG",
        phone_code: ["+234"],
        flag: "🇳🇬",
      },
      {
        id: "10211608-0d8b-4b2e-b0df-96e2beb21f98",
        name: "Ruanda",
        country_abreviation: "RW",
        phone_code: ["+250"],
        flag: "🇷🇼",
      },
      {
        id: "f67cbad8-0c01-4c4d-a18b-e0f2bb7d8efc",
        name: "Senegal",
        country_abreviation: "SN",
        phone_code: ["+221"],
        flag: "🇸🇳",
      },
      {
        id: "5c7efe27-cb4c-4a35-8dc5-a732abc9f28c",
        name: "Seychelles",
        country_abreviation: "SC",
        phone_code: ["+248"],
        flag: "🇸🇨",
      },
      {
        id: "71567c2a-4be8-4be9-9c72-680c496ff3ef",
        name: "Somália",
        country_abreviation: "SO",
        phone_code: ["+252"],
        flag: "🇸🇴",
      },
      {
        id: "639df428-e39c-46b9-ae26-245cea8549c4",
        name: "Sudão",
        country_abreviation: "SD",
        phone_code: ["+249"],
        flag: "🇸🇩",
      },
      {
        id: "fd72ce20-a934-458c-9e40-7764c03c9618",
        name: "Tanzânia",
        country_abreviation: "TZ",
        phone_code: ["+255"],
        flag: "🇹🇿",
      },
      {
        id: "5c4e4007-7696-42a1-95ce-eefb802c3da2",
        name: "Togo",
        country_abreviation: "TG",
        phone_code: ["+228"],
        flag: "🇹🇬",
      },
      {
        id: "de185e13-9716-46c4-b953-40599004bc55",
        name: "Tunísia",
        country_abreviation: "TN",
        phone_code: ["+216"],
        flag: "🇹🇳",
      },
      {
        id: "98f57a67-8219-4d7d-ad10-635ccfe0267c",
        name: "Uganda",
        country_abreviation: "UG",
        phone_code: ["+256"],
        flag: "🇺🇬",
      },
      {
        id: "61b61736-4f3f-4624-9673-b2a5d38f941b",
        name: "Zâmbia",
        country_abreviation: "ZM",
        phone_code: ["+260"],
        flag: "🇿🇲",
      },
      {
        id: "73d08229-e9f2-45a2-9e7d-0c8693be77e8",
        name: "Zimbábue",
        country_abreviation: "ZW",
        phone_code: ["+263"],
        flag: "🇿🇼",
      },
    ],
  },
  {
    id: "2af0a633-0ff8-472c-ad20-0f87d209823a",
    name: "Ásia",
    countries: [
      {
        id: "0970c4f9-ab6c-43dc-869e-cf2b82b88e1a",
        name: "Afeganistão",
        country_abreviation: "AF",
        phone_code: ["+93"],
        flag: "🇦🇫",
      },
      {
        id: "a003c924-6251-4162-ab6b-105a9830aa81",
        name: "Arábia Saudita",
        country_abreviation: "SA",
        phone_code: ["+966"],
        flag: "🇸🇦",
      },
      {
        id: "e4a62564-fa69-4eb1-a666-294db1a462b3",
        name: "Armenia",
        country_abreviation: "AM",
        phone_code: ["+374"],
        flag: "🇦🇲",
      },
      {
        id: "d9d3b33b-549c-4aa2-8e8b-d58d84c0e69b",
        name: "Azerbaijão",
        country_abreviation: "AZ",
        phone_code: ["+994"],
        flag: "🇦🇿",
      },
      {
        id: "8a23a2a1-57a1-4809-a2df-b92bb73bee4e",
        name: "Bahrein",
        country_abreviation: "BH",
        phone_code: ["+973"],
        flag: "🇧🇭",
      },
      {
        id: "3d315389-4de9-44bc-b0cd-46a0fe954e83",
        name: "Bangladesh",
        country_abreviation: "BD",
        phone_code: ["+880"],
        flag: "🇧🇩",
      },
      {
        id: "e217d670-691f-4a28-89b0-4017b933744f",
        name: "Brunei",
        country_abreviation: "BN",
        phone_code: ["+673"],
        flag: "🇧🇳",
      },
      {
        id: "8ddd44b7-a6c8-403c-bbfa-97362c343dde",
        name: "Cazaquistão",
        country_abreviation: "KZ",
        phone_code: ["+7"],
        flag: "🇰🇿",
      },
      {
        id: "a1b0bba1-1cb5-4441-a747-554308f7d662",
        name: "China",
        country_abreviation: "CN",
        phone_code: ["+86"],
        flag: "🇨🇳",
      },
      {
        id: "ee8934f0-0c0f-49bc-a669-ee61730032fd",
        name: "Coreia do Norte",
        country_abreviation: "KP",
        phone_code: ["+850"],
        flag: "🇰🇵",
      },
      {
        id: "10748410-11cb-43c7-a05f-2a55883065f4",
        name: "Coreia do Sul",
        country_abreviation: "KR",
        phone_code: ["+82"],
        flag: "🇰🇷",
      },
      {
        id: "d8145952-2a5a-46df-9f3a-dcdafab93001",
        name: "Emirados Árabes Unidos",
        country_abreviation: "AE",
        phone_code: ["+971"],
        flag: "🇦🇪",
      },
      {
        id: "2ccdcf9e-20ae-43b0-9919-c9adba9ba3ed",
        name: "Filipinas",
        country_abreviation: "PH",
        phone_code: ["+63"],
        flag: "🇵🇭",
      },
      {
        id: "17c2abf6-00a9-4ecc-92c5-fcc30cd47198",
        name: "Georgia",
        country_abreviation: "GE",
        phone_code: ["+995"],
        flag: "🇬🇪",
      },
      {
        id: "2452d908-ad3b-4c92-9d5f-ce67c953bb42",
        name: "Índia",
        country_abreviation: "IN",
        phone_code: ["+91"],
        flag: "🇮🇳",
      },
      {
        id: "0f15e1fd-da2e-45b8-8daf-51da88aa4090",
        name: "Indonésia",
        country_abreviation: "ID",
        phone_code: ["+62"],
        flag: "🇮🇩",
      },
      {
        id: "09d3e168-aefb-43a9-9994-eebd75aaf7b4",
        name: "Irã",
        country_abreviation: "IR",
        phone_code: ["+98"],
        flag: "🇮🇷",
      },
      {
        id: "bbaeaed3-ab06-42b7-9975-75a236142a25",
        name: "Iémen",
        country_abreviation: "YE",
        phone_code: ["+967"],
        flag: "🇾🇪",
      },
      {
        id: "9c9b808f-6569-4e66-a63d-e323f9e25a8f",
        name: "Japão",
        country_abreviation: "JP",
        phone_code: ["+81"],
        flag: "🇯🇵",
      },
      {
        id: "e08fcd98-c37a-4d0a-bd0a-e4246f8ff5c4",
        name: "Jordânia",
        country_abreviation: "JO",
        phone_code: ["+962"],
        flag: "🇯🇴",
      },
      {
        id: "cb32bce7-078d-406d-a52a-f1a95112613b",
        name: "Kuwait",
        country_abreviation: "KW",
        phone_code: ["+965"],
        flag: "🇰🇼",
      },
      {
        id: "c3d735e9-14bb-48e4-b5d4-a73cf763a3e0",
        name: "Laos",
        country_abreviation: "LA",
        phone_code: ["+856"],
        flag: "🇱🇦",
      },
      {
        id: "5d41d468-df52-446b-9638-a537392ec91c",
        name: "Malásia",
        country_abreviation: "MY",
        phone_code: ["+60"],
        flag: "🇲🇾",
      },
      {
        id: "d2361394-12ce-4d86-a64e-466cf9c3ba19",
        name: "Maldivas",
        country_abreviation: "MV",
        phone_code: ["+960"],
        flag: "🇲🇻",
      },
      {
        id: "3d0605ca-4ed8-45b3-8d1f-9f0a273aeabc",
        name: "Mongólia",
        country_abreviation: "MN",
        phone_code: ["+976"],
        flag: "🇲🇳",
      },
      {
        id: "c5778119-82ef-4a2d-8abe-dd607740dab5",
        name: "Nepal",
        country_abreviation: "NP",
        phone_code: ["+977"],
        flag: "🇳🇵",
      },
      {
        id: "1a1f9f34-4442-4233-8579-c8ebdddc597d",
        name: "Omã",
        country_abreviation: "OM",
        phone_code: ["+968"],
        flag: "🇴🇲",
      },
      {
        id: "4cc547c8-d172-4e2f-9df7-912f2215b655",
        name: "Paquistão",
        country_abreviation: "PK",
        phone_code: ["+92"],
        flag: "🇵🇰",
      },
      {
        id: "62234289-1af7-4260-a5fa-f090fe17a4d5",
        name: "Quirguistão",
        country_abreviation: "KG",
        phone_code: ["+996"],
        flag: "🇰🇬",
      },
      {
        id: "e621cec3-1224-45c0-86c3-8824da53bcf2",
        name: "Singapura",
        country_abreviation: "SG",
        phone_code: ["+65"],
        flag: "🇸🇬",
      },
      {
        id: "a0c668b7-28b0-4d5a-882a-809cd4b51b96",
        name: "Síria",
        country_abreviation: "SY",
        phone_code: ["+963"],
        flag: "🇸🇾",
      },
      {
        id: "bafb3e24-3569-4182-9e46-bcb6b07231ec",
        name: "Tailândia",
        country_abreviation: "TH",
        phone_code: ["+66"],
        flag: "🇹🇭",
      },
      {
        id: "d926225e-b215-428b-99d1-de43d7f36369",
        name: "Tajiquistão",
        country_abreviation: "TJ",
        phone_code: ["+992"],
        flag: "🇹🇯",
      },
      {
        id: "5afe9adc-42f8-482d-9bcd-58e272ceff7a",
        name: "Turcomenistão",
        country_abreviation: "TM",
        phone_code: ["+993"],
        flag: "🇹🇲",
      },
      {
        id: "7356cf6a-f633-4b8f-82f3-9fc8cbb6397d",
        name: "Turquia",
        country_abreviation: "TR",
        phone_code: ["+90"],
        flag: "🇹🇷",
      },
      {
        id: "37935150-4c28-432d-8927-2e6022ab8b2d",
        name: "Uzbequistão",
        country_abreviation: "UZ",
        phone_code: ["+998"],
        flag: "🇺🇿",
      },
      {
        id: "ef5b015b-57cb-4be6-b373-3a063dd86bb1",
        name: "Vietnã",
        country_abreviation: "VN",
        phone_code: ["+84"],
        flag: "🇻🇳",
      },
      {
        id: "2d926528-4832-4d91-a4f1-d7e23285c599",
        name: "Brunei",
        country_abreviation: "BN",
        phone_code: ["+673"],
        flag: "🇧🇳",
      },
      {
        id: "9abf5066-b78f-4894-a80b-e5e4cf45b33a",
        name: "Mianmar",
        country_abreviation: "MM",
        phone_code: ["+95"],
        flag: "🇲🇲",
      },
      {
        id: "d1818224-7827-4275-9185-fc236af7f6eb",
        name: "Timor-Leste",
        country_abreviation: "TL",
        phone_code: ["+670"],
        flag: "🇹🇱",
      },
      {
        id: "b7056ba0-29db-4748-9c81-18d95e3bd8f3",
        name: "Taiwan",
        country_abreviation: "TW",
        phone_code: ["+886"],
        flag: "🇹🇼",
      },
      {
        id: "302e895e-f5ec-4796-a959-8cc6e07aac03",
        name: "Camboja",
        country_abreviation: "KH",
        phone_code: ["+855"],
        flag: "🇰🇭",
      },
      {
        id: "5cf7ec46-3536-465a-9878-05bee7aa52fc",
        name: "Laos",
        country_abreviation: "LA",
        phone_code: ["+856"],
        flag: "🇱🇦",
      },
    ],
  },
  {
    id: "a87aa301-42a6-49cd-8fc8-410457155abb",
    name: "Europa",
    countries: [
      {
        id: "9c941306-b93d-42a1-b59c-3c6171c70f39",
        name: "Albânia",
        country_abreviation: "AL",
        phone_code: ["+355"],
        flag: "🇦🇱",
      },
      {
        id: "e05ecfd9-b65a-4efd-82ad-c29c15f94284",
        name: "Andorra",
        country_abreviation: "AD",
        phone_code: ["+376"],
        flag: "🇦🇩",
      },
      {
        id: "19ce61ad-4e63-4917-876c-8ffd3afb6767",
        name: "Armênia",
        country_abreviation: "AM",
        phone_code: ["+374"],
        flag: "🇦🇲",
      },
      {
        id: "75f41d2f-256c-4f3a-b882-7263e46b2b1e",
        name: "Áustria",
        country_abreviation: "AT",
        phone_code: ["+43"],
        flag: "🇦🇹",
      },
      {
        id: "ed8e1fb2-7013-44c1-8840-6bc6fde6e72e",
        name: "Azerbaijão",
        country_abreviation: "AZ",
        phone_code: ["+994"],
        flag: "🇦🇿",
      },
      {
        id: "f8e7cfa8-52f3-4299-9010-2e1889f910c8",
        name: "Bielorrússia",
        country_abreviation: "BY",
        phone_code: ["+375"],
        flag: "🇧🇾",
      },
      {
        id: "6bff8f75-0178-4307-b824-2d424cc83874",
        name: "Bélgica",
        country_abreviation: "BE",
        phone_code: ["+32"],
        flag: "🇧🇪",
      },
      {
        id: "aa8b33c2-b8a0-4398-81a7-aca9e9aab85f",
        name: "Bósnia e Herzegovina",
        country_abreviation: "BA",
        phone_code: ["+387"],
        flag: "🇧🇦",
      },
      {
        id: "4d1479e1-6817-4c63-8feb-e03ed9f3903b",
        name: "Bulgária",
        country_abreviation: "BG",
        phone_code: ["+359"],
        flag: "🇧🇬",
      },
      {
        id: "2ce701d7-556d-4850-9dd4-93eb6fed5632",
        name: "Croácia",
        country_abreviation: "HR",
        phone_code: ["+385"],
        flag: "🇭🇷",
      },
      {
        id: "ec9abe9b-dd60-43b9-955c-b7d88b1b6571",
        name: "Chipre",
        country_abreviation: "CY",
        phone_code: ["+357"],
        flag: "🇨🇾",
      },
      {
        id: "b4215ca8-8ed4-4178-b63a-98360683aabd",
        name: "República Tcheca",
        country_abreviation: "CZ",
        phone_code: ["+420"],
        flag: "🇨🇿",
      },
      {
        id: "e80e5698-b72c-4601-8757-b34f806827ee",
        name: "Dinamarca",
        country_abreviation: "DK",
        phone_code: ["+45"],
        flag: "🇩🇰",
      },
      {
        id: "c0f53239-f7c6-4b7a-9837-405591abb372",
        name: "Estônia",
        country_abreviation: "EE",
        phone_code: ["+372"],
        flag: "🇪🇪",
      },
      {
        id: "ae45a192-45d1-4438-895a-aeafab1346e6",
        name: "Finlândia",
        country_abreviation: "FI",
        phone_code: ["+358"],
        flag: "🇫🇮",
      },
      {
        id: "3ffc226f-4708-4414-a9ed-3b988eb1acbc",
        name: "França",
        country_abreviation: "FR",
        phone_code: ["+33"],
        flag: "🇫🇷",
      },
      {
        id: "2995f130-b4d3-4f17-a9f8-293247a7868f",
        name: "Geórgia",
        country_abreviation: "GE",
        phone_code: ["+995"],
        flag: "🇬🇪",
      },
      {
        id: "e4d9ed72-8b23-462a-9828-3b74af6586f4",
        name: "Alemanha",
        country_abreviation: "DE",
        phone_code: ["+49"],
        flag: "🇩🇪",
      },
      {
        id: "db9a501b-8940-45a4-ac4b-01095f3a7474",
        name: "Grécia",
        country_abreviation: "GR",
        phone_code: ["+30"],
        flag: "🇬🇷",
      },
      {
        id: "a852fec1-ff49-41a4-b738-0a19b636e084",
        name: "Hungria",
        country_abreviation: "HU",
        phone_code: ["+36"],
        flag: "🇭🇺",
      },
      {
        id: "132bafcf-9222-46cb-9f30-2c22aee1d40c",
        name: "Islândia",
        country_abreviation: "IS",
        phone_code: ["+354"],
        flag: "🇮🇸",
      },
      {
        id: "b52eb9d2-e5b6-4d3b-b9df-2b17c4ea0f3d",
        name: "Irlanda",
        country_abreviation: "IE",
        phone_code: ["+353"],
        flag: "🇮🇪",
      },
      {
        id: "20978389-efa8-493b-84bf-7fb52c733ae5",
        name: "Itália",
        country_abreviation: "IT",
        phone_code: ["+39"],
        flag: "🇮🇹",
      },
      {
        id: "bed7f38e-b00a-48e3-aedc-3ae98c9084f2",
        name: "Letônia",
        country_abreviation: "LV",
        phone_code: ["+371"],
        flag: "🇱🇻",
      },
      {
        id: "40928c86-608b-48dd-bae5-2145e458139b",
        name: "Liechtenstein",
        country_abreviation: "LI",
        phone_code: ["+423"],
        flag: "🇱🇮",
      },
      {
        id: "b19dee11-bc0b-431a-af98-7e257661f95f",
        name: "Lituânia",
        country_abreviation: "LT",
        phone_code: ["+370"],
        flag: "🇱🇹",
      },
      {
        id: "52dc304a-dbfc-425a-a22f-355358b5cd98",
        name: "Luxemburgo",
        country_abreviation: "LU",
        phone_code: ["+352"],
        flag: "🇱🇺",
      },
      {
        id: "bacf6ab4-8699-4f43-9708-a954e92e7f8f",
        name: "Malta",
        country_abreviation: "MT",
        phone_code: ["+356"],
        flag: "🇲🇹",
      },
      {
        id: "d397e08c-4d27-4222-834e-9d976262bce0",
        name: "Mônaco",
        country_abreviation: "MC",
        phone_code: ["+377"],
        flag: "🇲🇨",
      },
      {
        id: "ab87a0f6-022f-49fc-a523-e702ec76a809",
        name: "Montenegro",
        country_abreviation: "ME",
        phone_code: ["+382"],
        flag: "🇲🇪",
      },
      {
        id: "e1cb139e-1d86-49d6-99d7-1d693d288e47",
        name: "Países Baixos",
        country_abreviation: "NL",
        phone_code: ["+31"],
        flag: "🇳🇱",
      },
      {
        id: "ad09df6c-9a5c-43c3-be56-9a8dd750cd24",
        name: "Noruega",
        country_abreviation: "NO",
        phone_code: ["+47"],
        flag: "🇳🇴",
      },
      {
        id: "5a0a9a70-4501-42cd-af0f-cad596b8c2eb",
        name: "Polônia",
        country_abreviation: "PL",
        phone_code: ["+48"],
        flag: "🇵🇱",
      },
      {
        id: "0c738248-af50-45fe-bebe-5227939001f6",
        name: "Portugal",
        country_abreviation: "PT",
        phone_code: ["+351"],
        flag: "🇵🇹",
      },
      {
        id: "8c4a293b-d83c-42e6-aee1-4f4a58713936",
        name: "Romênia",
        country_abreviation: "RO",
        phone_code: ["+40"],
        flag: "🇷🇴",
      },
      {
        id: "4248d673-f79f-415f-90eb-6369142773a2",
        name: "Rússia",
        country_abreviation: "RU",
        phone_code: ["+7"],
        flag: "🇷🇺",
      },
      {
        id: "933b2a01-583a-4724-89e8-930e077b20e5",
        name: "San Marino",
        country_abreviation: "SM",
        phone_code: ["+378"],
        flag: "🇸🇲",
      },
      {
        id: "c66f20d0-9882-4531-ad7a-241e368c387e",
        name: "Sérvia",
        country_abreviation: "RS",
        phone_code: ["+381"],
        flag: "🇷🇸",
      },
      {
        id: "12b6d42f-ced3-4495-8d54-2425737d9b66",
        name: "Eslováquia",
        country_abreviation: "SK",
        phone_code: ["+421"],
        flag: "🇸🇰",
      },
      {
        id: "8dea231e-e5d6-496c-b7b8-84aa3a834f46",
        name: "Eslovênia",
        country_abreviation: "SI",
        phone_code: ["+386"],
        flag: "🇸🇮",
      },
      {
        id: "3622d1bc-34f6-497f-bdf0-82fc92b2c19a",
        name: "Espanha",
        country_abreviation: "ES",
        phone_code: ["+34"],
        flag: "🇪🇸",
      },
      {
        id: "04c9bd21-b995-4146-a709-877ed4433c13",
        name: "Suécia",
        country_abreviation: "SE",
        phone_code: ["+46"],
        flag: "🇸🇪",
      },
      {
        id: "f0a2310a-5320-45e0-a1b6-d62a2ac420a9",
        name: "Suíça",
        country_abreviation: "CH",
        phone_code: ["+41"],
        flag: "🇨🇭",
      },
      {
        id: "bc302b3c-07f1-4936-a753-a7c54dd20ed7",
        name: "Turquia",
        country_abreviation: "TR",
        phone_code: ["+90"],
        flag: "🇹🇷",
      },
      {
        id: "433723da-4a3c-480b-8ace-d4ec428c919d",
        name: "Ucrânia",
        country_abreviation: "UA",
        phone_code: ["+380"],
        flag: "🇺🇦",
      },
      {
        id: "38e54ed0-f54c-4c54-8d8e-9c228b9c900f",
        name: "Reino Unido",
        country_abreviation: "GB",
        phone_code: ["+44"],
        flag: "🇬🇧",
      },
      {
        id: "0a3d5264-36b8-4692-b31c-066833f70581",
        name: "Vaticano",
        country_abreviation: "VA",
        phone_code: ["+39"],
        flag: "🇻🇦",
      },
    ],
  },
  {
    id: "bca7f11a-bdd7-4bdc-8b0d-3669dc602cb7",
    name: "América do Norte",
    countries: [
      {
        id: "5eeb83e6-5411-43d7-8c7d-62a6abc14d68",
        name: "Estados Unidos",
        country_abreviation: "US",
        phone_code: ["+1"],
        flag: "🇺🇸",
      },
      {
        id: "a7ebe240-6d9e-4783-a797-83fa1a503e72",
        name: "Canadá",
        country_abreviation: "CA",
        phone_code: ["+1"],
        flag: "🇨🇦",
      },
      {
        id: "b936b6fa-8fee-48c5-8800-fe36f5078be7",
        name: "México",
        country_abreviation: "MX",
        phone_code: ["+52"],
        flag: "🇲🇽",
      },
      {
        id: "8d45d73c-4237-4ce0-b0ed-e7c818604fe8",
        name: "Antigua e Barbuda",
        country_abreviation: "AG",
        phone_code: ["+1", "+268"],
        flag: "🇦🇬",
      },
      {
        id: "4d03f274-879c-4399-9059-8cc75daac450",
        name: "Bahamas",
        country_abreviation: "BS",
        phone_code: ["+1", "+242"],
        flag: "🇧🇸",
      },
      {
        id: "f5fda0c0-a216-48ba-9563-f5d34a7afcdb",
        name: "Barbados",
        country_abreviation: "BB",
        phone_code: ["+1", "+246"],
        flag: "🇧🇧",
      },
      {
        id: "6adfd0e9-a176-4393-a3a2-e46fa2de9766",
        name: "Cuba",
        country_abreviation: "CU",
        phone_code: ["+53"],
        flag: "🇨🇺",
      },
      {
        id: "237e0621-717c-4902-a9fd-a2813d5b2cf1",
        name: "Dominica",
        country_abreviation: "DM",
        phone_code: ["+1", "+767"],
        flag: "🇩🇲",
      },
      {
        id: "d6cee057-b80f-4675-8c4f-1276108a8e15",
        name: "República Dominicana",
        country_abreviation: "DO",
        phone_code: ["+1", "+809"],
        flag: "🇩🇴",
      },
      {
        id: "d5da4d49-5be6-4ff8-a705-1f46c961bc9d",
        name: "Haiti",
        country_abreviation: "HT",
        phone_code: ["+509"],
        flag: "🇭🇹",
      },
      {
        id: "51b4fb58-dd20-42ca-80f0-df7a82f4a703",
        name: "Jamaica",
        country_abreviation: "JM",
        phone_code: ["+1", "+876"],
        flag: "🇯🇲",
      },
      {
        id: "a058bf2a-a49d-4d33-9d00-3938fbd60e84",
        name: "São Cristóvão e Nevis",
        country_abreviation: "KN",
        phone_code: ["+1", "+869"],
        flag: "🇰🇳",
      },
      {
        id: "9ef7bf52-8176-4ab4-b57f-2f9a74585c3c",
        name: "São Vicente e Granadinas",
        country_abreviation: "VC",
        phone_code: ["+1", "+784"],
        flag: "🇻🇨",
      },
      {
        id: "18e90a36-9cbc-4d32-9dae-6c8695f439ca",
        name: "Trinidad e Tobago",
        country_abreviation: "TT",
        phone_code: ["+1", "+868"],
        flag: "🇹🇹",
      },
      {
        id: "2b6fdc57-148d-4337-8efb-d1165b8beecf",
        name: "El Salvador",
        country_abreviation: "SV",
        phone_code: ["+503"],
        flag: "🇸🇻",
      },
      {
        id: "18da2c1e-9a3d-4974-92a0-4339f11278bc",
        name: "Guatemala",
        country_abreviation: "GT",
        phone_code: ["+502"],
        flag: "🇬🇹",
      },
      {
        id: "2d6583dc-c465-47b2-9100-58408ba3f736",
        name: "Honduras",
        country_abreviation: "HN",
        phone_code: ["+504"],
        flag: "🇭🇳",
      },
      {
        id: "10132488-d312-4634-916b-2c3e26893cb2",
        name: "Nicarágua",
        country_abreviation: "NI",
        phone_code: ["+505"],
        flag: "🇳🇮",
      },
      {
        id: "097a2b37-2bdb-4efc-b15b-a41c9ad1b7b1",
        name: "Costa Rica",
        country_abreviation: "CR",
        phone_code: ["+506"],
        flag: "🇨🇷",
      },
      {
        id: "df54aa27-f3f9-44c7-9390-de8ef99be08d",
        name: "Panamá",
        country_abreviation: "PA",
        phone_code: ["+507"],
        flag: "🇵🇦",
      },
      {
        id: "8548a127-ff91-4854-ac2e-426f033ba607",
        name: "Groenlândia",
        country_abreviation: "GL",
        phone_code: ["+299"],
        flag: "🇬🇱",
      },
      {
        id: "da799762-fa88-47bb-929d-5be286b6b0f3",
        name: "Porto Rico",
        country_abreviation: "PR",
        phone_code: ["+1", "+787"],
        flag: "🇵🇷",
      },
      {
        id: "ae6e0226-1d25-4198-a94f-e1df1d3fe906",
        name: "Ilhas Virgens dos EUA",
        country_abreviation: "VI",
        phone_code: ["+1", "+340"],
        flag: "🇻🇬",
      },
    ],
  },
  {
    id: "a139836a-aff0-45ef-b77f-60582e847f7e",
    name: "Oceania",
    countries: [
      {
        id: "f2b92a5b-2f62-4a4d-878d-6e2d55f25552",
        name: "Australia",
        country_abreviation: "AU",
        phone_code: ["+61"],
        flag: "🇦🇺",
      },
      {
        id: "4b4d0d80-6f9c-42e7-a8ee-8591cee23842",
        name: "Fiji",
        country_abreviation: "FJ",
        phone_code: ["+679"],
        flag: "🇫🇯",
      },
      {
        id: "3e8e7ef5-516d-4d49-91c7-3d5997ee08b7",
        name: "Kiribati",
        country_abreviation: "KI",
        phone_code: ["+686"],
        flag: "🇰🇮",
      },
      {
        id: "a0d0f62d-9663-49ed-b43e-46270d348b9e",
        name: "Marshall Islands",
        country_abreviation: "MH",
        phone_code: ["+692"],
        flag: "🇲🇭",
      },
      {
        id: "504da370-84ff-41d2-a76d-3f2bd0dc63bb",
        name: "Micronesia",
        country_abreviation: "FM",
        phone_code: ["+691"],
        flag: "🇫🇲",
      },
      {
        id: "7fab5def-5b38-4faa-9fba-d57812c32874",
        name: "Nauru",
        country_abreviation: "NR",
        phone_code: ["+674"],
        flag: "🇳🇷",
      },
      {
        id: "39981298-c6d7-44c9-aabe-5daa3033bc07",
        name: "New Zealand",
        country_abreviation: "NZ",
        phone_code: ["+64"],
        flag: "🇳🇿",
      },
      {
        id: "83ebccaf-ff00-4a3e-9db0-0a0e8171c9c5",
        name: "Palau",
        country_abreviation: "PW",
        phone_code: ["+680"],
        flag: "🇵🇼",
      },
      {
        id: "6f995309-b712-4343-a962-5b889ed62eda",
        name: "Papua New Guinea",
        country_abreviation: "PG",
        phone_code: ["+675"],
        flag: "🇵🇬",
      },
      {
        id: "69e3ca8f-e0fb-4e63-a7e4-43f6ca563dbc",
        name: "Samoa",
        country_abreviation: "WS",
        phone_code: ["+685"],
        flag: "🇼🇸",
      },
      {
        id: "1948ec2b-eed4-4b45-9d05-175b0631567e",
        name: "Solomon Islands",
        country_abreviation: "SB",
        phone_code: ["+677"],
        flag: "🇸🇧",
      },
      {
        id: "87c73584-d5b9-49c9-bef3-881e35e90768",
        name: "Tonga",
        country_abreviation: "TO",
        phone_code: ["+676"],
        flag: "🇹🇴",
      },
      {
        id: "c4ec673f-325f-4074-86b6-9b32367a45b6",
        name: "Tuvalu",
        country_abreviation: "TV",
        phone_code: ["+688"],
        flag: "🇹🇻",
      },
      {
        id: "ddca9978-23e9-41d0-8a26-0b0494286e8d",
        name: "Vanuatu",
        country_abreviation: "VU",
        phone_code: ["+678"],
        flag: "🇻🇺",
      },
    ],
  },
  {
    id: "3aa06bef-fe6f-4870-ad00-7bc4897c854f",
    name: "América do Sul",
    countries: [
      {
        id: "f50201b9-e50f-494a-8f8e-975b80ffbb23",
        name: "Argentina",
        country_abreviation: "AR",
        phone_code: ["+54"],
        flag: "🇦🇷",
      },
      {
        id: "a584df80-4d70-4920-a349-a9064ba79bb0",
        name: "Bolivia",
        country_abreviation: "BO",
        phone_code: ["+591"],
        flag: "🇧🇴",
      },
      {
        id: "34fc35e6-ad3d-4642-8a87-4129bec6a452",
        name: "Brazil",
        country_abreviation: "BR",
        phone_code: ["+55"],
        flag: "🇧🇷",
      },
      {
        id: "a5a23d49-295d-4a9d-8663-7406905ab78a",
        name: "Chile",
        country_abreviation: "CL",
        phone_code: ["+56"],
        flag: "🇨🇱",
      },
      {
        id: "31c25b20-5c54-4854-b75c-6eaa7d4c6983",
        name: "Colombia",
        country_abreviation: "CO",
        phone_code: ["+57"],
        flag: "🇨🇴",
      },
      {
        id: "eef4c646-73a5-45bb-8f10-755bfc134f12",
        name: "Ecuador",
        country_abreviation: "EC",
        phone_code: ["+593"],
        flag: "🇪🇨",
      },
      {
        id: "f09b8a0d-1233-4053-ad78-402cf904d7a9",
        name: "Guyana",
        country_abreviation: "GY",
        phone_code: ["+592"],
        flag: "🇬🇾",
      },
      {
        id: "47feaa12-e10a-4827-8dba-a97209e36192",
        name: "Paraguay",
        country_abreviation: "PY",
        phone_code: ["+595"],
        flag: "🇵🇾",
      },
      {
        id: "40a8597a-c17a-44e7-8c5e-6ceeed903254",
        name: "Peru",
        country_abreviation: "PE",
        phone_code: ["+51"],
        flag: "🇵🇪",
      },
      {
        id: "1b8d84fe-218e-4d7e-9a97-6f8d64b22ead",
        name: "Suriname",
        country_abreviation: "SR",
        phone_code: ["+597"],
        flag: "🇸🇷",
      },
      {
        id: "481c3e14-ef43-4582-b3f3-f228bc851a43",
        name: "Uruguay",
        country_abreviation: "UY",
        phone_code: ["+598"],
        flag: "🇺🇾",
      },
      {
        id: "591287bc-15f5-423d-992f-3491796c7157",
        name: "Venezuela",
        country_abreviation: "VE",
        phone_code: ["+58"],
        flag: "🇻🇪",
      },
    ],
  },
];
