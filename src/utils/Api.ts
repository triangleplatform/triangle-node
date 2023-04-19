import fetch from "node-fetch";
import qs from "qs";

import { Config } from "../types";

class Api {
  #config: Config;

  constructor(config: Config) {
    this.#config = config;
  }

  async get(url: string, params?: any) {
    const response = await fetch(
      `${this.#config.path}${url}${
        params ? `?${qs.stringify(params, { encode: false, skipNulls: true })}` : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.#config.secret}`,
          "Content-Type": "application/json",
          "User-Agent": `Triangle/1.0 TriangleNode/${this.#config.packageVersion}`,
        },
        method: "GET",
      }
    );
    const json = await response.json();
    if (!response.ok) {
      throw json;
    }
    return json;
  }

  async post(url: string, body?: any) {
    const response = await fetch(`${this.#config.path}${url}`, {
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Authorization: `Bearer ${this.#config.secret}`,
        "Content-Type": "application/json",
        "User-Agent": `Triangle/1.0 TriangleNode/${this.#config.packageVersion}`,
      },
      method: "POST",
    });
    const json = await response.json();
    if (!response.ok) {
      throw json;
    }
    return json;
  }
}

export default Api;
