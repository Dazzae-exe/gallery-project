import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="w-full h-20 overflow-hidden">
      <div className="container mx-auto w-full h-full flex items-center justify-between px-2 bg-gray-200 dark:bg-zinc-700 rounded-2xl">
        <h1 className="text-2xl font-extrabold">Pickasso</h1>
        <p className="md:hidden block"><Bars3Icon className='w-5 h-5' /></p>
        <p className="hidden md:block">Menu</p>
      </div>
    </header>
  );
};

export default Header;
