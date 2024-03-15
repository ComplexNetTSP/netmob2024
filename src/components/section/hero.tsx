import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="relative bg-top bg-cover bg-[url('/img/washington_3.webp')] h-screen flex items-center z-0">
        <div  className="absolute inset-0 bg-black opacity-20 z-10"></div> 
        <div className='container mx-auto max-w-screen-lg grid grid-cols-2'>
          <div id="hero-title" className='z-20 bg-black bg-opacity-60 px-10 py-10 rounded-lg'>
            <div id="hero-text">
              <div className='text-6xl text-slate-50 font-extrabold'>Netmob 2024</div>
              <div className='text-2xl text-slate-50 font-bold pt-2'>Washington DC, 7-8 Oct 2024</div>
              <div className='pt-6 text-xl text-slate-50'>NetMob is the primary conference on the analysis of mobile phone datasets in social, urban, societal and industrial problems.</div>

              <button className="mt-10 bg-transparent text-slate-50 font-semibold py-2 border border-slate-50 rounded w-60">
                More about the conference
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
