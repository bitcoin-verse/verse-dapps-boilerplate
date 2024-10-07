import React from "react";

interface DrawerContentProps {
  children: React.ReactNode;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-6 rounded-t-lg bg-[#250a2e]">
      <div className="mt-3">{children}</div>
    </div>
  );
};

export default DrawerContent;
