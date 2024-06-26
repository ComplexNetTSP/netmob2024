import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Sponsors() {
  return (
    <div className="bg-slate-50">
      <div className='pb-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div id="sponsors-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Sponsors</div>
        <div id='sponsors-logo' className='pt-10 flex justify-center items-center gap-8'>
          {/* <Wb className='w-20 h-20' /> */}
          <Link href="https://www.worldbank.org/en/research/dime"><Image src='/img/sponsors/dime.png' alt='DIME program logo' width={250} height={60} /></Link>
          <Link href="https://www.worldbank.org/en/home"><Image src='/img/sponsors/wb.png' alt='World Bank logo' width={250} height={60} /></Link>
          <Link href="https://www.telecom-sudparis.eu/en/"><Image src='/img/sponsors/tsp.webp' alt='Telecom SudParis logo' width={140} height={60} /></Link>
          <Link href="https://www.worldbank.org/en/programs/global-data-facility"><Image src='/img/sponsors/gdf.webp' alt='Golbal Data Facility program of World Bank logo' width={250} height={60} /></Link>
          <Link href="https://www.worldbank.org/en/home"><Image src='/img/sponsors/maece.webp' alt='World Bank logo' width={300} height={60} /></Link>
        </div>
      </div>
    </div>
  )
}
