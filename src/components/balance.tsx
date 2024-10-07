"use client";
import { useAccount, useReadContract } from "wagmi";
import { Box } from "@/components/ui/box";
import { CONTRACT_ADDRESSES } from "../utils/constants";
import { mainnet } from "viem/chains";
import { erc20Abi, formatUnits } from "viem";
import VerseLogo from "./ui/svg/verse-logo";

export default function Balance(props: React.HTMLAttributes<HTMLDivElement>) {
  const { isConnected, chainId, address } = useAccount();
  const { data } = useReadContract({
    chainId: chainId,
    address:
      CONTRACT_ADDRESSES[chainId ?? mainnet.id]?.VERSE_TOKEN_CONTRACT_ADDRESS,
    functionName: "balanceOf",
    abi: erc20Abi,
    args: [address!],
  });

  return (
    isConnected && (
      <Box {...props}>
        <h1 className="text-subtle text-center text-xl font-bold dark:text-white">
          Verse Balance
        </h1>
        <div className="mt-4 flex gap-4">
          {formatUnits(data ?? 0n, 18)} <VerseLogo size="20" />
        </div>
      </Box>
    )
  );
}
