import { type Hash } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

interface ContractAddresses {
  VERSE_TOKEN_CONTRACT_ADDRESS: Hash;
  VERSE_STAKING_CONTRACT_ADDRESS: Hash;
}

export const CONTRACT_ADDRESSES: Record<number, ContractAddresses> = {
  [mainnet.id]: {
    VERSE_TOKEN_CONTRACT_ADDRESS: "0x249cA82617eC3DfB2589c4c17ab7EC9765350a18",
    VERSE_STAKING_CONTRACT_ADDRESS:
      "0xd920556b0f3522bB1257923292A256F1e3023e07",
  },
  [sepolia.id]: {
    VERSE_TOKEN_CONTRACT_ADDRESS: "0xa46c5c2aaca6eccd3213825272bf3ce5f15e1bf5",
    VERSE_STAKING_CONTRACT_ADDRESS:
      "0x2a70B50b26eA675f11c2812496dCE4538ab8f604",
  },
};

export const verseStakingEthData = {
  chainId: [mainnet.id],
  contractAddress:
    CONTRACT_ADDRESSES[mainnet.id]!.VERSE_STAKING_CONTRACT_ADDRESS,
  stakingToken: {
    token: CONTRACT_ADDRESSES[mainnet.id]!.VERSE_TOKEN_CONTRACT_ADDRESS,
    decimals: 18,
    abbr: "VERSE",
    label: "Verse",
    icon: "https://markets.bitcoin.com/images/coins/verse.png",
  },
  rewardToken: {
    token: CONTRACT_ADDRESSES[mainnet.id]!.VERSE_TOKEN_CONTRACT_ADDRESS,
    decimals: 18,
    abbr: "VERSE",
    label: "Verse",
    icon: "https://markets.bitcoin.com/images/coins/verse.png",
  },
};

export const verseStakingSepoliaData = {
  chainId: 11155111,
  contractAddress:
    CONTRACT_ADDRESSES[sepolia.id]!.VERSE_STAKING_CONTRACT_ADDRESS,
  stakingToken: {
    token: CONTRACT_ADDRESSES[sepolia.id]!.VERSE_TOKEN_CONTRACT_ADDRESS,
    decimals: 18,
    abbr: "VERSE",
    label: "Verse",
    icon: "https://markets.bitcoin.com/images/coins/verse.png",
  },
  rewardToken: {
    token: CONTRACT_ADDRESSES[sepolia.id]!.VERSE_TOKEN_CONTRACT_ADDRESS,
    decimals: 18,
    abbr: "VERSE",
    label: "Verse",
    icon: "https://markets.bitcoin.com/images/coins/verse.png",
  },
};

const stakingList = [verseStakingEthData, verseStakingSepoliaData];

export default stakingList;

export const DEFAULT_FIAT_CURRENCY = "USD";

export const RPC_URL_ETHEREUM = "https://eth.llamarpc.com	";

export const RPC_URL_SEPOLIA = "https://1rpc.io/sepolia";

export const RPC_URL_POLYGON = "https://polygon-rpc.com";

export const RPC_URL_HOLESKY = "https://ethereum-holesky-rpc.publicnode.com";
