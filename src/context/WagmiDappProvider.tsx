"use client";

import { useIsWallet } from "@/hooks/useIsWallet";
import { createWagmiConfig } from "@/lib/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { type FC, type PropsWithChildren, useMemo } from "react";

import { WagmiProvider, type State } from "wagmi";

const queryClient = new QueryClient();

interface Props {
  initialState?: State;
}

const WagmiDappProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => {
  const isWallet = useIsWallet();
  const searchParams = useSearchParams();
  const chain = searchParams.get("chain");

  const wagmiConfig = useMemo(() => {
    return createWagmiConfig(isWallet, chain);
  }, [chain, isWallet]);

  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={initialState}
      reconnectOnMount={true}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiDappProvider;
