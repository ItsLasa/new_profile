'use client'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function navbar() {
  return (
    <div>
       <nav className=" bg-[#20202093] border-[1px] border-[#ffd04e] rounded-xl px-10 py-1 group relative z-20 flex gap-3 justify-center items-center items-center  mb-20 text-white">
      <div className="w-12 h-12 overflow-hidden">
        <video
          src="/profile.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full  object-cover rounded-2xl  border-white border-[2px]"
        />
      
      </div>
      <div className='flex gap-2 items-center'>
      <h1 className='text-3xl font-bold font-jaro hover:text-4xl'>Manoj Lasantha</h1>
      
      <GiHamburgerMenu className='opacity-45 hover:text-2xl visible group-hover:invisible' />
      </div>
     
    </nav>
    </div>
  )
}

export default navbar