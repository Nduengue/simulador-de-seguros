interface ICoberturas {
  id: number;
  name: string;
  abbreviation: string;
  required: boolean;
}

interface IAgravamentos {
  id: number;
  policy_type_id: number;
  rate_id: number;
  name: string;
  descrition: string;
  taggle_ids: number[];
}

interface ISeguradora {
  id: number;
  name: string;
  required: boolean;
  abbreviation: string;
}

interface IChoice {
  id: number;
  name: string;
  icon: string;
  description?: string;
  route?: string;
}