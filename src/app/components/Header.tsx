import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='text-white w-full flex justify-between items-center md:px-20 py-5 px-5 sticky top-0 left-0 backdrop-blur-xl border-b'>
          <div className='hover:bg-white hover:text-black rounded-lg transition-all duration-500 px-2 py-1'>
            <Link href='/'>
            <h1 className='text-2xl font-bold '>GENIUS</h1>
            </Link>
          </div>
          
        <Link href={'https://github.com/karthikrajagit/image-text'}>
            <div className='flex gap-2 items-center px-2 py-1 rounded border hover:bg-white hover:text-black transition-all duration-300'>
                <span className='font-bold'>Github</span>
                <span className='font-bold'>
                <FaGithub />
                </span>
            </div>
        </Link>  
        </div>

    </div>
  )
}

export default Header