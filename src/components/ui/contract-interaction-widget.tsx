import React, { useRef, type FC } from "react";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/ui/loader";
import { type UseWriteContractReturnType } from "wagmi";
import { type ContractInteractionStep } from "@/types";
import ReactCanvasConfetti from "react-canvas-confetti";
import { type TCanvasConfettiInstance } from "react-canvas-confetti/dist/types";

interface StepProps {
  text: string;
  status: UseWriteContractReturnType["status"];
}

const Step: React.FC<StepProps> = ({ text, status }) => {
  const getIcon = () => {
    switch (status) {
      case "pending":
        return <Loader size={20} />;
      case "idle":
        return (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500" />
        );
      case "success":
        return (
          <div className="h-5 w-5 rounded-full border-2 border-white bg-green-500" />
        );
      case "error":
        return (
          <div className="h-5 w-5 rounded-full border-2 border-white bg-red-500" />
        );
    }
  };

  const getStatusButton = () => {
    switch (status) {
      case "pending":
        return <Badge variant={"outline"}>Pending</Badge>;
      case "idle":
        return <Badge>Up Next</Badge>;
      case "success":
        return <Badge variant={"success"}>Done !</Badge>;
      case "error":
        return <Badge variant={"destructive"}>Error !</Badge>;
    }
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {getIcon()}
        <span className="text-sm dark:text-gray-200">{text}</span>
      </div>
      {getStatusButton()}
    </div>
  );
};

interface ContractInteractionWidgetProps {
  steps: ContractInteractionStep[];
  title?: string;
  bottomText?: string;
  backRoute?: string;
  backText?: string;
}

const ContractInteractionWidget: FC<ContractInteractionWidgetProps> = ({
  steps,
  title,
  bottomText,
}) => {
  const instance = useRef<TCanvasConfettiInstance>();

  const onInitHandler = ({ confetti }: { confetti: TCanvasConfettiInstance }) =>
    (instance.current = confetti);

  if (steps.every((step) => step.status === "success")) {
    void instance.current?.({
      particleCount: 50,
      spread: 70,
      origin: { x: 0.57, y: 0.5 },
    });
  }
  return (
    <div className="bg-body mx-auto w-11/12 max-w-md rounded-lg p-6 shadow-lg">
      <ReactCanvasConfetti onInit={onInitHandler} />
      <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
      <div className="mb-6 flex justify-center">
        {steps.every((step) => step.status === "success") ? (
          <>Success</>
        ) : (
          <>Transaction Process</>
        )}
      </div>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <Step key={index} text={step.text} status={step.status} />
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-gray-400">{bottomText}</p>
    </div>
  );
};

export default ContractInteractionWidget;
