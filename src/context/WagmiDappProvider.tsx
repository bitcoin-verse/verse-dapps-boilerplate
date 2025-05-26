/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { wagmiAdapter, projectId, networks } from "@/lib/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";

// Set up queryClient
const queryClient = new QueryClient();
// Set up metadata
const metadata = {
  name: "Verse Portal",
  description: "Verse Portal",
  url: "",
  icons: [`https://portal.verse.bitcoin.com/verse-icon.png`],
};

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  themeMode: "dark",
  featuredWalletIds: [
    "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
    // "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    // "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
    // "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  ],
  features: {
    swaps: false,
    onramp: false,
    send: false,
    email: false,
    socials: false,
  },
  connectorImages: {
    bitcoinCom: "https://portal.verse.com/logo/bcom-icon-48x48.png"
  }
});

function WagmiDappProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null | undefined;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig,
    cookies,
  );
  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiDappProvider;
