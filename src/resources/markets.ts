import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface MarketListParams extends ExpandParams {}
export interface MarketRetrieveParams extends ExpandParams {}

const markets = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: MarketListParams) => api.get(`/markets`, params),
    retrieve: (id: string, params?: MarketRetrieveParams) => api.get(`/markets/${id}`, params),
  };
};

export default markets;
