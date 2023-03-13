import {
  AdressData,
  AdressResponse,
  AreaData,
  AreaResponse,
  CityData,
  CityResponse,
  StatusData,
  StatusResponse,
} from '../types/types';

const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

export function request<T>(data: RequestInit): Promise<T> {
  return fetch(apiUrl, data)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error(`${err}`);
    });
}

// I use method POST because "Request with GET/HEAD method cannot have body."

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

export function getCities(areaRef: string): Promise<CityData[]> {
  const options = { method: 'POST',
    body: JSON.stringify({
      apiKey: '4acfc6aa52ccdc63bebaca806e3fd62c',
      modelName: 'Address',
      calledMethod: 'getCities',
      methodProperties: {
        'AreaRef': areaRef,
      },
    }),
    headers: {} }

  return request<CityResponse>(options)
    .then(response => response.data)
    .catch((err) => {
      throw new Error(`${err}`);
    });
}

export function getWarehouses(cityRef: string): Promise<AdressData[]> {
  const options = { method: 'POST',
    body: JSON.stringify({
      apiKey: '4acfc6aa52ccdc63bebaca806e3fd62c',
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        'CityRef': cityRef,
      },
    }),
    headers: {} }

  return request<AdressResponse>(options)
    .then(response => response.data)
    .catch((err) => {
      throw new Error(`${err}`);
    });
}

export function getStatus(tthNumber: string): Promise<StatusData[]> {
  const options = { method: 'POST',
    body: JSON.stringify({
      apiKey: '',
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            'DocumentNumber': tthNumber,
          },
        ],
      },
    }),
    headers: {} }

  return request<StatusResponse>(options)
    .then(response => response.data)
    .catch((err) => {
      throw new Error(`${err}`);
    });
}
