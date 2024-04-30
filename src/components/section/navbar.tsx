'use client';
import React from 'react'
import { cn, scrollIntoView } from '@/lib/utils'
import type { HTMLProps } from "react";
import NetmobDC from '../icons/netmob-dc'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Button } from '@/components/ui/button'

export default function Navbar(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  const style = cn("fixed top-0 w-screen z-50 bg-slate-900", className)
  const handleClick = (id: string) => {
    // close mobile menu if open
    const mobileMenu = document.getElementById("nav-mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.toggle("hidden"); 
    }
    scrollIntoView(id);
  }

  const handleMobileMenu = (e:any) => {
    // open close mobile menu
    e.preventDefault();
    const mobileMenu = document.getElementById("nav-mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  }

  return (
    <nav className={style} {...rest}>
      {/* Mavbar */}
      <div className="container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg flex justify-between items-center gap-5 text-lg font-normal mt-3 py-2 rounded-xl shadow-lg text-slate-50">
        <NetmobDC className="w-40 text-wihite" />
        <div id="primary-nav" className='hidden xl:flex gap-4'>
          <button className='ml-20' onClick={() => handleClick("conference")}>Conference</button>
          <button onClick={() => handleClick("where")}>When & Where</button>
          {/* Registration */}
          {/* <button onClick={() => handleClick("registration")}>Registration</button> */}
          <div onClick={() => handleClick("organizers")}>Organizers</div>
        </div>
        {/* Hamburger menu */}
        <button className='ml-auto text-white flex items-center xl:hidden' onClick={handleMobileMenu}>
          <RxHamburgerMenu size="1.7rem" />
        </button>
      </div>
      {/* Mobile menu */}
      <div id="nav-mobile-menu" className='hidden container mx-auto max-w-xs mb-5 flex-col text-white text-xl space-y-3'>
        <div className='flex justify-end' onClick={handleMobileMenu}><IoMdClose size="25px" className='mr-1'/></div>
        <button className='flex justify-normal' onClick={() => handleClick("conference")}>Conference</button>
        <button className='flex justify-normal' onClick={() => handleClick("where")}>When & Where</button>
        {/* <button className='flex justify-normal'>Program</button> */}
        {/* <button className='flex justify-normal' onClick={() => handleClick("registration")}>Registration</button> */}
        <button onClick={() => handleClick("organizers")} className='flex justify-normal'>Organizers</button>
      </div>
    </nav>
  )
}
