import React from 'react';
import { day1, day2, day3, sessionsDay1, sessionsDay2, keynoteDay1, keynoteDay2 } from '@/components/data/program-days';
import DisplayProgram from "@/components/ui/display-program";
import DisplaySessions from "@/components/ui/display-sessions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Keynotes from '../ui/keynotes';

export default function Schedule() {
  return (
    <div className='pt-40 pb-20 w-full bg-slate-50'>
      <div className='container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        { /* Title */}
        <div id="program-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Program</div>

        { /* Sections Instructions */}
        <div id='title-instructions' className='pt-10 flex text-4xl font-atrament'>Instructions</div>
        <div id="instructions" className='mt-5 grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
          { /* Subsections Instructions for abstract*/}
          <div>
            <div className='pt-5 pb-3 text-xl font-medium'>For authors to be presented as posters</div>
            <ol className='pt-3 list-decimal space-y-2 ml-5'>
              <li>Format of posters is A0 in portrait orientation (84.1 cm width x 118.9 cm height, or 33.1 inches x 46.8 inches).</li>
              <li>You need to print the poster on your own.</li>
              <li className='text-justify'>As you can see from the program, each conference poster is exhibited for one full day on October 7 (the first day of the conference) and each challenge poster is exhibited October 8 (the second day of the conference). You are welcome to set up your poster at any time between 8:30 (when the venue opens) and the end of the first coffee break (at 10:45). The official time allocated for attendees to browse posters is from 12:45 to 14:00 on Oct 7 and 12:15-13:30 on Oct 8, and we encourage you to stand by your poster during that time, after grabbing your lunch. You should remove your poster by the end of the day.</li>
            </ol>
          </div>

          {/* Subsection */}
          <div>
          <div className='pt-5 pb-3 text-xl font-medium'>For authors accepted for presentation as a talk</div>
          <ol className='pt-3 list-decimal space-y-2 ml-5'>
            <li className='text-justify'>Each talk will be allocated 12 minutes plus 3 minutes for Q&A. We will have to enforce a strict compliance with timing due to a fairly packed program, so please make sure that you stay in the allotted 12 minutes with your presentation.</li>
            <li>Prepare a PDF file with your slides and we will share a link for you to upload your presentation.</li>
            <li>Note that NetMob 2024 will be a fully in-person event, and we do not have options for remote presentation.</li>
          </ol>
          </div>
        </div>

        {/* Shedule */}
        <div id='title-schedule' className='pt-10 flex text-4xl font-atrament'>Schedule</div>
        <Tabs defaultValue="day1" className="mt-10 w-full">
          <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3">
            <TabsTrigger value="day1">Monday 7, October 2024</TabsTrigger>
            <TabsTrigger value="day2">Tuesday 8, October 2024</TabsTrigger>
            <TabsTrigger value="day3">Wednesday 9, October 2024</TabsTrigger>
          </TabsList>

          { /* Monday 7, Ocober 2024 */}
          <TabsContent value="day1" className="mt-20 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className='lg:col-span-2 justify-center'>
              <Keynotes keynote={keynoteDay1} />
            </div>
            <DisplayProgram schedule={day1} />
            <DisplaySessions sessions={sessionsDay1} />
          </TabsContent>

          { /* Tuesday 8, Ocober 2024 */}
          <TabsContent value="day2" className="mt-5 grid grid-cols-2 gap-10">
            <div className='col-span-2 justify-center'>
              <Keynotes keynote={keynoteDay2} />
            </div>
            <DisplayProgram schedule={day2} />
            <DisplaySessions sessions={sessionsDay2} />
          </TabsContent>

          { /* Wednesday 9, October 2024 */}
          <TabsContent value="day3">
            <DisplayProgram schedule={day3} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}