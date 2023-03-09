import { AreaData, AreaResponse } from '../types/types';

const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

export function request<T>(data: RequestInit): Promise<T> {
  return fetch(apiUrl, data)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error(`${err}`);
    });
}

export function getAreas(): Promise<AreaData[]> {
  const options = { method: 'POST',
    body: JSON.stringify({
      apiKey: '4acfc6aa52ccdc63bebaca806e3fd62c',
      modelName: 'Address',
      calledMethod: 'getAreas',
      methodProperties: {},
    }),
    headers: {} }

  return request<AreaResponse>(options)
    .then(response => response.data)
    .catch((err) => {
      throw new Error(`${err}`);
    });
}
