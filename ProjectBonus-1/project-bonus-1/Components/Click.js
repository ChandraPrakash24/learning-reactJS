"use client";
import React from 'react'

const Button = ({ ul }) => {
  return (
    <>
    <button className='bg-slate-400 text-white p-2 rounded-lg mx-8 mt-8' onClick={()=>{
        ul('Raya');
    }}>Button</button>
    </>
  )
}

export default Button