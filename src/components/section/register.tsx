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
        <div id="register-title" className='flex justify-center text-5xl lg:text-8xl italic font-atrament text-red-900'>Registration fees</div>

        { /* table  */}
        <div id='register-table' className='mt-10 flex justify-center rounded-xl shadow-xl border bg-slate-100'>
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
                <td>$ 125</td>
                <td>$ 175</td>
                <td className='flex justify-center'><Link href="https://web.cvent.com/event/c0d352e4-b919-4595-9f15-5ee760caf3de/regProcessStep1"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
              <tr className='mt-16'>
                <td><Badge>Academic</Badge></td>
                <td>$ 250</td>
                <td>$ 350</td>
                <td className='flex justify-center'><Link href="https://web.cvent.com/event/c0d352e4-b919-4595-9f15-5ee760caf3de/regProcessStep1"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
              <tr className='mt-16'>
                <td><Badge>Industry</Badge></td>
                <td>$ 250</td>
                <td>$ 350</td>
                <td className='flex justify-center'><Link href="https://web.cvent.com/event/c0d352e4-b919-4595-9f15-5ee760caf3de/regProcessStep1"><button className='px-4 py-1 bg-green-600 border border-green-700 text-white uppercase rounded-lg'>register</button></Link></td>
              </tr>
            </tbody>
            <caption className="mt-10 caption-bottom">
              *Early Bird ends on August 30, 2024. Regular registration ends on October 7, 2024.
            </caption>
          </table>
        </div>

        { /* refound */}
        <div id='refound' className='pt-10 flex text-4xl font-atrament'>Refund/Cancellation Policy</div>
        
        <div className='pt-5 text-justify'>
        All registration refund requests must be sent via email to <Link href="mailto:netmob2024@worldbank.org" className='font-semibold text-red-900'>netmob2024@worldbank.org</Link> and received no later than September 27, 2024. A full refund, minus 25.00 USD for online registration, will be issued. For those who pay by credit card, refunds can only be processed to the credit card to which the original charge was made. Processing of the refunds may take over 30 days. Refund requests received after September 27, 2024 will not be honored. No-shows are subject to the full fee.
        </div>
      </div>
    </div>
  )
}



