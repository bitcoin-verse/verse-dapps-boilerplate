"use client";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/lib/utils";
import WalletConnection from "./ui/svg/wallet-connection";
import { modal } from "@reown/appkit/react";

export default function Home() {
  const { isConnected, address } = useAccount();

  // Determine the button variant based on the connection status
  const buttonVariant = isConnected ? "secondary" : "default";

  return (
    <Button
      onClick={ async () => {
        await modal?.open();
      }}
      className="flex items-center gap-2 font-lt font-medium"
      variant={buttonVariant}
    >
      {isConnected && address ? (
        <>
          {shortenAddress(address)} <WalletConnection />
        </>
      ) : (
        "Connect"
      )}
    </Button>
  );
}
