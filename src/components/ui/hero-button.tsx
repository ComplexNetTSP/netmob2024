'use client'
import React from 'react'
import { scrollIntoView } from '@/lib/utils'
import {cn} from '@/lib/utils'

export default function HeroButton({className, ...props}: React.HTMLProps<HTMLButtonElement>) {
  const handleClick = (id:string) => scrollIntoView(id);
  const style = cn("mt-10 bg-transparent text-slate-50 font-semibold py-2 border border-slate-50 rounded w-60", className);
  return (
    <button onClick={() => handleClick('conference')} className={style}>
      More about the conference
    </button>
  )
}

