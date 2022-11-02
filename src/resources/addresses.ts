import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface AddressListParams extends ExpandParams {}
export interface AddressMonitorParams {
  address: string;
  name: string;
  network: string;
}
export interface AddressRetrieveParams extends ExpandParams {}

const addresses = (config: Config) => {
  const api = new Api(config);
  return {
    balance: (id: string) => api.get(`/addresses/${id}/balance`),
    list: (params?: AddressListParams) => api.get(`/addresses`, params),
    monitor: (params: AddressMonitorParams) => api.post(`/addresses`, params),
    nfts: (id: string) => api.get(`/addresses/${id}/nfts`),
    retrieve: (id: string, params?: AddressRetrieveParams) => api.get(`/addresses/${id}`, params),
    tokens: (id: string) => api.get(`/addresses/${id}/tokens`),
    transactions: (id: string) => api.get(`/addresses/${id}/transactions`),
  };
};

export default addresses;
