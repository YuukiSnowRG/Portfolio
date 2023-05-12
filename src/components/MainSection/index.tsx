import React from 'react'
import Image from 'next/image'



export default function MainSection() {
  return (
    <> 
    <div className='flex flex-row items-center justify-around mt-0'> {/* container flex para posicionar um ao lado do outro */}
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

     
    </>
  )
}
/* #CFB3DA */

