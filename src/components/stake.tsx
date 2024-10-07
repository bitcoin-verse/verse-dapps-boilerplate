"use client";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { StakingABI } from "../contracts/stakingABI";
import { CONTRACT_ADDRESSES } from "../utils/constants";
import { erc20Abi, parseEther } from "viem";
import ContractInteractionWidget from "./ui/contract-interaction-widget";

export default function Staking(props: React.HTMLAttributes<HTMLDivElement>) {
  const { isConnected, chainId, address } = useAccount();
  const [value, setValue] = useState<string>("");
  const [hasAllowance, setHasAllowance] = useState<boolean>(false);
  const [showInteraction, setShowInteraction] = useState<boolean>(false);
  const {
    writeContract: writeContractDeposit,
    data: dataDeposit,
    status: statusDeposit,
  } = useWriteContract();
  const {
    writeContract: writeContractApproval,
    data: dataApproval,
    status: statusApproval,
  } = useWriteContract();

  const { data, status } = useWaitForTransactionReceipt({
    confirmations: 1,
    hash: dataDeposit,
  });

  const tokenContractAddress = chainId
    ? CONTRACT_ADDRESSES[chainId]?.VERSE_TOKEN_CONTRACT_ADDRESS
    : undefined;
  const stakingContractAddress = chainId
    ? CONTRACT_ADDRESSES[chainId]?.VERSE_STAKING_CONTRACT_ADDRESS
    : undefined;

  const { data: allowanceData } = useReadContract({
    address: tokenContractAddress,
    abi: StakingABI,
    functionName: "allowance",
    args:
      address && stakingContractAddress
        ? [address, stakingContractAddress]
        : undefined,
    chainId: chainId,
  });

  const handleStaking = () => {
    if (stakingContractAddress && tokenContractAddress) {
      if ((allowanceData ?? 0n) > parseEther(value)) {
        setHasAllowance((allowanceData ?? 0n) > parseEther(value));
        writeContractDeposit({
          address: stakingContractAddress,
          abi: StakingABI,
          functionName: "farmDeposit",
          args: [parseEther(value)],
          chainId: chainId,
        });
      } else {
        writeContractApproval({
          address: tokenContractAddress,
          abi: erc20Abi,
          functionName: "approve",
          args: [stakingContractAddress, parseEther(value)],
          chainId: chainId,
        });
      }
    }
  };

  return (
    isConnected && (
      <Box {...props}>
        <h1 className="text-subtle text-center text-xl font-bold dark:text-white">
          Staking
        </h1>
        <Input
          value={value}
          placeholder="Amount"
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          disabled={
            !isConnected ||
            !chainId ||
            !address ||
            !value ||
            statusDeposit === "pending" ||
            statusApproval === "pending"
          }
          onClick={() => {
            setShowInteraction(true);
            handleStaking();
          }}
          className="mt-5 uppercase"
        >
          Stake
        </Button>
        {showInteraction && (
          <ContractInteractionWidget
            steps={[
              {
                text: "Approve",
                status: hasAllowance ? "success" : statusApproval,
              },
              {
                text: "Confirm Stake",
                status: statusDeposit,
              },
              {
                text: "Confirmation Receipt",
                status: statusDeposit === "success" ? status : "idle",
              },
            ]}
          />
        )}
      </Box>
    )
  );
}
