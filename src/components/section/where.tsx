'use client'
import React from 'react'
import Image from 'next/image'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';
import Gmap from '@/components/ui/gmap'

export default function Where(props: HTMLProps<HTMLDivElement>) {
  const {className, ...rest} = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 pb-10 container mx-auto max-w-screen-lg'>
        <div id='where-title' className='flex justify-center text-6xl italic font-atrament text-red-900'>When and Where</div>
        <div className='grid grid-cols-2 gap-6 mt-10'>
          
          <div id='where-main-section'>
            NetMob 2024 will take place on 7-9 Oct 2024 at the Auditorium of the Worldbank headquarter, located in Washington, DC. U.S.A.
            <ul className='flex flex-col space-y-1'>
              <li><span className='font-medium'>Adresse</span>: 1818 H Street, Washington, DC 20433 U.S.A. </li>
              <li><span className='font-medium'>Worlk Bank</span>: <a href="https://www.worldbank.org/content/dam/meetings/external/springmeeting/SM24%20Campus%20Map-01.jpg">Campus Map</a> </li>
              <li><span className='font-medium'>Preston Auditorium</span>: <a href="https://www.worldbank.org/content/dam/annualweb/rooms/MC-Preston-01.jpg">Map</a></li>
              <li><span className='font-medium'>Conference dates</span>: October 7-9, 2024</li>
            </ul>
          </div>

          <div id='worldbank-hq' className='relative bg-white border rounded-xl overflow-hidden shadow-xl w-full h-80'>
            <Image
              src='/img/worldbank-hq.webp'
              alt='Worldbank headquarter'
              fill={true} 
              priority={true}
            />
          </div>
        </div>
        <Gmap className='mt-20 border rounded-xl overflow-hidden shadow-xl'/>
      </div>
    </div>
  )
}
