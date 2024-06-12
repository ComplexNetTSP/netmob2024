'use client'
import React from 'react'
import { APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { RiDirectionFill } from "react-icons/ri";

export default function Gmap({className, ...props}:React.HTMLAttributes<HTMLDivElement>) {
  const style = cn('relative h-[50dvh] w-full', className)
  const center = {lat: 38.89917264789075, lng: -77.04184558965937}
  const mapId = "36aeb96a1b269fe9";
  return (
    <div className={style}>
      <div className='absolute start-0 z-10 w-full flex justify-center mt-1'>
        <div className='bg-white py-2 px-5 rounded-xl shadow-xl flex items-center gap-4'>
          <div id="maps-text">
            <Link href="https://www.google.com/maps/place/752+18th+St+NW,+Washington,+DC+20006,+%C3%89tats-Unis/@38.8991251,-77.0444073,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b7b220d64815:0xf49c452c52ca58f4!8m2!3d38.899121!4d-77.0418324!16s%2Fg%2F11y1f_426r?entry=ttu" className='text-sm font-semibold'>The World Bank Group MC building</Link> 
            <div className='text-xs text-slate-600'>752 18th St NW, Washington, DC 20006, USA</div>
          </div>
          <div>
            <Link href="https://www.google.com/maps/place/752+18th+St+NW,+Washington,+DC+20006,+%C3%89tats-Unis/@38.8991251,-77.0444073,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b7b220d64815:0xf49c452c52ca58f4!8m2!3d38.899121!4d-77.0418324!16s%2Fg%2F11y1f_426r?entry=ttu" 
              className='flex flex-col justify-center items-center text-red-500 hover:text-red-600'
            >
              <RiDirectionFill size={20} />
              <div className='text-xs'>Direction</div>
            </Link>
          </div>
        </div>
      </div>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map
          defaultCenter={{ lat: center.lat, lng: center.lng }}
          defaultZoom={14}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          mapId={mapId}
        >
          <AdvancedMarker position={{lat: center.lat, lng: center.lng}} />
        </Map>
      </APIProvider>
    </div>
  )
}
