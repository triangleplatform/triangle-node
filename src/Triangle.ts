import accounts from "./resources/accounts";
import addresses from "./resources/addresses";
import blocks from "./resources/blocks";
import chains from "./resources/chains";
import collections from "./resources/collections";
import contracts from "./resources/contracts";
import cryptocurrencies from "./resources/cryptocurrencies";
import exchanges from "./resources/exchanges";
import listings from "./resources/listings";
import marketplaces from "./resources/marketplaces";
import markets from "./resources/markets";
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
  chains;
  collections;
  contracts;
  cryptocurrencies;
  exchanges;
  listings;
  marketplaces;
  markets;
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
    this.chains = chains(config);
    this.collections = collections(config);
    this.contracts = contracts(config);
    this.cryptocurrencies = cryptocurrencies(config);
    this.exchanges = exchanges(config);
    this.listings = listings(config);
    this.marketplaces = marketplaces(config);
    this.markets = markets(config);
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
