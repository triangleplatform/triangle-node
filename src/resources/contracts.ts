import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface ContractAddParams {
  address: string;
  name: string;
  network: string;
}
export interface ContractListParams extends ExpandParams {}
export interface ContractRetrieveParams extends ExpandParams {}

const contracts = (config: Config) => {
  const api = new Api(config);
  return {
    add: (params: ContractAddParams) => api.post(`/contracts`, params),
    balance: (id: string) => api.get(`/contracts/${id}/balance`),
    list: (params?: ContractListParams) => api.get(`/contracts`, params),
    nfts: (id: string) => api.get(`/contracts/${id}/nfts`),
    retrieve: (id: string, params?: ContractRetrieveParams) => api.get(`/contracts/${id}`, params),
    tokens: (id: string) => api.get(`/contracts/${id}/tokens`),
    transactions: (id: string) => api.get(`/contracts/${id}/transactions`),
  };
};

export default contracts;
