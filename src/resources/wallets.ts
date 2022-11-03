import Api from "../utils/Api";
import { Config, ExpandParams } from "../types";

export interface WalletCreateParams {
  name: string;
  network: string;
  vault: string;
}
export interface WalletListParams extends ExpandParams {
  vault?: string;
}
export interface WalletRetrieveParams extends ExpandParams {}
export interface WalletSendParams {
  amount: string;
  to: string;
}
export interface WalletSendNftParams {
  contract: string;
  to: string;
  token_id: string;
}
export interface WalletSendTokenParams {
  amount: string;
  contract: string;
  to: string;
}
export interface WalletSendRawTransactionParams {
  transaction: string;
}
export interface WalletSendTransactionParams {
  serialized: string;
}
export interface WalletSignMessageParams {
  message: string;
}
export interface WalletSignTransactionParams {
  serialized: string;
}
export interface WalletSignTypedDataParams {
  encoded: string;
}

const wallets = (config: Config) => {
  const api = new Api(config);
  return {
    balance: (id: string) => api.get(`/wallets/${id}/balance`),
    create: (params: WalletCreateParams) => api.post(`/wallets`, params),
    list: (params?: WalletListParams) => api.get(`/wallets`, params),
    nfts: (id: string) => api.get(`/wallets/${id}/nfts`),
    retrieve: (id: string, params?: WalletRetrieveParams) => api.get(`/wallets/${id}`, params),
    send: (id: string, params: WalletSendParams) => api.post(`/wallets/${id}/send`, params),
    sendNft: (id: string, params: WalletSendNftParams) =>
      api.post(`/wallets/${id}/send_nft`, params),
    sendRawTransaction: (id: string, params: WalletSendRawTransactionParams) =>
      api.post(`/wallets/${id}/send_raw_transaction`, params),
    sendToken: (id: string, params: WalletSendTokenParams) =>
      api.post(`/wallets/${id}/send_token`, params),
    sendTransaction: (id: string, params: WalletSendTransactionParams) =>
      api.post(`/wallets/${id}/send_transaction`, params),
    signMessage: (id: string, params: WalletSignMessageParams) =>
      api.post(`/wallets/${id}/sign_message`, params),
    signTransaction: (id: string, params: WalletSignTransactionParams) =>
      api.post(`/wallets/${id}/sign_transaction`, params),
    signTypedData: (id: string, params: WalletSignTypedDataParams) =>
      api.post(`/wallets/${id}/sign_typed_data`, params),
    tokens: (id: string) => api.get(`/wallets/${id}/tokens`),
  };
};

export default wallets;
