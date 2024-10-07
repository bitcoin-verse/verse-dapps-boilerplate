const Header: React.FC = () => {
  return (
    <header className="mx-auto flex h-[7.5rem] w-full max-w-[16rem] flex-shrink-0 flex-col items-center justify-center gap-2 text-center text-white">
      <div className="dark:animate-logo-bg-dark dark:bg-default-logo-dark animate-logo-bg bg-default-logo mt-4 h-20 w-full max-w-60 bg-cover bg-center"></div>
    </header>
  );
};

export default Header;
