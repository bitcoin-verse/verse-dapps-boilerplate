import { type UseWriteContractReturnType } from "wagmi";

export interface ContractInteractionStep {
  text: string;
  status: UseWriteContractReturnType["status"];
}
