import accounts from "./resources/accounts";
import addresses from "./resources/addresses";
import blocks from "./resources/blocks";
import contracts from "./resources/contracts";
import chains from "./resources/chains";
import networks from "./resources/networks";
import txs from "./resources/txs";
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
  blocks;
  contracts;
  chains;
  networks;
  txs;
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
    this.blocks = blocks(config);
    this.contracts = contracts(config);
    this.chains = chains(config);
    this.networks = networks(config);
    this.txs = txs(config);
    this.vaults = vaults(config);
    this.wallets = wallets(config);
  }

  utils = {
    webhooks,
  };
}

export default Triangle;
