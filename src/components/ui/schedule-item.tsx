import React from "react";

interface ScheduleItemProps {
  time: string;
  title: string;
  link?: string;
}

export default function ScheduleItem({time, title, link}:ScheduleItemProps) {
  return (
    <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
      <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
        {time}
      </p>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {link
          ? <a href={link} className="hover:underline text-red-900">{ title }</a> 
          : <span>{ title }</span>
        }
      </h3>
    </div>
  );
}