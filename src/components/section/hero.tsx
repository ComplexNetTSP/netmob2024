'use client'
import React from 'react'
import HeroButton from '@/components/ui/hero-button'
import useScreenSize from '@/lib/useScreenSize';

export default function Hero() {
  const screenSize = useScreenSize();
  const videoSource = (windowSize:number|undefined) => {
    if (windowSize! <= 320) {
      return "/video/background-xs.webm";
    } else if (windowSize! <= 640) {
      return "/video/background-sd.webm";
    }
    return "/video/background-hd.webm";
  }

  return (
    <>
      <div className="relative h-screen flex items-center z-0 overflow-hidden">
        {/* Video background (add loop or not) */}
        <video loop muted playsInline autoPlay disablePictureInPicture className="absolute top-0 z-0 w-auto min-w-full min-h-full max-w-none">
          <source src={ videoSource(screenSize.width) } type="video/webm" />
        </video>
        <div  className="absolute inset-0 bg-black opacity-50 z-10"></div> 
        <div className='container mx-auto max-w-screen-lg grid grid-cols-2'>
          <div id="hero-title" className='col-start-2 z-20 px-10 py-10 rounded-lg'>
            <div id="hero-text">
              <div className='text-8xl font-light italic font-atrament text-slate-50'>NetMob 2024</div>
              <div className='text-4xl text-slate-50 font-light italic font-atrament pt-2'>Washington DC, 7-9 Oct 2024</div>
              <div className='pt-6 text-xl text-slate-50'>NetMob is the primary conference on the analysis of mobile phone datasets in social, urban, societal and industrial problems.</div>
              {/* <div className='pt-6 text-xl text-slate-50'>{screenSize.width}</div> */}
              <HeroButton />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
