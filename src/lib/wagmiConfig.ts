import { mainnet, polygon, sepolia } from "wagmi/chains";
import { cookieStorage, createStorage } from 'wagmi'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";


export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "b56e18d47c72ab683b10814fe9495694";

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, polygon, sepolia] as [AppKitNetwork, ...AppKitNetwork[]]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig