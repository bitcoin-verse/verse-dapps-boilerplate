"use client";
import dynamic from "next/dynamic";

const Connect = dynamic(() => import("@/components/connect"), {
  ssr: false,
});
const Balance = dynamic(() => import("@/components/balance"), {
  ssr: false,
});
const Staking = dynamic(() => import("@/components/stake"), {
  ssr: false,
});
const Interactions = dynamic(() => import("@/components/interactions"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-items-center overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <main>
        <Connect />
        <Balance className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
        <Staking className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
        <Interactions className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
      </main>
    </div>
  );
}
