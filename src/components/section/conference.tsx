import React from 'react'
import type { HTMLProps } from "react";
import { cn } from '@/lib/utils';

export default function Conference(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div id="conference-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Conference</div>
        <div id='main-conference' className='pt-10 flex text-4xl font-atrament'>Main Event</div>
        <div className='pt-5'>
          NetMob 2024 runs on a flexible format: a single track of short contributed talks, a simplified submission procedure, and the possibility to present early results or work submitted elsewhere. We welcome all contributions that deal with the analysis of mobile phone datasets. This includes but is not limited to analyses of CDRs, xDRs, mobile location data, Wi-Fi usage, mobile app data, social media content, etc.
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id="submission-format">
            <div className='pt-5 pb-3 text-xl font-medium'>Submission format</div>
            <ul className='flex flex-col space-y-1'>
              <li>Authors are invited to submit two-page abstracts (including figures, tables and references).</li>
              <li>Submissions should include the title, author(s), affiliation(s) and email address(es) on the first page.</li>
              <li>Electronic submission of manuscripts in PDF format is required</li>
            </ul>
          </div>

          <div id="important-date">
            <div className='pt-5 pb-3 text-xl font-medium'>Important dates</div>
            <ul className='flex flex-col space-y-1'>
              <li><span className='font-medium'>Submission website opening</span>: June 1, 2024 </li>
              <li><span className='font-medium'>Submission deadline</span>: June 30, 2024</li>
              <li><span className='font-medium'>Notification of acceptance</span>: July 21, 2024</li>
              <li><span className='font-medium'>Conference</span>: October 7-9, 2024</li>
            </ul>
          </div>
        </div>

        <div id='main-conference' className='pt-10 flex text-4xl font-atrament'>Data Challenge</div>
        
        <div className='pt-5'>
        Colocated with NetMob 2024, we are launching the NetMob 2024 Data Challenge. The objective of the NetMob 2024 Data Challenge is to promote competition focused on extracting and applying insights from mobility data. The aim is to enhance understanding of deriving population density from mobility data samples, assessing the impact of climate conditions or climate-related hazards on human mobility patterns, and identifying various applications of mobility-based metrics to inform public policies.
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id="challenge-format">
            <div className='pt-5 pb-3 text-xl font-medium'>Challenge format</div>
            <ul className='flex flex-col space-y-1'>
              <li>Stay tunned</li>
              {/*<li>Prospective participants shall apply to the challenge in order to get access to the dataset. Instructions are available at the challenge webpage.</li> */}
              <li>Admitted participants shall submit two-page extended abstracts in PDF format including title, author(s), affiliation(s) and email address(es) on the first page, describing their preliminary results from the dataset analysis.</li>
              <li>Selected participants will be invited to submit by 15 September a final report consisting of: a complete document without page limits that will be kept confidential, and used to select the challenge awardees as well as to take a final decision on whether the work will be presented at the conference as a talk or a poster; and, 2-page summary of the work that will appear in the public NetMob 2024 Book of Abstracts.</li>
            </ul>
          </div>

          <div id="challenge-importante-date">
            <div className='pt-5 pb-3 text-xl font-medium'>Importante dates</div>
            <ul className='flex flex-col space-y-1'>
              <li><span className='font-medium'>Challenge launch</span>: May 13, 2024</li> 
              <li><span className='font-medium'>Abstract submission opening</span>: June 3, 2024</li>
              <li><span className='font-medium'>Abstract submission deadline</span>: July 8, 2024</li>
              <li><span className='font-medium'>Notification of acceptance</span>: July 22, 2024</li>
              <li><span className='font-medium'>Final report deadline</span>: September 16, 2024</li>
              <li><span className='font-medium'>Presentation in the conference</span>: October 7, 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
