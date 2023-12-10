import React from 'react'
import Image from 'next/image'
import { JsonData } from '../../../data/data.json'


export default function TechsComponent({ techs }:{ techs:JsonData["techs"] }) {
  return (
    <section id="Techs" className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold my-5"> Techs</h1>
        <h2 className="flex flex-col items-center text-xl mb-5">Tecnologias que utilizo</h2>
        <ul className='grid mr-4 ml-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 items-stretch justify-center justify-items-center flex-wrap mb-2 gap-[35px] '>
          {techs?.map((tech:JsonData["techs"][0]) => (
          <li key={tech.id} className='pt-2 max-w-xs pb-1 rounded-[15px] bg-violet-600 text-center object-scale-down  sm:w-full w-2/4'>
            <div className=' text-center flex flex-col items-center mb-3'>
            <Image src={tech.image} alt={tech.title} width='50' height='50'
            className='mb-3'></Image>
              <p className='mb-3 text-md sm:text-lg font-bold'>{tech.id}</p>
              <p className='mb-3 text-sm sm:text-md'>{tech.description}</p>
            </div>
          </li>
          ))}
        </ul>
      </section>
  )
}

 