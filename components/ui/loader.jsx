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
        <div className='text-white h-svh w-svw absolute bg-green-500/5 z-[999999999]'>
          <p>This website is under development</p>
          <p>Some features may not work properly.</p>
        </div>
      )}
    </div>
  )
}

export default Loader