import React from 'react'
import Image from 'next/image'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';
import Gmap from '@/components/ui/gmap'
import Link from 'next/link';

export default function Where(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div id='where-title' className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>When and Where</div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id='where-main-section' className='mt-10 flex flex-col'>
            <p className='text-left'>
              NetMob 2024 will take place on 7-9 Oct 2024 at the <Link href="https://www.worldbank.org/content/dam/annualweb/rooms/MC-Preston-01.jpg">Preston Auditorium</Link> located inside <Link href="https://www.worldbank.org/content/dam/meetings/external/springmeeting/SM24%20Campus%20Map-01.jpg">The World Bank Group Main Campus</Link> in Washington, DC. U.S.A.
            </p>
            <div className='flex flex-col mt-5 space-y-3'>
              <div><span className='font-medium'>The World Bank Group Main Campus visitor entrance</span>: <Link href="https://www.google.fr/maps/place/752+18th+St+NW,+Washington,+DC+20006,+%C3%89tats-Unis/@38.899122,-77.0430488,19z/data=!3m1!4b1!4m6!3m5!1s0x89b7b7b220d64815:0xf49c452c52ca58f4!8m2!3d38.899121!4d-77.0418324!16s%2Fg%2F11y1f_426r?entry=ttu">752 18th St NW, Washington, DC 20006, USA</Link></div>
              <div><span className='font-medium'>Conference dates</span>: October 7-9, 2024</div>
              <div>
                <span className='font-medium'>Nearby metro stations</span>: 
                <ul className="list-disc ml-4">
                  <li><Link href="https://washington.org/navigating-dc-metro">Farragut West (the blue, orange and silver line)</Link>
                  </li>
                  <li><Link href="https://washington.org/navigating-dc-metro"> Farragut North (Red Line)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id='worldbank-hq' className='hidden lg:flex relative mt-10 bg-white border rounded-xl overflow-hidden shadow-xl w-full h-80'>
            <Image
              src='/img/worldbank-hq.webp'
              alt='Worldbank headquarter'
              fill={true}
              priority={true}
            />
          </div>
        </div>
        <Gmap className='mt-10 border rounded-xl overflow-hidden shadow-xl' />
      </div>
    </div>
  )
}
