import Api from "../utils/Api";
import { Config, ExpandParams, PaginationParams } from "../types";

export interface AddressBalanceParams {
  network: string;
}
export interface AddressListParams extends ExpandParams, PaginationParams {
  network: string;
}
export interface AddressNftsParams {
  network: string;
}
export interface AddressRetrieveParams extends ExpandParams {
  network: string;
}
export interface AddressTokensParams {
  network: string;
}
export interface AddressTransfersParams extends ExpandParams, PaginationParams {
  network: string;
}
export interface AddressTxsParams extends ExpandParams, PaginationParams {
  network: string;
}

const addresses = (config: Config) => {
  const api = new Api(config);
  return {
    balance: (address: string, params: AddressBalanceParams) =>
      api.get(`/addresses/${address}/balance`, params),
    list: (params: AddressListParams) => api.get(`/addresses`, params),
    nfts: (address: string, params: AddressNftsParams) =>
      api.get(`/addresses/${address}/nfts`, params),
    retrieve: (address: string, params: AddressRetrieveParams) =>
      api.get(`/addresses/${address}`, params),
    tokens: (address: string, params: AddressTokensParams) =>
      api.get(`/addresses/${address}/tokens`, params),
    transfers: (address: string, params: AddressTransfersParams) =>
      api.get(`/addresses/${address}/transfers`, params),
    txs: (address: string, params: AddressTxsParams) =>
      api.get(`/addresses/${address}/txs`, params),
  };
};

export default addresses;
