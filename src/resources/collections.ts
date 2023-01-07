import Api from "../utils/Api";
import { Config } from "../types";

export interface CollectionListParams {}
export interface CollectionRetrieveParams {}

const collections = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: CollectionListParams) => api.get(`/collections`, params),
    retrieve: (id: string, params?: CollectionRetrieveParams) =>
      api.get(`/collections/${id}`, params),
  };
};

export default collections;
