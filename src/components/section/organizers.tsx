
import Image from 'next/image'
import Link from 'next/link'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';
export default function Organizers({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn('bg-slate-50', className)} {...props}>
      <div className='pt-20 pb-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Organizers</div>

        {/* Organizers: Miguel, Sveta, Trevor, Wenlan */}
        <div className='mt-20 grid grid-cols-2 lg:grid-cols-12 gap-12 justify-center'>
          {/* Organizers: Miguel */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/miguel.webp"
                alt="Miguel Nuñez del Prado Cortez"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.linkedin.com/in/miguel-nu%C3%B1ez-del-prado-cortez-b217272a" className='underline text-center decoration-red-400'>Miguel Nuñez del Prado Cortez</Link>
            <p className='text-center'>The World Bank</p>
          </div>


          {/* Organizers: Sveta */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/sveta.webp"
                alt="Sveta Milusheva"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.svetamilusheva.com/home" className='underline text-center decoration-red-400'>Sveta Milusheva</Link>
            <p className='text-center'>The World Bank</p>
          </div>

          {/* Organizers: Trevor */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/trevor.webp"
                alt="Trevor Monroe"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.linkedin.com/in/trevormonroe/" className='underline text-center decoration-red-400'>Trevor Monroe</Link>
            <p className='text-center'>The World Bank</p>
          </div>

          {/* Organizers: Wenlan */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/wenlan.webp"
                alt="Wenlan Zhang"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.zhangwenlan.com/" className='underline text-center decoration-red-400'>Wenlan Zhang</Link>
            <p className='text-center'>The World Bank</p>
          </div>
        </div>

        {/* Organizers: Second line */}
        <div className='mt-20 grid grid-cols-2 lg:grid-cols-12 gap-12 justify-center'>
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/lakesh.png"
                alt="Lakech Tsegaye"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.linkedin.com/in/lakech-tsegaye-5b769548/" className='underline text-center decoration-red-400'>Lakech Tsegaye</Link>
            <p className='text-center'>The World Bank</p>
          </div>

           {/* Vincent */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/vincent.webp"
                alt="Vincent Gauthier"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://complex.luxbulb.org" className='underline text-center decoration-red-400'>Vincent Gauthier</Link>
            <p className='text-center'><span className='inline-block'>Telecom SudParis</span> & <span className='inline-block'>Institut Polytechnique de Paris</span></p>
          </div>

          {/* Vanessa */}
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

          {/* Marta */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/marta.png"
                alt="Marta Gonzalez"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://humnetlab.berkeley.edu/" className='underline text-center decoration-red-400'>Marta Gonzalez</Link>
            <p className='text-center'>University of Berkeley</p>
          </div>
        </div>

          {/* Organizers: Thrid line */}
        <div className='mt-20 grid grid-cols-2 lg:grid-cols-12 gap-12 justify-center'>
          {/* Organizers: Naman */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/naman.webp"
                alt="Naman Awasthi"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.cs.umd.edu/people/nawasthi" className='underline text-center decoration-red-400'>Naman Awasthi</Link>
            <p className='text-center'>University of Maryland</p>
          </div>

          {/* Organizers: Saad Abrar */}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/sabrar.webp"
                alt="Saad Mohammad Abrar"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="https://www.cs.umd.edu/people/sabrar" className='underline text-center decoration-red-400'>Saad Mohammad Abrar</Link>
            <p className='text-center'>University of Maryland</p>
          </div>

          {/* Organizers: Daniel Smolyak*/}
          <div className='lg:col-span-3 flex flex-col justify-top items-center'>
            <div className="w-32 h-32 mb-5 relative">
              <Image
                className="rounded-full border border-gray-100 shadow-lg"
                src="/img/organisers/dsmolyak.webp"
                alt="Daniel Smolyak"
                object-fit="cover"
                fill={true}
              />
            </div>
            <Link href="http://dsmolyak.github.io/" className='underline text-center decoration-red-400'>Daniel Smolyak</Link>
            <p className='text-center'>University of Maryland</p>
          </div>
        </div>
      </div>
    </div>
  )
}
