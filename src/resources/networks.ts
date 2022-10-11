import Api from "../utils/Api";
import { Config } from "../types";

const networks = (config: Config) => {
  const api = new Api(config);
  return {
    list: () => api.get(`/networks`),
    retrieve: (id: string) => api.get(`/networks/${id}`),
  };
};

export default networks;
