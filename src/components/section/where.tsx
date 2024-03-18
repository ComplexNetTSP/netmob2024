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
            NetMob 2024 will take place on 7-8 Oct 2024 at the Auditorium of the Worldbank headquarter, located in downtown Washington DC, USA.
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
