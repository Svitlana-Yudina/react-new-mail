/* eslint-disable no-shadow */
export enum Actions {
  adresses = 'Список відділень',
  track = 'Перевірити ТТН',
}

export interface AreaResponse {
  success: boolean,
  data: AreaData[],
}

export type AreaData = {
  Ref: string,
  AreasCenter: string,
  DescriptionRu: string,
  Description: string,
};

export interface CityResponse {
  success: boolean,
  data: CityData[],
}

export interface CityData {
  Description: string,
  Ref: string,
  CityID: string,
}

export interface AdressResponse {
  success: boolean,
  data: AdressData[],
}

export interface AdressData {
  Description: string,
  ShortAddress: string,
  Phone: string,
  Ref: string,
}
