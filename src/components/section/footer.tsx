import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='py-20 w-full bg-slate-700'>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='flex gap-16 justify-between'>
          {/* col 1 link to the past Netmob conference*/}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Past Edition</div>
            <div className='text-sm'>NetMob 2023</div>
            <div className='text-sm'><Link href="https://netmob.org/www19/index.html">NetMob 2019</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www17/index.html">NetMob 2017</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www15/index.html">NetMob 2015</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/">NetMob 2013</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2011/index.html">NetMob 2011</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2010/index.html">NetMob 2010</Link></div>
          </div>
          {/* col 2: book of abstract */}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Book of abstract</div>
            <div className='text-sm'>Book of abstract 2023</div>
            <div className='text-sm'><Link href="https://netmob.org/www19/assets/netmob19_withFCC.pdf">Book of abstract 2019</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www17/assets/img/bookofabstract_oral_2017.pdf">Book of abstract oral 2017</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www17/assets/img/bookofabstract_poster_2017.pdf">Book of abstract poster 2017</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www15/assets/img/netmob15_book_of_abstracts_oral.pdf">Book of abstract oral 2015</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www15/assets/img/netmob15_book_of_abstracts_posters.pdf">Book of abstract poster 2015</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/NetMob2013-abstracts.pdf">Book of abstract 2013</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2013/D4D-book.pdf">The D4D book 2013</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2011/NetMob2011-abstracts.pdf">Book of abstract 2011</Link></div>
            <div className='text-sm'><Link href="https://perso.uclouvain.be/vincent.blondel/netmob/2010/NetMob2010-abstracts.pdf">Book of abstract 2010</Link></div>
          </div>

          {/* col 3: Past Edition Program */}
          <div className='text-white flex flex-col gap-2'>
            <div className='uppercase font-medium mb-2'>Past Edition Program</div>
            <div className='text-sm'>Program NetMob 2023</div>
            <div className='text-sm'><Link href="https://netmob.org/www19/program.html">Program NetMob 2019</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www17/assets/img/Netmob2017_program.pdf">Program NetMob 2017</Link></div>
            <div className='text-sm'><Link href="https://netmob.org/www15/assets/img/Final_Program_Talks_Netmob15.pdf">Program NetMob 2015</Link></div>
          </div>

          {/* col 4: twitter - contact - newsletter */}
          <div className='text-white flex flex-col gap-2'>
          <div className='uppercase font-medium mb-2'>Contact</div>
          <div className='uppercase font-medium mb-2'>Follow us</div>
          <div className='uppercase font-medium mb-2'>NewsLetter</div>
          </div>
        </div>
      </div>
    </div>
  )
}
