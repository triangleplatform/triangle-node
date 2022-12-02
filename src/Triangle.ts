import accounts from "./resources/accounts";
import addresses from "./resources/addresses";
import contracts from "./resources/contracts";
import chains from "./resources/chains";
import networks from "./resources/networks";
import vaults from "./resources/vaults";
import wallets from "./resources/wallets";
import { Config } from "./types";
import webhooks from "./utils/webhooks";

const BASE_PATH = "/v1";
const HOST = "https://api.triangleplatform.com";
const PACKAGE_VERSION = require("../package.json").version;

class Triangle {
  accounts;
  addresses;
  contracts;
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

    this.accounts = accounts(config);
    this.addresses = addresses(config);
    this.contracts = contracts(config);
    this.chains = chains(config);
    this.networks = networks(config);
    this.vaults = vaults(config);
    this.wallets = wallets(config);
  }

  utils = {
    webhooks,
  };
}

export default Triangle;
