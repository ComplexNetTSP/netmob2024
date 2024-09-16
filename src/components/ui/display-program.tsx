import React from "react";
import ScheduleItem from "@components/ui/schedule-item";

export type ScheduleIt = {
  time: string;
  title: string;
  link?: string;
}

export interface DisplayProgramProps {
  schedule: ScheduleIt[];
}

export default function DisplayProgram({schedule}:DisplayProgramProps) {
  return (
    <div>
       {/* Title */}
      <div className="flex justify-center font-thin text-4xl mb-10">Schedule</div>
       {/* Display the schedule */}
      <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
        {schedule.map((item, index) => (
          <ScheduleItem key={index} time={item.time} title={item.title} link={item.link}/>
        ))}
      </div>
    </div>
  );
}