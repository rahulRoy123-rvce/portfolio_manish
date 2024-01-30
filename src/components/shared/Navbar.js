import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 font-hoefler-text'>
      <div className='md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex flex-col items-center gap-1 sm:flex-row'>
          <div className="flex flex-col text-[#707070] text-center sm:text-left">
            <div className="text-2xl sm:text-4xl">Manish </div>
            <div className="text-xl sm:text-2xl">Chandrashekhar</div>
          </div>
          <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex">
            <div className="border-b border-gray-500 sm:border-r sm:border-b-0 sm:h-24 w-full"></div>
            <div className="ml-4 text-[#707070] italic">
              {/* Your content goes here */}
              <p className="mt-2 text-sm sm:text-base">SERIAL ENTREPRENEUR</p>
              <p className="text-sm sm:mt-4 sm:text-base">CLIMATE-TECH</p>
            </div>
          </div>
        </div>

        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>

        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'block' : 'hidden md:block'}`}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl' key={link.name}>
                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <button className='btn text-gray-800 text-xl border-2 rounded-lg md:ml-8 font-semibold px-3 py-1 border-[#707070] duration-500 md:static'>Get Started</button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
