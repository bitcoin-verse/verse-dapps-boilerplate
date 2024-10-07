import React from "react";

interface DrawerWrapperProps {
  children: React.ReactNode;
}

const DrawerWrapper: React.FC<DrawerWrapperProps> = ({ children }) => {
  return (
    <div className="mask-image-gradient flex h-screen flex-1 flex-col items-center dark:bg-[#5c5d5e]">
      {children}
    </div>
  );
};

export default DrawerWrapper;
