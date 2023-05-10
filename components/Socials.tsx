import React from 'react'
import PostsButtonShow  from './PostsButtonShow'

export const Socials = () => {
  return (
    <>
     <div className="h-12 flex justify-between items-center text-white mt-28 md:mt-32 w-full scroll-pl-3.5">
          <div className="flex w-full flex-col items-center justify-center px-6">
            {" "}
            <p className="mb-2 text-center text-xs font-normal uppercase md:text-2xl">
              <div className='pt-28'>
            <PostsButtonShow/>
            </div>
            </p>
            <div className="flex w-full items-center justify-between">
              {/* socials go here */}
            </div>
          </div>
            </div>
    </>
    )
}
