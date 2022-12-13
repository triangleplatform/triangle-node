import Api from "../utils/Api";
import { Config } from "../types";

export interface ChainListParams {}
export interface ChainRetrieveParams {}

const chains = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: ChainListParams) => api.get(`/chains`, params),
    retrieve: (id: string, params?: ChainRetrieveParams) => api.get(`/chains/${id}`, params),
  };
};

export default chains;
