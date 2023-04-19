import Api from "../utils/Api";
import { Config, PaginationParams } from "../types";

export interface VaultCreateParams {
  name: string;
}
export interface VaultListParams extends PaginationParams {}

const vaults = (config: Config) => {
  const api = new Api(config);
  return {
    create: (params: VaultCreateParams) => api.post(`/vaults`, params),
    list: (params?: VaultListParams) => api.get(`/vaults`, params),
    retrieve: (id: string) => api.get(`/vaults/${id}`),
  };
};

export default vaults;
