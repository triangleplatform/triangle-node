import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface AddressListParams extends ExpandParams {}
export interface AddressMonitorParams {
  address: string;
  name: string;
  network: string;
}
export interface AddressRetrieveParams extends ExpandParams {}

/**
 * @deprecated Use `accounts` or `contracts` instead.
 */
const addresses = (config: Config) => {
  const api = new Api(config);
  return {
    /**
     * @deprecated Use `accounts.balance()` or `contracts.balance()` instead.
     */
    balance: (id: string) => api.get(`/addresses/${id}/balance`),
    /**
     * @deprecated Use `accounts.list()` or `contracts.list()` instead.
     */
    list: (params?: AddressListParams) => api.get(`/addresses`, params),
    /**
     * @deprecated Use `accounts.add()` or `contracts.add()` instead.
     */
    monitor: (params: AddressMonitorParams) => api.post(`/addresses`, params),
    /**
     * @deprecated Use `accounts.nft()` or `contracts.nft()` instead.
     */
    nfts: (id: string) => api.get(`/addresses/${id}/nfts`),
    /**
     * @deprecated Use `accounts.retrieve()` or `contracts.retrieve()` instead.
     */
    retrieve: (id: string, params?: AddressRetrieveParams) => api.get(`/addresses/${id}`, params),
    /**
     * @deprecated Use `accounts.tokens()` or `contracts.tokens()` instead.
     */
    tokens: (id: string) => api.get(`/addresses/${id}/tokens`),
    /**
     * @deprecated Use `accounts.transactions()` or `contracts.transactions()` instead.
     */
    transactions: (id: string) => api.get(`/addresses/${id}/transactions`),
  };
};

export default addresses;
