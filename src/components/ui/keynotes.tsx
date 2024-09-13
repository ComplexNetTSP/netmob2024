import React from "react";
import Image from "next/image";

interface KeynotesProps {
  keynote: {
    affliation: string,
    author: string,
    title: string,
    abstract: string,
    img: string,
  }
}

export default function Keynotes({ keynote }: KeynotesProps) {
  return (
    <>  
    <div className="flex justify-center">
      <div className="w-40 h-40 mb-5 relative">
        <Image
          className="rounded-full border border-gray-100 shadow-lg"
          src={keynote.img}
          alt={keynote.author}
          object-fit="cover"
          fill={true}
        />
      </div>
    </div>
    <div className="flex justify-center text-2xl font-medium">Keynote {keynote.author}</div>
    <div className="flex justify-center text-lg">{keynote.affliation}</div>
    <div className="mt-2 flex justify-center text-2xl font-light">{keynote.title}</div>
    <div className="mt-4 text-justify"><span className="font-semibold">abstract</span>: {keynote.abstract}</div>
    </>
  );
}