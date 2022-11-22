import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface AccountAddParams {
  address: string;
  name: string;
  network: string;
}
export interface AccountListParams extends ExpandParams {}
export interface AccountRetrieveParams extends ExpandParams {}

const accounts = (config: Config) => {
  const api = new Api(config);
  return {
    add: (params: AccountAddParams) => api.post(`/accounts`, params),
    balance: (id: string) => api.get(`/accounts/${id}/balance`),
    list: (params?: AccountListParams) => api.get(`/accounts`, params),
    nfts: (id: string) => api.get(`/accounts/${id}/nfts`),
    retrieve: (id: string, params?: AccountRetrieveParams) => api.get(`/accounts/${id}`, params),
    tokens: (id: string) => api.get(`/accounts/${id}/tokens`),
    transactions: (id: string) => api.get(`/accounts/${id}/transactions`),
  };
};

export default accounts;
