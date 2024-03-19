'use client';
import React from 'react'
import { cn, scrollIntoView } from '@/lib/utils'
import type { HTMLProps } from "react";
import NetmobDC from '../icons/netmob-dc'

export default function Navbar(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  const style = cn("flex fixed top-0 w-screen z-50", className)
  const handleClick = (id:string) => scrollIntoView(id);

  return (
    <header className={style} {...rest}>
      <div className="container mx-auto max-w-screen-lg flex justify-center items-center gap-5  text-lg font-normal mt-3 py-2 bg-slate-900 rounded-xl shadow-lg text-slate-50">
        <NetmobDC className="w-40 text-wihite" />
        <button className='ml-20' onClick={() => handleClick("conference")}>Conference</button>
        <button onClick={() => handleClick("where")}>When & Where</button>
        <div>Program</div>
        <div>Registration</div>
        <div>Organizers</div>
      </div>
    </header>
  )
}
