"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  const { isConnected, chainId } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

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
            if (connectors.length && connectors[0])
              connect({ connector: connectors[0] });
          }
        }}
        className="mt-5 uppercase"
      >
        {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
      </Button>
    </Box>
  );
}
