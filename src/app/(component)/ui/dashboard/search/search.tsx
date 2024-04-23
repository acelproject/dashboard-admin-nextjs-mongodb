import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}:any) => {
  return (
    <div className='flex items-center gap-x-3 bg-[#2e374a] p-[10px] rounded-lg lg:w-2/12 md:w-4/12 w-6/12'>
        <MdSearch/><input type="text" placeholder={ placeholder} className='truncate bg-transparent text-textSoft w-[80%]'/>
    </div>
  )
}

export default Search