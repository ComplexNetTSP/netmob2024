import React from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { cn } from '@/lib/utils';

export default function Gmap({className, ...props}:React.HTMLAttributes<HTMLDivElement>) {
  const style = cn('h-[50dvh] w-full', className)
  const center = {lat: 38.90136213216252, lng: -77.04295087823826}
  return (
    <div className={style}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map
          defaultCenter={{ lat: center.lat, lng: center.lng }}
          defaultZoom={14}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          mapId={'c6c3684615d986c5'}
        >
          <AdvancedMarker position={{lat: center.lat, lng: center.lng}} />
        </Map>
      </APIProvider>
    </div>
  )
}
