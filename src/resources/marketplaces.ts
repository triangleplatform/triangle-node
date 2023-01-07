import Api from "../utils/Api";
import { Config } from "../types";

export interface MarketplaceListParams {}
export interface MarketplaceRetrieveParams {}

const marketplaces = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: MarketplaceListParams) => api.get(`/marketplaces`, params),
    retrieve: (id: string, params?: MarketplaceRetrieveParams) =>
      api.get(`/marketplaces/${id}`, params),
  };
};

export default marketplaces;
