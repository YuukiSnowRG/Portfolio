"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { LuMenu, LuX } from "react-icons/lu";

export default function Header() {
  
  const [nav, setNav] = useState(false)
  
  function handleNav() {
    setNav(!nav)
  }

  return (
      <header className='fixed top-0 left-0 z-10 justify-between w-full bg-[#A78BFA]
      shadow-[1px_1px_5px] shadow-black border-b-[2.5px] border-black'>
      <div 
        className='text-xs md:text-lg lg:text-xl m-auto
        flex items-center justify-between ml-1 mt-1'>

        <Link href='https://github.com/YuukiSnowRG' className='flex items-center gap-2'>
            <Image src="snow.svg" alt="" width={50} height={50}/>
            <h1 className='h-full'>Yuuki</h1>
        </Link>
          <ul className='gap-5 h-full mr-1 hidden sm:flex shinytext'>
            <li><Link href="#Home">Home</Link></li>
            <li><Link href="#Techs">Techs</Link></li>
            <li><Link href="#Projects">Projetos</Link></li>
            <li><Link href="#Contacts">Contatos</Link></li>
          </ul>

          {/* Mobile Section */}
          <div className='sm:hidden z-10'>
            {nav
            ? <LuX onClick={handleNav} size={35} style={{ color: 'black' }} />
            : <LuMenu onClick={handleNav} size={35} style={{ color: 'black' }} />
            }
          </div>
            <div className={
            nav
            ?
            'sm:hidden absolute top-[2.8rem] bottom-0 right-0 left-[60%] w-full h-[140px] bg-[#A78BFA] ease-in duration-300 shadow-[0_0px_5px_3px_rgba(0,0,0,0.7)]'
            :
            'sm:hidden absolute top-[2.8rem] bottom-0 right-0 left-[110%] w-full h-[140px] ease-in duration-300'
            }>
            <ul className='text-xl ml-1 shinytext'>
              <li><Link href="#Home">Home</Link></li>
              <li><Link href="#Techs">Techs</Link></li>
              <li><Link href="#Projects">Projetos</Link></li>
              <li><Link href="#Contacts">Contatos</Link></li>
            </ul>
            </div>
      </div>
    </header>
  )
}