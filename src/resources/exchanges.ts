import Api from "../utils/Api";
import { Config } from "../types";

export interface ExchangeListParams {}
export interface ExchangeRetrieveParams {}

const exchanges = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: ExchangeListParams) => api.get(`/exchanges`, params),
    retrieve: (id: string, params?: ExchangeRetrieveParams) => api.get(`/exchanges/${id}`, params),
  };
};

export default exchanges;
