'use client'

import React, { useState } from 'react'
import { FaImage } from "react-icons/fa6";
import { useRef } from 'react';
import convertor from '../lib/convertor';
import TextCard from './TextCard';

const Input = () => {
  const imgInputRef:any = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [text, setText] = useState<Array<string>>([])
  const openBrowse = () => {
    imgInputRef.current?.click();
  }

  const convert = async (url: string) => {
    if(url)
    {
      setLoading(true);
      await convertor(url).then((txt: string) => {
        let copytext: Array<string> = text;
        copytext.push(txt);
        setText(copytext);
      });  
    }
    setLoading(false);
  }
  return (
    <>
    <input 
    type='file' 
    ref={imgInputRef}
    hidden 
    required 
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const url: string = URL.createObjectURL(e.target.files[0]);
            console.log(url)
            convert(url);
        }
    }}/>
    <div>
    <div onClick={openBrowse} 
    onDrop = {(e: any) => {
      e.preventDefault();
      const url: string = URL.createObjectURL(e.dataTransfer.files?.[0]); 
      convert(url);
    }}
    onDragOver={(e: any) => {
      e.preventDefault();
    }}
    className='text-white w-full md:p-20 p-5 flex items-center justify-center md:mt-0 mt-8'>
        <div className='w-full p-5 bg-gray-800 min-h-[50vh] rounded-xl cursor-pointer'>
            <div className='flex items-center justify-center flex-col gap-4 mt-4 '>
                <p className='text-center text-4xl font-[700] text-gray-400'>{loading ? 'Processing...' : 'Drop or Upload your image'}</p>
                <span className='text-[150px] text-gray-400'>
                    <FaImage className={loading ? 'animate-pulse' : ''}/>
                </span>
            </div>
        </div>
    </div>
        
        <div className='md:px-20 px-5 space-y-5'>
          {text.map((t, i) => {
            return <TextCard t={t} i={i}/> 
          })}
        </div>
    </div>
    </>
  )
}

export default Input