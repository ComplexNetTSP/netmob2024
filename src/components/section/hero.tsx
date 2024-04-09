'use client'
import React from 'react'
import HeroButton from '@/components/ui/hero-button'
import useScreenSize from '@/lib/useScreenSize';

export default function Hero() {
  const { width } = useScreenSize();
  const videoSource = (windowSize: number | undefined) => {
    if (windowSize! <= 400) {
      return "/video/background-xs";
    } else if (windowSize! <= 640) {
      return "/video/background-sd";
    } else {
      return "/video/background-hd";
    }
  }

  return (
    <>
      <div className="relative h-screen flex items-center z-0 overflow-hidden justify-center">
        {/* Video background (add loop or not) */}
        {width &&
          <video loop muted playsInline autoPlay disablePictureInPicture poster={`${videoSource(width)}.png`} className="absolute z-0 top-10 w-auto min-w-full min-h-full max-w-none object-cover">
            <source src={`${videoSource(width)}.webm`} type="video/webm" />
            <source src={`${videoSource(width)}.mp4`} type="video/mp4" />
          </video>
        }
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-black/90 z-10"></div> 
        <div className='containe mx-auto max-w-xs h-full content-end lg:content-center sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 justify-center'>
          <div id="hero-title" className='z-20 px-10 py-10 lg:col-start-2 bg-slate-900 bg-opacity-70 sm:bg-opacity-0'>
            <div id="hero-text" className='flex flex-col items-center lg:items-start'>
              <div className='text-slate-50 text-3xl font-medium sm:text-8xl lg:text-6xl xl:text-8xl sm:font-light italic font-atrament flex flex-row lg:flex-col'><div>NetMob</div><div className="ml-3 lg:ml-0">2024</div></div>
              <div className='text-xl font-medium sm:text-5xl lg:text-2xl xl:text-3xl text-slate-50 sm:font-light italic font-atrament pt-2 flex flex-col xl:flex-row'><div>Washington DC<span className='invisible xl:visible'>, </span></div><div className='xl:ml-3'>7-9 Oct 2024</div></div>
              <div className='pt-6 text-normal text-center lg:text-left sm:text-xl xl:text-xl text-slate-50'>NetMob is the primary conference on the analysis of mobile phone datasets in social, urban, societal and industrial problems.</div>
              <HeroButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
