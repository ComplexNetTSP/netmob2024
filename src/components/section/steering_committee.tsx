import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SteeringCommittee() {
  return (
    <div id="steering_committee" className='bg-slate-50'>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Steering Committee</div>

        {/* First line */}
        <div className='mt-20 grid grid-cols-2 lg:grid-cols-12 gap-12 justify-center'>
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/vincent.webp"
                alt="Vincent Blondel"
                object-fit="cover"
                fill={false}
              />
            </div>
            <Link href="https://perso.uclouvain.be/vincent.blondel/" className='underline text-center decoration-red-400'>Vincent Blondel</Link>
            <p className='text-center'>University of Louvain</p>
          </div>

          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/leo.webp"
                alt="Leo Ferres"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://twitter.com/leoferres" className='underline text-center decoration-red-400'>Leo Ferres</Link>
            <p className='text-center'>IDSUDD, ISI Foundation & Telefónica</p>
          </div>

          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/marco.webp"
                alt="Marco Fiore"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://networks.imdea.org/team/imdea-networks-team/people/marco-fiore/" className='underline text-center decoration-red-400'>Marco Fiore</Link>
            <p className='text-center'>IMDEA Networks Institute & Net AI</p>
          </div>

          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/vanessa.webp"
                alt="Vanessa Frias-Martinez"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://vanessafriasmartinez.umiacs.io/" className='underline text-center decoration-red-400'>Vanessa Frias-Martinez</Link>
            <p className='text-center'>University of Maryland</p>
          </div>


          <div className='lg:col-span-4 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/renaud.webp"
                alt="Renaud Lambiotte"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.maths.ox.ac.uk/people/renaud.lambiotte" className='underline text-center decoration-red-400'>Renaud Lambiotte</Link>
            <p className='text-center'>University of Oxford</p>
          </div>

          <div className='lg:col-span-4 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/esteban.webp"
                alt="Esteban Moro Egido"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="http://estebanmoro.org/" className='underline text-center decoration-red-400'>Esteban Moro Egido</Link>
            <p>MIT & UC3M</p>
          </div>

          <div className='lg:col-span-4 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/steering_committee/sandy.webp"
                alt="Alex (Sandy) Pentland"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://idss.mit.edu/staff/alex-sandy-pentland/" className='underline text-center decoration-red-400'>Alex (Sandy) Pentland</Link>
            <p>MIT</p>
          </div>
        </div>
      </div>
    </div>
  )
}
