import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Footer'
import { JsonData } from '../../../data/data.json'



export default function MainSection({contacts}:{ contacts:JsonData["contacts"] }) {
  return (
    <section id="Home" className='osaker bg-cover bg-center bg-fixed'>
      <div className="flex flex-col items-center justify-evenly pb-10 pt-20 bg-[#A78BFA]/60">
        <div className="flex flex-col text-center items-center"> 
          <h1 className="text-2xl font-bold">Olá sou Yuuki!</h1>
          <h2 className="text-md font-bold">Desenvolvedor Front-end</h2>
          <p className="mr-[10px] sm:mr-[5px] sm:text-sm">Converse comigo!!</p> 
          <Footer contacts={contacts} />
        </div>
      <div className='pt-5'> 
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
    <div className="bg-[#A78BFA]/60 flex flex-col items-center ">
       <div className='bg-[#A78BFA] rounded-[30px] w-fit
        shadow-[1px_1px_5px] shadow-black border-[2.5px] border-black'>
          <h1 className='text-3xl font-bold text-center'>Sobre mim</h1>
          <p className='max-w-[500px] sm:text-md text-center text-sm mb-4 sm:pr-2'>Atualmente venho me dedicando na carreira de front end
            trabalhando com React JS, estou tambem aprendendo varias ferramentas como 
            Tailwind, SASS, NextJS. Pretendo criar muitos projetos e aperfeiçoar minhas habilidades
            e me aprofundar ainda mais em desenvolvimento web!
          </p>
        </div>
        <Image className='object-scale-down' src='/konataokay.png' alt='Okay sign' width='400' height='400'></Image>
      </div>
    </section>
  )
}
/* #CFB3DA */