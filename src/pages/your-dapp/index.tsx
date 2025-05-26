"use client";

import { Box } from "@/components/ui/box";
import LoaderDots from "@/components/ui/loader-dots";
import { useAccount, useConnect } from "wagmi";
import { useEffect } from "react";
import { mainnet, sepolia } from "viem/chains";
import { Button } from "@/components/ui/button";
import { useIsWallet } from "@/hooks/useIsWallet";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const chain = searchParams.get("chain");
  const { isConnected, status } = useAccount();
  const { connect, connectors } = useConnect();
  const isWallet = useIsWallet();

  const handleConnectWallet = () => {
    const connector = connectors.find((c) => c.id === "walletConnect");
    if (connector) {
      connect({
        connector: connector,
        chainId: chain === "sepolia" ? sepolia.id : mainnet.id,
      });
    }
  };

  useEffect(() => {
    const connector = isWallet
      ? connectors.find((c) => c.id === "walletConnect")
      : connectors[0];
    if (connector && status === "disconnected") {
      connect({
        connector: connector,
        chainId: chain === "sepolia" ? sepolia.id : mainnet.id,
      });
    }
  }, [status, isConnected, connectors, connect, chain, isWallet]);

  if (status === "connecting" || status === "reconnecting") {
    return <LoaderDots />;
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main>
        {isConnected && <Box>Your cool features</Box>}
        {!isConnected && (
          <Box className="text-center">
            {" "}
            ⚠️ Wallet not connected
            <Button className="mt-3" onClick={() => handleConnectWallet()}>
              Connect Wallet
            </Button>
          </Box>
        )}
      </main>
    </div>
  );
}
