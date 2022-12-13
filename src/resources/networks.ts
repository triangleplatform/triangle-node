import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface NetworkListParams extends ExpandParams {}
export interface NetworkRetrieveParams extends ExpandParams {}

const networks = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: NetworkListParams) => api.get(`/networks`, params),
    retrieve: (id: string, params?: NetworkRetrieveParams) => api.get(`/networks/${id}`, params),
  };
};

export default networks;
