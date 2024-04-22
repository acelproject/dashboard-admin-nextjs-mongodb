import React from 'react'

const Pagination = () => {
  return (
    <div className='p-[10px] flex justify-between'>
        <button className='py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed bg-slate-500 rounded-md' disabled>Prev</button>
        <button className='py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed bg-slate-400 rounded-md'>Next</button>
    </div>
  )
}

export default Pagination