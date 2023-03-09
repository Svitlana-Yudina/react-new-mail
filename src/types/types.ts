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
