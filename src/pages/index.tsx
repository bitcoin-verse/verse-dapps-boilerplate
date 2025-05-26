import Balance from "@/components/balance";
import Staking from "@/components/stake";
import Interactions from "@/components/interactions";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-items-center overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <main>
        <Balance className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
        <Staking className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
        <Interactions className="mt-4 duration-500 animate-in fade-in-50 zoom-in-90" />
      </main>
    </div>
  );
}
