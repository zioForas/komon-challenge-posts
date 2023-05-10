'use client'

import { Navbar } from './Navbar'
import './style.css'
import { Header } from './Header'
import Footer from '@/components/Footer';


function Home() {
  return (
   <main>
    <div className="sc-225a296d-0 flCFEB w-full flex flex-col justify-center items-center pr-6 pl-6 pt-4 pb-10 md:pb-20 relative">
    <Navbar />
    <div className="komon-5">
    <Header />     
    </div>
    </div>
    <div className="pt-28 bg-[#1D1D1B]"></div>
   < Footer/>
   </main>
  )
}

export default Home;
