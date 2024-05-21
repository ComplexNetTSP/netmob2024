import Link from 'next/link'
import React from 'react'

type CommitteeMember = {
  name: string
  affiliation: string
  url?: string
  email?: string
}

export default function Committee() {
  const committee_members: CommitteeMember[] = [
    { name: "Bruno Lepri", affiliation: "FBK Foundation, Italy", url: "https://www.linkedin.com/in/brunolepri/" },
    { name: "Takahiro Yabe", affiliation:"New York University, US", url:"https://www.takayabe.net/", email:"takahiroyabe@nyu.edu"},
    { name: "Vanessa Frias-Martinez", affiliation: "University of Maryland, US", url: "https://www.cs.umd.edu/~vanessa/"},
    { name: "Tassos Noulas", affiliation: "Firefly, US", email: "tnoulas@gmail.com"},
    { url: "https://neaveoclery.com/", name: "Neave O'Clery", affiliation: "University College London, UK" },
  ] 

  function CommitteeMembers() {
    return (
      committee_members.map((member, index) => {
        return (
          <div key={index} className='flex'>
            <span>{member.name}, {member.affiliation}</span>
            {member.url && <div><Link href={member.url} className='ml-3 text-red-600'>[URL]</Link></div>}
          </div>
        )
      }))
  }

  return (
    <div id="committee" className='bg-slate-50'>
      <div className='py-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        <div className='flex justify-center text-5xl lg:text-8xl font-atrament italic text-red-900'>Program Committee</div>
        <div className='pt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-2'>
          <CommitteeMembers />
        {/*
        <div>Albert Ali Salah, Utrecht University, The Netherlands</div>
        <div>Bruno Lepri, FBK Foundation, Italy</div>
        <div>Carlee Joe-Wong, Carnegie Mellon University, US</div>
        <div>Enrique Frias-Martinez, Universidad Camilo Jose Cela, Spain</div>
        <div>Giovanna Miritello, Vodafone, UK</div>
        <div>Giulia Pullano, Georgetown University, US</div>
        <div>János Kertész, Central European University, Vienna</div>
        <div>Katarzyna Wac, University of Geneva, Switzerland</div>
        <div>Luca Pappalardo, ISTI-CNR, Italy</div>
        <div>Luca Vassio, Politecnico di Torino, Italy</div>
        <div>Marta Gonzalez, Berkeley, US</div>
        <div>Mirco Musolesi, University College London, UK</div>
        <div>Mori Korokawa, KDDI Research, Japan</div>
        <div>Ruben Cuevas Rumin, Universidad Carlos III de Madrid, Spain</div>
        <div>Stefania Rubrichi, Orange Innovation, France</div>
        <div>Takahiro Yabe, NYU, US</div>
        <div>Tassos Noulas, Firefly, US</div>
        <div>Veena Mendiratta, Northwestern University, US</div>
        <div>Yoshihide Sekimoto, University of Tokio, Japan</div>
        <div>Zbigniew Smoreda, Orange Innovation, France</div>
        */}
        </div>
      </div>
    </div>
  )
}
