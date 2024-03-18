'use client'
import React from 'react'
import { scrollIntoView } from '@/lib/utils'

export default function HeroButton() {
  const handleClick = (id:string) => scrollIntoView(id);
  return (
    <button onClick={() => handleClick('conference')} className="mt-10 bg-transparent text-slate-50 font-semibold py-2 border border-slate-50 rounded w-60">
      More about the conference
    </button>
  )
}

