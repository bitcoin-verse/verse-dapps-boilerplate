"use client";

import { Box } from "@/components/ui/box";
import LoaderDots from "@/components/ui/loader-dots";
import { useAccount, useConnect } from "wagmi";
import { useEffect } from "react";
import { mainnet, sepolia } from "viem/chains";
import { useParams } from "next/navigation";

export default function Home() {
  const { chain } = useParams<{ chain?: string }>();
  const { isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (!isConnected && !isConnecting && connectors[0]) {
      connect({
        connector: connectors[0],
        chainId: chain === "sepolia" ? sepolia.id : mainnet.id,
      });
    }
  }, [isConnected, isConnecting, connectors, connect, chain]);

  if (!isConnected && !isConnecting) {
    return <LoaderDots />;
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main>
        <Box>Your cool features</Box>
      </main>
    </div>
  );
}
