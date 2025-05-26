import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type Hash } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortenAddress(address: Hash) {
  if (!address) return "";
  return `${address.slice(0, 5)}...${address.slice(-3)}`;
}
