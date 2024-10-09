"use client";

import React, { type FC, type PropsWithChildren } from "react";
import { type State } from "wagmi";

import WagmiDappProvider from "./WagmiDappProvider";

interface Props {
  initialState?: State;
}

const Providers: FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => {
  return (
    <WagmiDappProvider initialState={initialState}>
      {children}
    </WagmiDappProvider>
  );
};

export default Providers;
