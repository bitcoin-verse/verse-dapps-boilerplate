"use client";

import React, { useMemo } from "react";
import { createConfig, fallback, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Chain, mainnet, sepolia } from "wagmi/chains";
import {
  injected,
  walletConnect,
  WalletConnectParameters,
} from "wagmi/connectors";
import { structuralSharing } from "@wagmi/core/query";

import { RPC_URL_ETHEREUM, RPC_URL_SEPOLIA } from "../utils/constants";
import { useParams, useSearchParams } from "next/navigation";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing,
    },
  },
});

const walletConnectConfig: WalletConnectParameters = {
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID ?? "",
  metadata: {
    name: "Verse Dapps",
    description: "Verse Dapps",
    url: "",
    icons: [`https://airdrop.verse.bitcoin.com/verse-icon.png`],
  },
  qrModalOptions: {
    themeMode: "dark",
    themeVariables: {
      "--wcm-font-family": "Barlow, sans-serif",
      "--wcm-background-color": "#0F1823",
    },
    explorerRecommendedWalletIds: [
      "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
      "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
      "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    ],
  },
};

export function ProvidersWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const chain = searchParams.get("chain");
  const origin = searchParams.get("origin");
  const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECTID ?? "";
  const getChain = (chain: string): readonly [Chain, ...Chain[]] => {
    if (chain === "sepolia") return [sepolia];
    return [mainnet];
  };

  const connectors = [injected(), walletConnect({ ...walletConnectConfig })];

  const wagmiConfig = useMemo(() => {
    return createConfig({
      chains: getChain(chain ?? "mainnet"),
      transports: {
        [mainnet.id]: fallback([http(RPC_URL_ETHEREUM), http()]),
        [sepolia.id]: fallback([http(RPC_URL_SEPOLIA), http()]),
      },
      connectors,
    });
  }, [chain, projectId]);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
