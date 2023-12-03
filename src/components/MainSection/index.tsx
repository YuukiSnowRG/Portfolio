import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function MainSection() {
  return (
    <section id="Home" className='mt-0'>
      <div className='flex flex-row items-center justify-evenly'>
        <div> {/* container grande que fica na esquerda */}
          <h1 className="text-3xl bold">Olá sou o Yuuki!</h1>
          <h2 className="text-xl bold">Desenvolvedor Front-end</h2>
          <Link href="https://wa.me/message/EWNIIZZRWYKAK1">
            <button className='flex flex-row bg-violet-600 rounded-full border-100 px-1 py-1 items-center'>
            <p className="mr-[10px]">Converse comigo!!</p> 
            
            <Image 
              src='/whatsapp.svg'
              alt='Whatsapp Icon'
              width='20' 
              height='20'
              ></Image>
            </button>
          </Link>
        </div>
      <div> {/* container da imagem que fica a direita */}
        <Image src="/programming.png" alt="Laincore" width='500' height='500'
         className='rounded-[15px] shadow-[1px_1px_5px] shadow-black border-[2.5px] border-black mb-5'
         />
      </div>
      </div>
    <div>
      <h1 className='flex flex-col items-center text-3xl bold'>Sobre mim</h1>
      <div className='flex items-center justify-evenly'>
      <p className='max-w-[500px] text-xl'>Atualmente venho me dedicando a iniciar na carreira de front end
        trabalhando com React JS, estou tambem aprendendo varias ferramentas como 
        Tailwind, SASS, NextJS. Pretendo criar muitos projetos e aperfeiçoar minhas habilidades
        e me aprofundar ainda mais em desenvolvimento web!
      </p>
        <Image className='object-scale-down' src='/konataokay.png' alt='Okay sign' width='400' height='400'></Image>
      </div>
    </div>
    </section>
  )
}
/* #CFB3DA */

