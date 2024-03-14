import React from 'react'

export default function Conference() {
  return (
    <div className='bg-slate-50'>
      <div className='pt-20 container mx-auto max-w-screen-lg'>
        <div id="conference-title" className='flex justify-center text-4xl font-bold'>Main Conference</div>

        <div className='pt-10'>
          NetMob 2023 runs on a flexible format: a single track of short contributed talks, a simplified submission procedure, and the possibility to present early results or work submitted elsewhere. We welcome all contributions that deal with the analysis of mobile phone datasets. This includes but is not limited to analyses of CDRs, xDRs, mobile location data, Wi-Fi usage, mobile app data, social media content, etc.
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div id="submission-format">
            <div className='pt-5 pb-3 text-lg font-medium'>Submission format</div>
            <ul className='flex flex-col space-y-1'>
              <li>Authors are invited to submit two-page abstracts (including figures, tables and references).</li>
              <li>Submissions should include the title, author(s), affiliation(s) and email address(es) on the first page.</li>
              <li>Electronic submission of manuscripts in PDF format is required</li>
            </ul>
          </div>

          <div id="important-date">
            <div className='pt-5 pb-3 text-lg font-medium'>Important dates</div>
            <ul className='flex flex-col space-y-1'>
              <li>Submission website opening: June 1 June 26, 2023</li>
              <li>Submission deadline: June 30 July 7, 2023</li>
              <li>Notification of acceptance: July 21, 2023</li>
              <li>Conference: October 4-6, 2023</li>
            </ul>
          </div>
        </div>

        <div className='py-5 text-xl font-semibold'>Data Challenge</div>
        Colocated with NetMob 2023, we are launching the NetMob 2023 Data Challenge. The challenge aims at deriving new knowledge from the analysis, characterization, modelling and cross-correlation of an original high-resolution dataset describing mobile service usage in multiple regions of France.

        <div className='grid grid-cols-2 gap-6'>
          <div id="challenge-format">
            <div className='pt-5 pb-3 text-lg font-medium'>Challenge format</div>
            <ul className='flex flex-col space-y-1'>
              <li>Prospective participants shall apply to the challenge in order to get access to the dataset. Instructions are available at the challenge webpage.</li>
              <li>Admitted participants shall submit two-page extended abstracts in PDF format including title, author(s), affiliation(s) and email address(es) on the first page, describing their preliminary results from the dataset analysis.</li>
              <li>Selected participants will be invited to submit by September 22, 2023 a final report consisting of: a complete document without page limits that will be kept confidential, and used to select the challenge awardees as well as to take a final decision on whether the work will be presented at the conference as a talk or a poster; and, 2-page summary of the work that will appear in the public NetMob 2023 Book of Abstracts.</li>
            </ul>
          </div>

          <div id="challenge-importante-date">
            <div className='pt-5 pb-3 text-lg font-medium'>Importante dates</div>
            <ul className='flex flex-col space-y-1'>
              <li>Challenge launch: May 12, 2023</li>
              <li>Abstract submission opening: June 1 June 26, 2023</li>
              <li>Abstract submission deadline: June 30 July 7, 2023 AoE</li>
              <li>Notification of acceptance: July 21, 2023</li>
              <li>Final report deadline: September 22, 2023 AoE</li>
              <li>Presentation in the conference: October 6, 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
