import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface ContractAddParams {
  address: string;
  name: string;
  network: string;
}
export interface ContractListParams extends ExpandParams {}
export interface ContractRetrieveParams extends ExpandParams {}

/**
 * @deprecated Use `accounts` instead.
 */
const contracts = (config: Config) => {
  const api = new Api(config);
  return {
    /**
     * @deprecated Use `accounts.add()` instead.
     */
    add: (params: ContractAddParams) => api.post(`/contracts`, params),
    /**
     * @deprecated Use `accounts.balance()` instead.
     */
    balance: (id: string) => api.get(`/contracts/${id}/balance`),
    /**
     * @deprecated Use `accounts.list()` instead.
     */
    list: (params?: ContractListParams) => api.get(`/contracts`, params),
    /**
     * @deprecated Use `accounts.nfts()` instead.
     */
    nfts: (id: string) => api.get(`/contracts/${id}/nfts`),
    /**
     * @deprecated Use `accounts.retrieve()` instead.
     */
    retrieve: (id: string, params?: ContractRetrieveParams) => api.get(`/contracts/${id}`, params),
    /**
     * @deprecated Use `accounts.tokens()` instead.
     */
    tokens: (id: string) => api.get(`/contracts/${id}/tokens`),
    /**
     * @deprecated Use `accounts.transactions()` instead.
     */
    transactions: (id: string) => api.get(`/contracts/${id}/transactions`),
  };
};

export default contracts;
