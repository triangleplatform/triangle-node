import Api from "../utils/Api";
import { Config } from "../types";

export interface VaultCreateParams {
  name: string;
}

const vaults = (config: Config) => {
  const api = new Api(config);
  return {
    create: (params: VaultCreateParams) => api.post(`/vaults`, params),
    list: () => api.get(`/vaults`),
    retrieve: (id: string) => api.get(`/vaults/${id}`),
  };
};

export default vaults;
