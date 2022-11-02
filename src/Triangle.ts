import addresses from "./resources/addresses";
import chains from "./resources/chains";
import networks from "./resources/networks";
import vaults from "./resources/vaults";
import wallets from "./resources/wallets";
import { Config } from "./types";

const BASE_PATH = "/v1";
const HOST = "https://api.triangleplatform.com";
const PACKAGE_VERSION = require("../package.json").version;

class Triangle {
  addresses;
  chains;
  networks;
  vaults;
  wallets;

  constructor(secret: string, _config: any = {}) {
    const config: Config = {
      packageVersion: PACKAGE_VERSION,
      path: `${_config.host !== undefined ? _config.host : HOST}${BASE_PATH}`,
      secret: secret,
    };

    this.addresses = addresses(config);
    this.chains = chains(config);
    this.networks = networks(config);
    this.vaults = vaults(config);
    this.wallets = wallets(config);
  }
}

export default Triangle;
