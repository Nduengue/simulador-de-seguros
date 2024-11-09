/* eslint-disable */
export interface IGetIdAndNameMapperResponse {
  id: string;
  name: string;
}

export function GetIdAndNameMapper(data: any[]): IGetIdAndNameMapperResponse[] {
  const response = data.map((item) => ({ id: String(item.id), name: item.name }));
  return response;
}
/* eslint-enable */