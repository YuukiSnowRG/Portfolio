import React from 'react'
import Image from 'next/image'
import { TechsData } from '@/types/techs'



export default function MainSection({ techs }:TechsData) {
  return (
    <> 
    <div className='flex flex-row items-center justify-around'> {/* container flex para posicionar um ao lado do outro */}
      <div> {/* container grande que fica na esquerda */}
        <h1>Olá sou o Yuuki!</h1>
        <h2>Desenvolvedor Front-end</h2>
        <a href="insira whats aqui">
          <button className='flex flex-row bg-violet-600 rounded-full border-100 px-1 py-1 items-center'>
          <p>Converse comigo!!&nbsp; </p> 
          
          <Image src='/whatsapp.svg' alt='Whatsapp Icon' width='20' height='20'></Image>
          </button>
        </a>
      </div>
      <div> {/* container da imagem que fica a direita */}
      <Image src="/embreve.gif" alt="Em breve Placeholder" width='500' height='500' />
    </div>
    </div>
     
     <div>{/* container do sobre mim contendo informações basicas de auto promoção */}
      <h1>Sobre mim</h1>
      <p>Placeholder coisas sobre mim</p>
     </div>

     <section>Techs
      <div>
        <ul className='flex flex-row items-stretch justify-center flex-wrap gap-[35px] '>
          {techs?.map((tech:any) => (
          <li key={tech.id} className='p-[30px] rounded-[15px] bg-violet-600 text-center basis-[25%] shrink-0 grow-0'>
            <div className=' text-center flex flex-col items-center '>
            <Image src={tech.image} alt={tech.title} width='50' height='50'></Image>
              <p>{tech.id}</p>
              <p>{tech.description}</p>
            </div>
          </li>
          ))}
          
        </ul>
      </div>
     </section>
    </>
  )
}
/* #CFB3DA */
/* special thanks to https://icons8.com/ */
