import MockData from "./dto-mt.json";

export async function GET_MT_LIST() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MockData;
}
