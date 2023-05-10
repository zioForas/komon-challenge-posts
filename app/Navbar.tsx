import React from 'react'

export const Navbar = () => {
  return (
   <>
     <div className="-z-5 absolute h-full w-full backdrop-blur-md"></div>
    <div className="h-12 w-full max-w-4xl flex items-center justify-between z-10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 cursor-pointer stroke-white stroke-1 text-white"><path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd"></path></svg>
    <div className='h-8 flex items-center cursor-pointer'>
      <div className="h-8 w-8 rounded-full sc-225a296d-5 doUhUZ"></div>
      <div className="sc-225a296d-1 jacywb h-4 mx-3 rounded-full bg-dark-20"></div>
      <a href="#">
        <span className="komon-1">
          <span className="komon-2">
            <img  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" className='komon-3' alt="" />
          </span>
          <img className='komon-4 mx auto rounded-full' src="https://storage.googleapis.com/komon-website/symbol-komon-white.svg" alt="" />
        </span>
      </a>
    </div>
    </div>
   </>
  )
}
