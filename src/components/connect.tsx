"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useIsWallet } from "@/hooks/useIsWallet";

export default function Home() {
  const { isConnected, chainId } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const isWallet = useIsWallet();

  useEffect(() => {
    if (isConnected) {
      console.log("Connected to chain", chainId);
    }
  }, [isConnected, chainId]);

  return (
    <Box className="duration-500 animate-in fade-in-50 zoom-in-90">
      <h1 className="text-subtle text-center text-xl font-bold dark:text-white">
        Verse Boilerplate
      </h1>
      <Button
        onClick={() => {
          if (isConnected) {
            disconnect();
          } else {
            const connector = isWallet
              ? connectors.find((c) => c.id === "walletConnect")
              : connectors[0];
            if (connector) connect({ connector });
          }
        }}
        className="mt-5 uppercase"
      >
        {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
      </Button>
    </Box>
  );
}
