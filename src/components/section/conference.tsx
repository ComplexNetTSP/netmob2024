import React from 'react'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Conference(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div id="conference-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Conference</div>
        <div id='main-conference' className='pt-10 flex text-4xl font-atrament'>Main Event</div>
        <div className='pt-5 text-justify'>
          NetMob 2024 runs on a flexible format: a single track of short contributed talks, a simplified submission procedure, and the possibility to present early results or work submitted elsewhere. We welcome all contributions that deal with the analysis of mobile phone datasets. This includes but is not limited to analyses of CDRs, xDRs, mobile location data, Wi-Fi usage, mobile app data, social media content, etc.
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id="submission-format">
            <div className='pt-5 pb-3 text-xl font-medium'>Submission format</div>
            <ul className='ml-4 list-disc space-y-1'>
              <li>Authors are invited to submit two-page abstracts (including figures, tables and references).</li>
              <li>Submissions should include the title, author(s), affiliation(s) and email address(es) on the first page.</li>
              <li>Electronic submission of manuscripts in PDF format is required</li>
            </ul>
          </div>

          <div id="important-date">
            <div className='pt-5 pb-3 text-xl font-medium'>Important dates</div>
            <ul className='flex flex-col space-y-1'>
              <li><Link className='font-semibold text-red-900 underline' href="https://netmob24.hotcrp.com/">Submission website opening</Link> June 1, 2024 </li>
              <li><span className='font-semibold text-red-900'>Submission deadline</span>: July 7, 2024</li>
              <li><span className='font-semibold text-red-900'>Notification of acceptance</span>: July 21, 2024</li>
              <li><span className='font-semibold text-red-900'>Conference</span>: October 7-9, 2024</li>
            </ul>
          </div>
        </div>

        <div id='main-conference' className='pt-10 flex text-4xl font-atrament'>Data Challenge</div>

        <div className='pt-5'>
          <p className='text-justify'>
            Colocated with NetMob 2024, we are launching the NetMob 2024 Data Challenge. The NetMob 2024 Data Challenge seeks to foster competition centered on extracting and utilizing insights from mobility data. Beyond academic progress, the goal of this year’s challenge is to cultivate a global environment where enthusiasm for analyzing mobility data can thrive alongside practical development objectives. Specifically, it targets countries in the Global South, aligning with the Sustainable Development Goals (SDGs). {/* Participants are encouraged to focus on one of the following three topics in their proposals: */}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id="challenge-format">
            <div className='pt-5 pb-3 text-xl font-medium'>Challenge format</div>
            <ul className='ml-5 list-disc space-y-1'>
              <li className='text-justify'>Admitted participants shall submit two-page extended abstracts in PDF format including title, author(s), affiliation(s) and email address(es) on the first page, describing their preliminary results from the dataset analysis by July 15.</li>
              <li className='text-justify'>Selected participants will be invited to submit by 16 September a final report consisting of: a complete document without page limits that will be kept confidential, and used to select the challenge awardees as well as to take a final decision on whether the work will be presented at the conference as a talk or a poster; and, 2-page summary of the work that will appear in the public NetMob 2024 Book of Abstracts.</li>
              <li className='text-justify'><Link className='font-semibold text-red-900 underline' href="/challenge">Participants should comply with the challenge terms and conditions</Link></li>
            </ul>
          </div>

          <div id="challenge-importante-date">
            <div className='pt-5 pb-3 text-xl font-medium'>Importante dates</div>
            <ul className='flex flex-col space-y-1'>
              <li><Link className='font-semibold text-red-900 underline' href="https://netmob24.hotcrp.com/">Abstract submission website opening</Link>: June 1, 2024</li>
              <li><span className='font-semibold text-red-900'>Challenge launch</span>: June 10, 2024</li> 
              <li><span className='font-semibold text-red-900'>Abstract submission deadline</span>: July 7, 2024</li>
              <li><span className='font-semibold text-red-900'>Notification of acceptance</span>: July 21, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
