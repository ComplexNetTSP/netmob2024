import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';

export default function TravelArrangement({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div id="travel" className={cn('bg-slate-50', className)}>
      <div className='pt-20 pb-10 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        { /* Title */}
        <div id="travel-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Travel Arrangement</div>

        { /* Sub Title Visa */}
        <div id='visa' className='pt-10 flex text-4xl font-atrament'>Visa Support Letters</div>

        <div className='pt-5 text-justify'>
        As part of the visa application process, you may be required to include a visa support letter. To request a visa support letter, register for the conference and then fill out this form (<Link href="https://forms.gle/fDtihV2PQhU82CrQ6" className='font-semibold text-red-900'>https://forms.gle/fDtihV2PQhU82CrQ6</Link>).
        Visa support letters are answered in the order they are received. You will receive a PDF letter by email within 4-5 business days. Please note that we do not fax or mail visa support letters. Please print out your PDF letter and take it with you.
        Please note that Support Letter will only be sent to participants who have registered and paid for the Conference. Should participants withdraw from the conference after the issue of Support Letter, the consulate will be notified of the withdrawal accordingly.
        </div>
        
        { /* Sub Title Hotels */}
        <div id='visa' className='pt-10 flex text-4xl font-atrament'>Nearby Hotels</div>
        <div className='pt-5 text-justify'>
          We encourage you to secure your accommodation as soon as possible, as rooms are expected to fill up quickly.
          <ol className='pt-2 list-disc list-inside marker:text-red-700 space-y-2 font-medium'>
            <li><Link href="https://www.stateplaza.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing" className='underline decoration-red-400'>State plaza hotel: 2117 E St NW, Washington, DC 20037</Link></li>
            <li><Link href="https://www.ihg.com/vignettecollection/hotels/us/en/washington/wasvc/hoteldetail" className='underline decoration-red-400'>Yours Truly DC Hotel: 1143 New Hampshire Ave NW, Washington, DC 20037</Link></li>
            <li><Link href="https://www.placemakr.com/locations/washington-dc/2500-penn/?utm_source=GMB&utm_medium=organic&utm_campaign=GMB2500pn" className='underline decoration-red-400'>2500 Penn: 2500 Pennsylvania Avenue NW, Washington, DC 20037</Link></li>
            <li><Link href="https://www.melrosehoteldc.com/" className='underline decoration-red-400'>Melrose Georgetown Hotel: 2430 Pennsylvania Avenue NW, Washington, DC 20037</Link></li>
            <li><Link href="https://www.hilton.com/en/hotels/washshx-hampton-washington-dc-white-house/?SEO_id=GMB-AMER-HX-WASHSHX&y_source=1_MjA4MjY1Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" className='underline decoration-red-400'>Hampton Inn Washington: 1729 H St NW, Washington, DC 20006</Link></li>
          </ol>
        </div>
      </div>
    </div>
  )
}