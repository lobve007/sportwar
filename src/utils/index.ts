import { Contract, providers } from "ethers";
import { isAddress } from "ethers/lib/utils";
import { Contract as MulContract } from "ethers-multicall";

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${address.substring(0, chars + 2)}...${address.substring(
    42 - chars
  )}`;
}

export function getContract(
  address: string,
  ABI: any,
  signer?: providers.JsonRpcSigner | null
): Contract | null {
  try {
    return new Contract(address, ABI, signer || undefined);
  } catch (e) {
    console.error("getContract", e);
    return null;
  }
}

export function getMulContract(address: string, ABI: any): MulContract | null {
  try {
    return new MulContract(address, ABI);
  } catch (e) {
    return null;
  }
}

export function isEqualString(a?: string | null, b?: string | null) {
  return a?.toLowerCase() === b?.toLowerCase();
}
