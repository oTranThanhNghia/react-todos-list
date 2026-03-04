import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export class ClientRequest {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async request<T>(config: AxiosRequestConfig, authHeader?: any): Promise<AxiosResponse<T>> {
    return this.client.request({
      ...config,
      headers: {
        ...(config.headers || {}),
        ...(authHeader || {}),
      },
    });
  }
}

const clientRequest = new ClientRequest(axiosInstance);

export default clientRequest;
