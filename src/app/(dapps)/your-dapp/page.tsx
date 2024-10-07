"use client";

import { Box } from "@/components/ui/box";
import LoaderDots from "@/components/ui/loader-dots";
import { useAccount, useConnect } from "wagmi";
import { useEffect, useState } from "react";
import { mainnet, sepolia } from "viem/chains";
import { useParams } from "next/navigation";
import { Button } from "../../../components/ui/button";

export default function Home() {
  const { chain } = useParams<{ chain?: string }>();
  const { isConnected, status } = useAccount();
  const { connect, connectors } = useConnect();

  const [initialLoad, setInitialLoad] = useState(true);

  const handleConnectWallet = () => {
    if (connectors[0]) {
      connect({
        connector: connectors[0],
        chainId: chain === "sepolia" ? sepolia.id : mainnet.id,
      });
    }
  };

  useEffect(() => {
    if (initialLoad && connectors[0] && status === "disconnected") {
      connect({
        connector: connectors[0],
        chainId: chain === "sepolia" ? sepolia.id : mainnet.id,
      });
      setInitialLoad(false); // Prevent future re-connection attempts
    }
  }, [status, isConnected, initialLoad, connectors, connect, chain]);

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
