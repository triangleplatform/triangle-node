import Api from "../utils/Api";
import { Config } from "../types";

const chains = (config: Config) => {
  const api = new Api(config);
  return {
    list: () => api.get(`/chains`),
    retrieve: (id: string) => api.get(`/chains/${id}`),
  };
};

export default chains;
