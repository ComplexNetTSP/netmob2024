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
    { name: "Enrique Frias-Martinez", affiliation: "UNIR iTED, Spain", url: "https://enriquefrias-martinez.info/home"},
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
    { name: "Nicholas K.W. jones", email: "njones@worldbankgroup.org", url:"https://www.linkedin.com/in/nick-jones-302a945/?originalSubdomain=uk", affiliation: "World Bank, US"},
    { name: "Erwin W. Knippenberg", email: "eknippenberg@worldbank.org", affiliation: "The World Bank, US", url: "https://www.linkedin.com/in/erwin-knippenberg-45493822/"},
    { name: "Mirco Musolesi", email: "m.musolesi@ucl.ac.uk", affiliation: "University College London, UK", url: "https://www.mircomusolesi.org/"},
    { name: "Yoshihide Sekimoto", email: "sekimoto@iis.u-tokyo.ac.jp", affiliation: "The University of Tokyo, Japan", url: "https://www.iis.u-tokyo.ac.jp/en/research/staff/yoshihide-sekimoto/"},
    { name: "Oscar Eduardo Barriga-Cabanillas", email:"obarriga@worldbank.org" , affiliation: "The World Bank, US", url: "https://www.obcabanillas.com/"},
    { name: "Mori Kurokawa", email: "Mori Kurokawa", affiliation:"KDDI Research, Japan", url: "https://scholar.google.co.jp/citations?user=vmIprTMAAAAJ&hl=ja"},
    { name: "Daniel A. Rodriguez", email: "danrod@berkeley.edu", affiliation: "UC Berkeley, US", url: "https://ced.berkeley.edu/people/daniel-rodriguez"},
    { name: "Riccardo Di Clemente", email: "riccardo.diclemente@nulondon.ac.uk", affiliation: "Northeastern Univ. London, UK", url: "https://www.riccardodiclemente.com/"},
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
