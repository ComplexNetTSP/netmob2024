import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <div className="bg-top bg-cover bg-[url('/img/washington.jpg')] h-screen">
      <div id="title">
        <div>Netmob 2024</div>
        <div>Washington DC, 7-8 Oct 2024</div>
        <div>NetMob is the primary conference on the analysis of mobile phone datasets in social, urban, societal and industrial problems.</div>
      </div>
    </div>
    </>
  )
}
