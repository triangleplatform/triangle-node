import Api from "../utils/Api";
import { Config, ExpandParams, PaginationParams } from "../types";

export interface BlockListParams extends ExpandParams, PaginationParams {
  network: string;
}
export interface BlockRetrieveParams extends ExpandParams {
  network: string;
}
export interface BlockTxsParams extends ExpandParams, PaginationParams {
  network: string;
}

const blocks = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params: BlockListParams) => api.get(`/blocks`, params),
    retrieve: (number: number, params: BlockRetrieveParams) => api.get(`/blocks/${number}`, params),
    txs: (number: number, params: BlockTxsParams) => api.get(`/blocks/${number}/txs`, params),
  };
};

export default blocks;
