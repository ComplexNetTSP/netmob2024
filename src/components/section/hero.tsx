'use client'
import React from 'react'
import HeroButton from '@/components/ui/hero-button'
import useScreenSize from '@/lib/useScreenSize';

export default function Hero() {
  const { width } = useScreenSize();
  const videoSource = (windowSize:number|undefined) => {
    console.log(windowSize);
    if (windowSize! <= 400) {
      return "/video/background-xs.webm";
    } else if (windowSize! <= 640) {
      return "/video/background-sd.webm";
    }else{
      return "/video/background-hd.webm";
    }
  }

  return (
    <>
      <div className="relative h-screen flex items-center z-0 overflow-hidden">
        {/* Video background (add loop or not) */}
        { width && 
          <video loop muted playsInline autoPlay disablePictureInPicture className="absolute z-0 inset-0 w-auto min-w-full min-h-full max-w-none">
            <source src={ videoSource(width) } type="video/webm" /> 
          </video>
        }
        <div  className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-black/90 z-10"></div> 
        <div className='container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 justify-center'>
          <div id="hero-title" className='z-20 px-10 py-10 lg:col-start-2'>
            <div id="hero-text">
              <div className='text-slate-50 text-6xl sm:text-8xl lg:text-6xl xl:text-8xl font-light italic font-atrament flex flex-col'><div>NetMob</div><div>2024</div></div>
              <div className='text-3xl sm:text-5xl lg:text-3xl xl:text-3xl text-slate-50 font-light italic font-atrament pt-2'>Washington DC, 7-9 Oct 2024</div>
              <div className='pt-6 text-xl text-slate-50'>NetMob is the primary conference on the analysis of mobile phone datasets in social, urban, societal and industrial problems.</div>
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
