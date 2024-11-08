interface GoodsTransportedType {
  merchandises: OptionDTOType[];
  ways: OptionDTOType[];
  from_tos: OptionDTOType[];
  countries: Country[];
  states: OptionDTOType[];
  conditions: OptionDTOType[];
  packaging: OptionDTOType[];
  franchise: OptionDTOType[];
  coverages: OptionDTOType[];
  policy_type: Policytype;
}

interface Policytype {
  id: number;
  name: string;
  icon: string;
  description: null | string;
  updated_at: null;
  deleted: boolean;
}

interface OptionDTOType {
  id: number;
  name: string;
  description: null | string;
  abbreviation: null;
  required: boolean;
  auto_select: boolean;
  selected: boolean;
  taggle_ids: number[];
  groups?: Group[];
}

interface Group {
  id: number;
  name: string;
}
