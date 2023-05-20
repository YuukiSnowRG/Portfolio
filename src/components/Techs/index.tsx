import React from 'react'
import Image from 'next/image'
import { JsonData } from '../../../data/data.json'


export default function TechsComponent({ techs }:{ techs:JsonData["techs"] }) {
  return (
    <section id="Techs" className=''>
        <h1 className="flex flex-col items-center text-3xl bold my-5"> Techs</h1>
        <h2 className="flex flex-col items-center text-xl mb-5">Tecnologias que utilizo</h2>
        <ul className='flex flex-row items-stretch justify-center flex-wrap gap-[35px] '>
          {techs?.map((tech:JsonData["techs"][0]) => (
          <li key={tech.id} className='p-[30px] rounded-[15px] bg-violet-600 text-center basis-[25%] shrink-0 grow-0'>
            <div className=' text-center flex flex-col items-center mb-[15px]'>
            <Image src={tech.image} alt={tech.title} width='50' height='50'
            className='mb-[15px]'></Image>
              <p className='mb-[15px]'>{tech.id}</p>
              <p className='mb-[15px]'>{tech.description}</p>
            </div>
          </li>
          ))}
        </ul>
      </section>
  )
}

 