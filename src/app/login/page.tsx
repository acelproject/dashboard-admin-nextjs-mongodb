import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <form action="" className='bg-bgSoft p-[50px] rounded-md w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px]' >
        <input type="text" className='w-full p-[30px] border border-[#2e374a] rounded-md bg-bg text-white  ' placeholder='Username'/>
        <input type="text" className='w-full p-[30px] border border-[#2e374a] rounded-md bg-bg text-white  ' placeholder='Password'/>
        <button className='p-[30px] w-full bg-[teal] text-white border-none cursor-pointer rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage