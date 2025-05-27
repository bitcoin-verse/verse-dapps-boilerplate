import React from "react";
import LoaderIcon from "./svg/loader-icon";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 52 }) => {
  return (
      <div className="flex items-center justify-center">
        <LoaderIcon size={size} />
      </div>
  );
};

export default Loader;