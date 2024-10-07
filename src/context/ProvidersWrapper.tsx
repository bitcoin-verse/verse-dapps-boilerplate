"use client";

import React, { useMemo } from "react";
import { createConfig, fallback, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type Chain, holesky, mainnet, polygon, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { structuralSharing } from "@wagmi/core/query";

import {
  RPC_URL_POLYGON,
  RPC_URL_HOLESKY,
  RPC_URL_ETHEREUM,
  RPC_URL_SEPOLIA,
} from "../utils/constants";
import { useParams } from "next/navigation";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      structuralSharing,
    },
  },
});

export function ProvidersWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { chain } = useParams<{ chain?: string }>();

  const getChain = (chain: string): readonly [Chain, ...Chain[]] => {
    if (chain === "sepolia") return [sepolia];
    return [mainnet];
  };

  const wagmiConfig = useMemo(() => {
    return createConfig({
      chains: getChain(chain ?? "mainnet"),
      transports: {
        [polygon.id]: fallback([http(RPC_URL_POLYGON), http()]),
        [holesky.id]: fallback([http(RPC_URL_HOLESKY), http()]),
        [mainnet.id]: fallback([http(RPC_URL_ETHEREUM), http()]),
        [sepolia.id]: fallback([http(RPC_URL_SEPOLIA), http()]),
      },
      connectors: [injected()],
    });
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
