import Api from "../utils/Api";
import { Config, ExpandParams, PaginationParams } from "../types";

export interface TxListParams extends ExpandParams, PaginationParams {
  network: string;
}
export interface TxRetrieveParams extends ExpandParams {
  network: string;
}

const txs = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params: TxListParams) => api.get(`/txs`, params),
    retrieve: (hash: string, params: TxRetrieveParams) => api.get(`/txs/${hash}`, params),
  };
};

export default txs;
