"use client"
import React, { useEffect, useState } from 'react'

const Loader = ({isLoading, loading}) => {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      isLoading(false)  
    }, 100);

    return () => clearTimeout(timeout);
  },[loading])

  return (
    <div>
      {loading && (
        <div className='text-white h-svh w-svw absolute bg-green-500/5 z-[999999999] text-4xl grid place-content-center'>
          Loading.....
        </div>
      )}
    </div>
  )
}

export default Loader