import React from 'react'
import { cn } from '@/lib/utils'

export default function Navbar({props}:{props?:React.HTMLProps<HTMLElement>}) {
  const style = cn("flex fixed top-0 w-screen z-50", props?.className)
  return (
    <header className={style}>
      <div className="container mx-auto max-w-screen-lg flex justify-center gap-5  text-lg font-normal mt-3 py-2 bg-slate-50 rounded-xl shadow-lg text-slate-600">
        <div>Conference</div>
        <div>When & Where</div>
        <div>Program</div>
        <div>Registration</div>
        <div>Organizer</div>
        <div>Contact</div>
      </div>
    </header>
  )
}
