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
    { name: "Vanessa Frias-Martinez", affiliation: "University of Maryland, US", url: "https://www.cs.umd.edu/~vanessa/"},
    { name: "Giovanna Miritello", affiliation: "Vodafone", email: "Giovanna.Miritello@vodafone.com", url: "https://www.linkedin.com/in/giovanna-miritello-a6675919/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=uk"},
    { name: "Takahiro Yabe", affiliation:"New York University, US", url:"https://www.takayabe.net/", email:"takahiroyabe@nyu.edu"},
    { name: "Anastasios Noulas", affiliation: "Firefly, US", email: "tnoulas@gmail.com", url: "https://scholar.google.com/citations?user=tnkMDBsAAAAJ&hl=en"},
    { name: "Lei Dong", email:"leidong@pku.edu.cn", affiliation: "Peking University, China", url: "https://irsgis.pku.edu.cn/english/facultystaff/gis/donglei/index.htm"},  
    { name : "Chen Zhong", affiliation: "University College London, UK", url: "https://profiles.ucl.ac.uk/46973-chen-zhong"},
    { url: "https://neaveoclery.com/", name: "Neave O'Clery", affiliation: "University College London, UK" },
    { name: "Albert Ali Salah", email: "a.a.salah@uu.nl", affiliation: "Utrecht University, The Netherlands", url: "https://www.uu.nl/staff/AASalah"},
    { name: "Giulia Pullano", affiliation: "Georgetown University, US", url: "https://giuliapullano.weebly.com/"},
    { name: "Luca Pappalardo", affiliation: "ISTI-CNR, Italy", url: "https://lucapappalardo.com/"},
    { name: "Luca Vassio", affiliation: "Politecnico di Torino, Italy", url: "https://www.telematica.polito.it/member/luca-vassio/"},
    { name: "Ruben Cuevas Rumin", affiliation: "University Carlos III, Spain", url: "https://www.it.uc3m.es/rcuevas/"},
    { name: "Stefania Rubrichi", affiliation: "Orange Innovation, France", url: "https://www.linkedin.com/in/stefania-rubrichi-0b0b0b0b/?originalSubdomain=fr"},
    { name: "Veena Mendiratta", affiliation: "Northwestern University, US", url: "https://www.mccormick.northwestern.edu/research-faculty/directory/affiliated/mendiratta-veena.html"},
    { name: "Hugo Alatrista-Salas", affiliation: "De Vinci University, France", url: "http://hugo.alatristasalas.free.fr/Alatsal/Welcome.html"},
    { name: "Rosario Medina", affiliation: "Pontifical Catholic University, Peru", url: "https://rmedinar.github.io/"},
    { name: "Yang Yue", affiliation: "Shenzhen University, China", url: "https://scholar.google.com/citations?user=Or3pqN8AAAAJ&hl=en"},
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
        </div>
      </div>
    </div>
  )
}
