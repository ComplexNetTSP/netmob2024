import React from 'react'
import Link from 'next/link'
import XLogo from '../icons/x'
import Bluesky from '../icons/bluesky'
import ThinEnvelope from '../icons/thin-envelope'

export default function Footer() {
  return (
    <div className='py-20 w-full bg-slate-900'>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='flex gap-16 justify-between'>
          {/* col 1 link to the past Netmob conference*/}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Past Edition</div>
            <div className='text-sm font-light'>NetMob 2023</div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www19/index.html">NetMob 2019</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www17/index.html">NetMob 2017</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www15/index.html">NetMob 2015</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/">NetMob 2013</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2011/index.html">NetMob 2011</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2010/index.html">NetMob 2010</Link></div>
          </div>
          {/* col 2: book of abstract */}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Book of abstract</div>
            <div className='text-sm font-light'>Book of abstract 2023</div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www19/assets/netmob19_withFCC.pdf">Book of abstract 2019</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www17/assets/img/bookofabstract_oral_2017.pdf">Book of abstract oral 2017</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www17/assets/img/bookofabstract_poster_2017.pdf">Book of abstract poster 2017</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www15/assets/img/netmob15_book_of_abstracts_oral.pdf">Book of abstract oral 2015</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www15/assets/img/netmob15_book_of_abstracts_posters.pdf">Book of abstract poster 2015</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/NetMob2013-abstracts.pdf">Book of abstract 2013</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/D4D-book.pdf">The D4D book 2013</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2011/NetMob2011-abstracts.pdf">Book of abstract 2011</Link></div>
            <div className='text-sm font-light'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2010/NetMob2010-abstracts.pdf">Book of abstract 2010</Link></div>
          </div>

          {/* col 3: Past Edition Program */}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Past Edition Program</div>
            <div className='text-sm font-light'>Program NetMob 2023</div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www19/program.html">Program NetMob 2019</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www17/assets/img/Netmob2017_program.pdf">Program NetMob 2017</Link></div>
            <div className='text-sm font-light'><Link href="https://netmob.org/www15/assets/img/Final_Program_Talks_Netmob15.pdf">Program NetMob 2015</Link></div>
          </div>

          {/* col 4: twitter - contact - newsletter */}
          <div className='text-white flex flex-col gap-2'>
          <div className='uppercase font-medium mb-2'>Contact</div>
          <Link href='mailto:contact@netmob.com' className='flex items-center'><ThinEnvelope className='w-6 h-6 text-white' /><span className='ml-3'>contact@netmob.com</span></Link>
          <div className='uppercase font-medium mb-2 mt-3 pt-3 border-t border-white'>Follow us</div>
          <div className='flex'>
            <Link href="https://twitter.com/netmob23" className='flex items-center'>
              <button type="button" className="flex justify-center items-center bg-red-700 rounded-full w-7 h-7"><XLogo className='w-3 h-3 text-white' /></button>
            </Link>
            <Link href="https://twitter.com/netmob23" className='ml-3 flex items-center'>
              <button type="button" className="flex justify-center items-center bg-red-700 rounded-full w-7 h-7"> <Bluesky className='w-4 h-4 text-white' /></button>
            </Link>
          </div>
          <div className='uppercase font-medium mt-4 mb-2 pt-3 border-t border-white'>NewsLetters</div>
            <Link href="https://sympa-1.sipr.ucl.ac.be/listes/info/netmob" className='flex items-center'>
              <button type="button" className="flex justify-center items-center bg-red-700 rounded px-5 py-2"><span className='font-medium'>Subscribe</span></button>
            </Link><div className='text-sm'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
