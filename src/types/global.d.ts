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

type RadixColorType =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";
