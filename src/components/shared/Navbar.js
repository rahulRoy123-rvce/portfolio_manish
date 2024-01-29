import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        
        
        
        {name:"Home",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <div className="flex flex-col text-[#707070]">
                    <div className="text-6xl">Manish </div>
                    <div className="text-2xl">Chandrashekhar</div>
                </div>
                <div className="flex">
      <div className="border-r border-gray-500 h-24"></div>
      <div className="ml-4 text-[#707070]">
        {/* Your content goes here */}
        <p className="mt-2 ">SERIAL ENTREPRENEUR</p>
        <p className="mt-4">CLIMATE-TECH</p>
      </div>
    </div>
                {/* <span>Inscribe</span> */}
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-xl'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn text-gray-800 text-xl border-2 rounded-lg md:ml-8 font-semibold px-3 py-1 border-[#707070] duration-500 md:static'>Get Started</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;