import React from "react";

interface LoaderProps {
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({ size = 52 }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <div
          className="animate-spin rounded-full border-b-2 border-t-2 border-blue-500"
          style={{ height: `${size}px`, width: `${size}px` }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Loader;
