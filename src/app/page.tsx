import React from 'react'
import { FaGithub } from "react-icons/fa";
import Input from './components/Input';

const Home = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-center mt-10 md:text-6xl text-3xl font-bold'>
        <h2>Built with{" "} <span className='bg-gradient-to-r from-purple-600 via-blue  -500 to-indigo-400 inline-block text-transparent bg-clip-text'>
          Tesseract JS
          </span></h2>
      </div>
      <Input/>
    </div>
  )
}

export default Home
