import { useSearchParams } from "next/navigation";

export const useIsWallet = () => {
  const search = useSearchParams();
  const isWallet = search.get("origin") === "wallet";

  return isWallet;
};
