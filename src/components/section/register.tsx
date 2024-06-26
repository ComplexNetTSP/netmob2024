import React, { HTMLProps } from 'react'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Register(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 pb-10 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        { /* Title */}
        <div id="register-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Registration</div>

        { /* table  */}
        <div id='register-table' className='mt-10 flex justify-center rounded-xl shadow-xl border bg-slate-50'>
          <table className="table-auto w-full my-5 mx-20 border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className='text-left border-b border-slate-300'>Attendee</th>
                <th className='text-left border-b border-slate-300'>Early Bird*</th>
                <th className='text-left border-b border-slate-300'>Regular</th>
                <th className='border-b border-slate-300'>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Badge>Student</Badge></td>
                <td>$ 100</td>
                <td>$ 150</td>
                <td className='flex justify-center'><Link href="#"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
              <tr className='mt-16'>
                <td><Badge>Academic</Badge></td>
                <td>$ 200</td>
                <td>$ 300</td>
                <td className='flex justify-center'><Link href="#"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
              <tr className='mt-16'>
                <td><Badge>Industry</Badge></td>
                <td>$ 200</td>
                <td>$ 300</td>
                <td className='flex justify-center'><Link href="#"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
            </tbody>
            <caption className="mt-10 caption-bottom">
              *Early Bird ends on August 30, 2024. Regular registration ends on October 7, 2024.
            </caption>
          </table>
        </div>
      </div>
    </div>
  )
}



