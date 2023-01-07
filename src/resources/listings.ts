import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface ListingListParams extends ExpandParams {}
export interface ListingRetrieveParams extends ExpandParams {}

const listings = (config: Config) => {
  const api = new Api(config);
  return {
    list: (params?: ListingListParams) => api.get(`/listings`, params),
    retrieve: (id: string, params?: ListingRetrieveParams) => api.get(`/listings/${id}`, params),
  };
};

export default listings;
