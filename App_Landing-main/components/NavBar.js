import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='relative'>
      <div className="container mx-auto py-2 flex flex-col lg:flex-row lg:justify-between items-center relative">
        {/* Star at the top left corner */}
        <img src="/assets/star1.svg" alt="" className="absolute top-12 left-6 w-6 h-6" />
        
        <div className="flex items-center gap-10">
          <img src="assets/logo.svg" alt="" />
          <div className="flex items-center gap-7">
            <Link href='/' className='text-primary font-semibold text-lg'>
              Home
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
              About
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
              Pricing
            </Link>
            <Link href='/' className='text-gray-800 font-medium text-lg'>
              Features
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-14 relative">
          <button className="btn btn-active rounded-none hover:bg-primary border-none">Download Now</button>
          {/* Star below the "Download Now" button */}
          <img src="/assets/star1.svg" alt="" className="w-14 h-6" />
        </div>
      </div> 
    </div>
  )
}

export default NavBar

