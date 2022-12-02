import { createHmac, timingSafeEqual } from "crypto";

const DEFAULT_TOLERANCE_IN_SECONDS = 5 * 60; // 5 minutes

const webhooks = {
  construct: (
    body: Buffer,
    header: string,
    secret: string,
    tolerance: number = DEFAULT_TOLERANCE_IN_SECONDS
  ): any => {
    webhooks.verify(body, header, secret, tolerance);
    return JSON.parse(body.toString("utf8"));
  },
  verify: (
    body: Buffer,
    header: string,
    secret: string,
    tolerance: number = DEFAULT_TOLERANCE_IN_SECONDS
  ): boolean => {
    const { timestamp, signature } = header.split(",").reduce(
      (acc, cur) => {
        const [key, value] = cur.split("=");
        if (key === "t") {
          return { ...acc, timestamp: parseInt(value, 10) };
        }
        if (key === "sig") {
          return { ...acc, signature: value };
        }
        return acc;
      },
      { timestamp: -1, signature: "" }
    );
    if (timestamp === -1) {
      throw { message: "Missing timestamp." };
    }
    if (signature === "") {
      throw { message: "Missing signature." };
    }

    const age = Math.abs(Math.floor(Date.now() / 1000) - timestamp);
    if (age > tolerance) {
      throw { message: "Tolerance exceeded." };
    }

    const payload = `${timestamp}.${body.toString("utf8")}`;
    const computed = createHmac("sha256", secret).update(payload, "utf8").digest("hex");

    const expected = Buffer.from(signature);
    const actual = Buffer.from(computed);
    if (expected.length !== actual.length) {
      throw { message: "Signature mismatch." };
    }
    if (!timingSafeEqual(expected, actual)) {
      throw { message: "Signature mismatch." };
    }

    return true;
  },
};

export default webhooks;
