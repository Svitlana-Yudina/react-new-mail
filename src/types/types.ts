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

export interface StatusResponse {
  success: boolean,
  data: StatusData[],
}

export interface StatusData {
  Number: string,
  WarehouseRecipient: string,
  CityRecipient: string,
  ActualDeliveryDate: string, // фактична дата доставки
  ScheduledDeliveryDate: string, // очікувана дата доставки
  WarehouseSender: string,
  CitySender: string,
  DateCreated: string, // дата створення ттн
  Status: string,
  StatusCode: string,
}
