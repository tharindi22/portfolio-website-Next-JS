import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    /*  <div className='mt-20'>
      <div className="text-center">
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className="">
            <Image src={assets.mail_icon} alt='' className='w-6' /> 
            email
        </div>
      </div>


      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="">Github</a></li>
            <li><a target='_blank' href="">Linkdin</a></li>
            <li><a target='_blank' href="">Linkdin</a></li>
        </ul>
      </div>
    </div>
    */




    <footer className=" md:px-36 text-left w-full mt-20">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-between gap-10 md:gap-20 py-10 border-b border-white/30">

        {/* Logo & Description */}
        <div className="flex flex-col md:items-start items-center w-64">
          <div className="flex items-center gap-2">
           {/* Logo Image */}
           
          </div>

          <p className="mt-6 text-center md:text-left text-sm text-gray-500 dark:text-white/80 leading-relaxed">
            aaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaa
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col md:items-start items-center w-40">
          <h2 className="font-semibold text-gray-500 dark:text-white mb-5">Company</h2>
          <ul className="flex flex-col space-y-2 text-sm text-gray-500 dark:text-white/80">
            
            <li><a target='_blank' href="https://github.com/tharindi22?tab=overview&from=2025-02-01&to=2025-02-05" className="hover:text-white transition">Github</a></li>
            <li><a target='_blank' href="" className="hover:text-white transition">Linkdin</a></li>
            <li><a target='_blank' href="" className="hover:text-white transition">Instergram</a></li>

          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start w-80 ">
          <h2 className="font-semibold text-gray-500 dark:text-white/80 mb-5">Contact</h2>
          <p className='text-gray-500 dark:text-white/80'>
            Tel: 071 234 56 78 <br />
            Email: docappoinment@gmail.com 
            </p>
           
        </div>

      </div>


    </footer>
  )
}

export default Footer
