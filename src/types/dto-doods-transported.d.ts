interface GoodsTransportedType {
  merchandises: OptionDTOType[];
  ways: OptionDTOType[];
  from_tos: OptionDTOType[];
  countries: OptionDTOType[];
  states: OptionDTOType[];
  conditions: OptionDTOType[];
  packaging: OptionDTOType[];
  franchise: OptionDTOType[];
  coverages: OptionDTOType[];
  policy_type: Policytype;
  claim_histories: OptionDTOType[];
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
  description?: string;
  abbreviation: null;
  required: boolean;
  auto_select: boolean;
  selected: boolean;
  taggle_ids?: number[];
  groups?: Group[];
}

interface Group {
  id: number;
  name: string;
}



export interface IIdName {
  id: number;
  name: string;
}

export interface IOption extends IIdName {
  required: boolean;
  auto_select: boolean;
  selected: boolean;
  taggle_ids?: number[];
  description?: string;
}