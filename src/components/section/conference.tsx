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
            <div className='pt-5 pb-3 text-xl font-medium'>Submission Format</div>
            <ul className='ml-4 list-disc space-y-1'>
              <li>Authors are invited to submit two-page abstracts (including figures, tables and references).</li>
              <li>Electronic submission of manuscripts in PDF format is required</li>
            </ul>
          </div>

          <div id="important-date">
            <div className='pt-5 pb-3 text-xl font-medium'>Important Dates</div>
            <ul className='flex flex-col space-y-1'>
              <li className='line-through'><span className='font-semibold text-red-900'>Submission website opening</span> June 1, 2024 </li>
              <li className='line-through'><span className='font-semibold text-red-900'>Submission deadline</span>: July 15, 2024</li>
              <li className='line-through'><span className='font-semibold text-red-900'>Notification of acceptance</span>: July 30, 2024</li>
              <li><span className='font-semibold text-red-900'>Conference</span>: October 7-9, 2024</li>
            </ul>
          </div>
        </div>

        <div id='main-conference' className='pt-10 flex text-4xl font-atrament'>Data Challenge</div>

        <div className='pt-5'>
          <p className='text-justify'>
            Colocated with NetMob 2024, we are launching the NetMob 2024 Data Challenge. The NetMob 2024 Data Challenge seeks to foster competition centered on extracting and utilizing insights from mobility data. Beyond academic progress, the goal of this year’s challenge is to cultivate a global environment where enthusiasm for analyzing mobility data can thrive alongside practical development objectives. Specifically, it targets countries in the Global South, aligning with the Sustainable Development Goals (SDGs).
          </p>
          <p className='text-justify'>
            Netmob partners with <Link href="https://spectus.ai/" className='underline decoration-red-800'>Spectus</Link> for the 2024 Data Challenge to publish aggregated mobility dataset for four countries: <span className='font-semibold'>Mexico, Colombia, Indonesia, and India</span>. The data will cover the year 2019 and there are two datasets included in this challenge:
          </p>

          {/* Bullet points*/}
          <ul className='mt-3 mb-3 list-decimal pl-4 space-y-2'>
            <li>Population Density Data: This dataset describes the daily presence of mobile users, providing insights into the number of devices detected at specific locations on a daily basis. This will be aggregated by day at geohash 3 and 5 levels.</li>
            <li>Origin-Destination Matrix Data: This dataset describes the flow of devices between two consecutive stops within a single day. The locations are aggregated to geohash 3 and geohash 5, offering detailed movement patterns of mobile users. </li>
          </ul>

        </div>
        <div>
          <p className='text-justify'>Additional datasets will be added that include aggregation by 3-hour intervals for both types of data. The team will also be including data from 2020, but this will not yet be available at the start of the challenge. Participants are encouraged to utilize these datasets to explore and analyze various aspects of human mobility and to inform policy within these countries.</p>
          <p className='text-jutify mt-3 font-semibold'>All participants are required to review and agree to the Terms and Conditions before applying. Please apply to participate in the data challenge by completing the <span className='text-red-900 font-semibold'>Data Request Form (closed)</span>.</p>
          <p className='text-jutify mt-3'>Challenge winners and winning teams will be selected based on their final report submissions. As an award, the winners and winning teams will be granted six-months of access to the Spectus Data Cleanroom, which contains more granular privacy-preserving data. Spectus reserves the right to determine the specific conditions and scope of this access, ensuring alignment with their privacy policies.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          <div id="challenge-format">
            <div className='pt-5 pb-3 text-xl font-medium'>Challenge Format</div>
            <ul className='ml-5 list-disc space-y-1'>
              <li className='text-justify'>Admitted participants shall submit two-page extended abstracts in PDF format describing their research proposal by <span className='text-red-900 font-semibold'>July 15</span>.</li>
              <li className='text-justify'>Selected participants will be invited to submit by <span className='text-red-900 font-semibold'>September 16</span> a final report consisting of: a complete document without page limits that will be kept confidential, and used to select the challenge awardees as well as to take a final decision on whether the work will be presented at the conference as a talk or a poster; and, 2-page summary of the work that will appear in the public NetMob 2024 Book of Abstracts.</li>
              <li className='text-justify'><Link className='font-semibold text-red-900 underline' href="https://datacatalog.worldbank.org/search/dataset/0066094/aggregated_mobility_and_density_data_for_the_netmob_2024_data_challenge">Participants should comply with the challenge terms and conditions</Link></li>
            </ul>
          </div>
          {/* begin right column */}
          <div>
            {/* Important dates */}
            <div id="challenge-importante-date">
              <div className='pt-5 pb-3 text-xl font-medium'>Important Dates</div>
              <ul className='flex flex-col space-y-1'>
                <li className='line-through'><span className='font-semibold text-red-900'>Abstract submission website opening</span>: June 1, 2024</li>
                <li><span className='font-semibold text-red-900'>Challenge launch</span>: June 10, 2024</li>
                <li className='line-through'><span className='font-semibold text-red-900'>Research proposal submission deadline</span>: July 15, 2024</li>
                <li className='line-through'><span className='font-semibold text-red-900'>Notification of acceptance</span>: July 30, 2024</li>
                <li><span className='font-semibold text-red-900'>Final report submission deadline</span>: September 16, 2024</li>
                <li><span className='font-semibold text-red-900'>Notification of presentation and Poster</span>: September 30, 2024</li>
              </ul>
            </div>

            {/* Suggested Topics */}
            <div id="suggested-topics">
              <div className='pt-5 pb-3 text-xl font-medium'>Suggested Topics</div>
              <ul className='ml-5 flex list-disc flex-col space-y-1'>
                <li>Weather Patterns, Climate Resilience, and Natural Hazards</li>
                <li>Urban Planning and Sustainable Transportation</li>
                <li>Public Health and Well-being</li>
                <li>Poverty Mapping and Social Protection</li>
                <li>Advancements in Methodologies for Analyzing Mobile Phone Data</li>
              </ul>
            </div>
          </div>
           {/* end right column */}
        </div>
      </div>
    </div>
  )
}
