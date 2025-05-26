'use client'
import Connect from "./connect-nav";
import Chevron from "./ui/svg/chevron";
import VerseIcon from "./ui/svg/verse-icon";

const Header: React.FC = () => {
  return (
    <header className="relative mx-auto flex h-[5.25rem] w-full items-center justify-between px-4">
      <a
        href="https://verse.bitcoin.com"
        className="flex cursor-pointer items-center"
      >
        <span className="hidden md:inline">
          <Chevron direction="left" />
        </span>
        <div className="dark:bg-default-logo-dark bg-default-logo hidden h-[36px] w-[128px] animate-logo-bg bg-cover bg-center dark:animate-logo-bg-dark md:inline"></div>
        <span className="md:hidden">
          <VerseIcon />
        </span>
      </a>
      <div className="absolute left-1/2 hidden -translate-x-1/2 font-lt text-[24px] font-semibold leading-[100%] text-white md:inline">
        Verse Dapp Homepage
      </div>
      <div className="flex gap-2">
        <Connect />
      </div>
    </header>
  );
};

export default Header;
