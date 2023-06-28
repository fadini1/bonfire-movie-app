import { useCallback, useState, useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BiBell, BiSearch } from 'react-icons/bi';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';

import Image from "next/image";

import NavbarItem from "./NavbarItem";
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';
import { VscSignOut } from 'react-icons/vsc';
import { signOut } from 'next-auth/react';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-50">
      <div className={`px-8 md:px-12 lg:px-16 py-5 flex items-center
      transition duration-500 ease-in-out
      ${showBackground ? 'bg-zinc-900' : ''}`}>
        <Image
          className="lg:h-[46px] lg:w-[46px] sm:h-11 sm:w-11 h-10 w-10 
          bg-cyan-400 rounded-full cursor-pointer hover:bg-cyan-100 
          transition duration-300 sm:p-[7px] p-1.5" 
          src='/images/bonfirelogo.png'
          alt="Home_Logo"
          width={2000}
          height={2000}
        />
        <div className="md:flex hidden tracking-[12px] text-[1.65rem] ml-5">
          <p className="site-name">B</p>
          <p className="site-name">O</p>
          <p className="site-name">N</p>
          <p className="site-name">F</p>
          <p className="site-name">I</p>
          <p className="site-name">R</p>
          <p className="site-name">E</p>
        </div>
        {/* <div className="ml-10 gap-5 hidden xl:flex xl:flex-row">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="Trending" />
          <NavbarItem label="My Watchlist" />
          <NavbarItem label="Search by Language" />
        </div> */}
        {/* <div 
        onClick={toggleMobileMenu}
        className="sm:bg-cyan-500 sm:hover:bg-cyan-300 transition
        duration-300 lg:py-[5px] md:py-1 py-[3px] sm:pl-5 pr-3 rounded-full flex gap-2 items-center 
        justify-center relative cursor-pointer xl:hidden sm:ml-3 ml-0.5">
          <div className="sm:flex hidden use-trebuchet
          text-black text-lg">
            Browse
          </div>
          <BsChevronDown 
            className={`sm:h-4 sm:w-4 h-5 w-5 transition duration-300 
            sm:ml-0 ml-2 sm:text-black text-white mr-1 rounded-full
            sm:hover:bg-transparent sm:hover:opacity-100 hover:opacity-70
            ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} 
          />
          <MobileMenu
            visible={showMobileMenu}
          />
        </div> */}
        <div className='flex gap-2 items-center justify-center ml-auto'>
          {/* <div className='text-zinc-300 hover:text-zinc-400 cursor-pointer
          transition duration-300'>
            <BiSearch className='lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-6 w-6 mt-0.5' />
          </div>
          <div className='text-zinc-300 hover:text-zinc-400 cursor-pointer
          transition duration-300'>
            <BiBell className='lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-6 w-6' />
          </div> */}
          <div className='flex items-center gap-2 cursor-pointer relative'>
            {/* {!showAccountMenu && (
              <RiMenuUnfoldFill 
              onClick={toggleAccountMenu} 
              className="lg:h-[30px] lg:w-[30px] sm:h-7 sm:w-7 h-6 w-6 
              transition duration-300 hover:text-zinc-400" 
              />
            )}
            {showAccountMenu && (
              <RiMenuFoldFill
              onClick={toggleAccountMenu} 
              className="lg:h-[30px] lg:w-[30px] sm:h-7 sm:w-7 h-6 w-6 
              transition duration-300 hover:text-zinc-400" 
              />
            )} */}
            {/* <Image 
              className='lg:h-8 lg:w-8 sm:h-7 sm:w-7 h-6 w-6 rounded-full
              hover:opacity-80 transition duration-300'
              src='/images/default-blue.png'
              alt='profileImageNavbar'
              width={2000}
              height={2000}
            /> */}
            <div className="flex gap-2 items-center justify-center accountMenu 
            rounded-lg">
              <VscSignOut 
                className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
              />
              <div
              onClick={() => signOut()} 
              className="use-trebuchet lg:text-lg sm:text-base text-sm">
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;