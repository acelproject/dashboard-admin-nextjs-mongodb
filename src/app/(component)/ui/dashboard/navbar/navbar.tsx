"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications ,MdOutlineChat,MdPublic,MdSearch} from 'react-icons/md'

const Navbar = () => {
const pathname=usePathname()
  return (
    <div className='flex items-center justify-between bg-bgSoft rounded-md py-4 px-5'>
      <div className='capitalize'>{pathname.split("/").pop()}</div>
      <div className='flex items-center gap-x-5'>
        <div className='flex items-center gap-x-3 bg-[#2e374a] p-[10px] rounded-lg'>
          <MdSearch/>
          <input type="text" placeholder='Search...' className='bg-transparent text-textSoft'/>
        </div>
        <div className='flex items-center gap-4'>
          <MdOutlineChat size={20}/>
          <MdNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar