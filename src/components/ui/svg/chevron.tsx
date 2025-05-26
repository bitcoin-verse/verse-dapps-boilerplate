import { ChevronDown } from "lucide-react";

interface ChevronButtonProps {
  direction?: "up" | "down" | "left" | "right";
  color?: string; // Accept tailwind text color class like 'text-black', 'text-white'
  size?: number;
}

const directionMap = {
  down: "rotate-0",
  up: "rotate-180",
  left: "rotate-90",
  right: "-rotate-90",
};

const Chevron: React.FC<ChevronButtonProps> = ({
  direction = "down",
  color = "text-white",
  size = 20,
}) => {
  return (
    <ChevronDown
      className={`transition-transform ${directionMap[direction]} ${color}`}
      size={size}
    />
  );
};

export default Chevron;
