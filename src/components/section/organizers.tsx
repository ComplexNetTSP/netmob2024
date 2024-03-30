
import Image from 'next/image'
import Link from 'next/link'

export default function Organizers() {
  return (
    <div id="steering_committee" className='bg-slate-50'>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Local Organizers</div>
        
        <div className='mt-20 grid grid-cols-2 lg:grid-cols-12 gap-12 justify-center'>
        <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/miguel.webp"
                alt="Vincent Blondel"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://perso.uclouvain.be/vincent.blondel/" className='underline text-center decoration-red-400'>Miguel Nuñez del Prado Cortez</Link>
            <p className='text-center'>World Bank</p>
          </div>
        </div>
      </div>
    </div>
  )
}