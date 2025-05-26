"use client";

import React, { type FC, type PropsWithChildren } from "react";

import WagmiDappProvider from "./WagmiDappProvider";

interface Props {
  cookies?: string | null | undefined;
}

const Providers: FC<PropsWithChildren<Props>> = ({ children, cookies }) => {
  return <WagmiDappProvider cookies={cookies}>{children}</WagmiDappProvider>;
};

export default Providers;
