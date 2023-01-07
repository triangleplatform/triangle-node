import Api from "../utils/Api";
import { Config } from "../types";

export interface CryptocurrencyListParams {}
export interface CryptocurrencyRetrieveParams {}

const cryptocurrencies = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: CryptocurrencyListParams) => api.get(`/cryptocurrencies`, params),
    retrieve: (id: string, params?: CryptocurrencyRetrieveParams) =>
      api.get(`/cryptocurrencies/${id}`, params),
  };
};

export default cryptocurrencies;
