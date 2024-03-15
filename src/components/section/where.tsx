'use client'
import React from 'react'
import Image from 'next/image'
import Gmap from '@/components/ui/gmap'

export default function Where() {
  return (
    <div className='bg-slate-50'>
      <div className='pt-20 container mx-auto max-w-screen-lg'>
        <div id='where-title' className='flex justify-center text-4xl font-bold'>When and Where</div>
        <div className='grid grid-cols-2 gap-6 mt-10'>
          
          <div id='where-main-section'>
            NetMob 2023 will take place on 7-8 Oct 2024 at the Auditorium of the Worldbank headquarter, located in downtown Washington DC, USA.
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
