import React from 'react'

export default function Terms() {
  return (
    <div className='mt-32 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
      <div className='flex justify-center text-4xl font-semibold'>NetMob 2024 Data Challenge</div>
      <div className='flex justify-center text-2xl font-semibold'>Spectus Terms and Conditions</div>

      <div className='mt-20 mb-20 text-lg'>
        <p className='text-justify'>As part of NetMob 2024 Data Challenge (the “Challenge”), Cuebiq Group, LLC (hereinafter, “Spectus”) is providing privacy-preserving aggregated data sets for research purposes and to support initiatives related to international development. Spectus data is collected with the informed consent of anonymous users who have opted-in to anonymized data collection for research purposes. In order to further preserve the privacy of users, no individual-level data has been shared for this challenge. Spectus data has been aggregated to the Geohash 5 and H3 level 7, with a minimum threshold of 10 unique devices per spatiotemporal unit.</p>

        <p className='pt-6'>In addition to accepting the Terms & Conditions, the Challenge participants explicitly agree to the following:</p>
        <ul className='list-decimal pt-3 pl-5 space-y-2'>
          <li>At no point shall participants attempt to disaggregate or re-identify individual users within the aggregated datasets.</li>
          <li className='text-justify'>The aggregated data will be used solely by the participant, and shall not be redistributed or sold to other individuals, institutions, or organizations. Participants will store the aggregated data in a secure password-protected environment, and destroy the original dataset after the competition has concluded.</li>
          <li>The data will be used for statistical and scientific research purposes only. Analysis of the following use cases are strictly prohibited:</li>
          <ul className='pl-8 list-[upper-roman]'>
            <li>armed or civil conflict</li>
            <li>Social demonstrations</li>
            <li>Law enforcement</li>
            <li>Detection of unlawful activities, such as drug trafficking</li>
            <li>Targeting or analyzing inferred vulnerable populations such as:</li>
            <ul className='pl-8 list-disc'>
              <li>Minors</li>
              <li>LGBTQ</li>
              <li>Ethnic or religious minorities</li>
            </ul>
          </ul>
          <li className='text-justify'>Participants may publish a research report or publication solely if the above terms have been met. Participants will include the following citation <span className='font-medium italic underline decoration-red-500'>“Aggregated data was provided by Spectus Social Impact as part of the Netmob 2024 conference. Data is collected with the informed consent of anonymous users who have opted-in to anonymized data collection for research purposes. In order to further preserve the privacy of users, all data has been aggregated by the data provider to the to the Geohash 5 and H3 level 7 and does not include any individual-level data records”.</span></li>
        </ul>
      </div>
    </div>
  )
}
