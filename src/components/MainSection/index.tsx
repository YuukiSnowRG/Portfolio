import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function MainSection() {
  return (
    <section id="Home" className='osaker bg-cover bg-center mt-7 bg-fixed top-2'>
      <div className="flex flex-col h-screen items-center justify-evenly  pt-11 bg-[#A78BFA]/70">
        <div className="flex flex-col text-center items-center"> 
          <h1 className="text-2xl font-bold">Olá sou Yuuki!</h1>
          <h2 className="text-md font-bold">Desenvolvedor Front-end</h2>
          <Link href="https://wa.me/message/EWNIIZZRWYKAK1">
            <button className='flex object-scale-down bg-violet-600 rounded-full border-100 px-1 py-1 items-center mb-3'>
            <p className="mr-[10px] sm:mr-[5px] sm:text-sm">Converse comigo!!</p> 
            
            <Image 
              src='/whatsapp.svg'
              alt='Whatsapp Icon'
              width='20' 
              height='20'
              ></Image>
            </button>
          </Link>
        </div>
      <div> 
        <Link href='https://www.linkedin.com/in/robson-gerlach-2424aa238/'>
          <Image 
            src="/YuukiS.png" 
            alt="YuukiS"
            width='500'
            height='500'
            className='rounded-[15px] object-scale-down shadow-[1px_1px_5px] shadow-black border-[2.5px] border-black mb-5'
          />
        </Link>
      </div>
      </div>

      {/* About Me Section */}
    <div className="bg-[#A78BFA]/70">
      <h1 className='text-3xl font-bold text-center'>Sobre mim</h1>
      <div className='flex flex-col sm:flex-row items-center justify-evenly'>
      <p className='max-w-[500px] sm:text-xm text-center text-sm mb-4 sm:mr-4 sm:mb-0'>Atualmente venho me dedicando a iniciar na carreira de front end
        trabalhando com React JS, estou tambem aprendendo varias ferramentas como 
        Tailwind, SASS, NextJS. Pretendo criar muitos projetos e aperfeiçoar minhas habilidades
        e me aprofundar ainda mais em desenvolvimento web!
      </p>
        <Image className='object-scale-down self-end' src='/konataokay.png' alt='Okay sign' width='400' height='400'></Image>
      </div>
    </div>
    </section>
  )
}
/* #CFB3DA */