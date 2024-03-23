import React, { HTMLProps } from 'react'
import { cn } from '@/lib/utils';

export default function Register(props: HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div className={cn('bg-slate-50', className)} {...rest}>
      <div className='pt-20 container mx-auto max-w-xs sm:max-w-xl md:max-w-screen-sm xl:max-w-screen-lg'>
        { /* Title */}
        <div id="register-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Registration</div>
        { /* table  */}

        <div id='register-table' className='mt-10 flex justify-center rounded-xl shadow-xl bg-white'>
          <table className="table-auto w-full m-5">
            <thead>
              <tr>
                <th>Attendee</th>
                <th>Early Bird*</th>
                <th>Regular</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Student</td>
                <td>$ 100</td>
                <td>$ 150</td>
                <td>link</td>
              </tr>
              <tr>
                <td>Academic</td>
                <td>$ 200</td>
                <td>$ 300</td>
                <td>link</td>
              </tr>
              <tr>
                <td>Industry</td>
                <td>$ 200</td>
                <td>$ 300</td>
                <td>link</td>
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



