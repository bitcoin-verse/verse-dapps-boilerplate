"use client";

import {
  useAccount,
  useEstimateGas,
  useWriteContract,
  useGasPrice,
} from "wagmi";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import {
  erc20Abi,
  type Hash,
  parseEther,
  formatEther,
  encodeFunctionData,
} from "viem";
import { CONTRACT_ADDRESSES } from "../utils/constants";

export default function Interaction(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const { isConnected, chainId, address } = useAccount();
  const [value, setValue] = useState<string>("");
  const [transferAddress, setTransferAddress] = useState<string>("");
  const { writeContract, data, status } = useWriteContract();
  const { data: gasPrice } = useGasPrice();

  const tokenContractAddress = chainId
    ? CONTRACT_ADDRESSES[chainId]?.VERSE_TOKEN_CONTRACT_ADDRESS
    : undefined;

  const { data: estimatedGas, isLoading: isEstimatingGas } = useEstimateGas({
    to: tokenContractAddress,
    data:
      tokenContractAddress && transferAddress && value
        ? encodeFunctionData({
            abi: erc20Abi,
            functionName: "transfer",
            args: [transferAddress as Hash, parseEther(value)],
          })
        : undefined,
  });

  const estimatedGasCost =
    gasPrice && estimatedGas ? formatEther(gasPrice * estimatedGas) : null;

  const handleInteraction = () => {
    if (!tokenContractAddress || !address) return;
    writeContract({
      chainId: chainId,
      abi: erc20Abi,
      address: tokenContractAddress,
      functionName: "transfer",
      args: [transferAddress as Hash, parseEther(value)],
    });
  };

  return (
    isConnected && (
      <Box {...props}>
        <h1 className="text-subtle text-center text-xl font-bold dark:text-white">
          ERC-20 Interaction
        </h1>
        <Input
          value={value}
          placeholder="Amount"
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          value={transferAddress}
          placeholder="Address"
          type="text"
          className="mt-2"
          onChange={(e) => setTransferAddress(e.target.value)}
        />
        <div className="mt-2 text-sm dark:text-gray-400">
          {isEstimatingGas && transferAddress && value
            ? "Estimating gas..."
            : estimatedGasCost
              ? `Estimated gas cost: ${estimatedGasCost} ETH`
              : "Enter amount and address to see gas estimate"}
        </div>
        <Button
          onClick={handleInteraction}
          disabled={!isConnected || !chainId || !address}
          className="mt-5 uppercase"
        >
          Interact
        </Button>
      </Box>
    )
  );
}
