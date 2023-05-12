import React from 'react'
import Image from 'next/image'
import { DataTypes } from '@/types/dataTypes'
import Link from 'next/link'


export default function TechsComponent({ techs, projects }:DataTypes) {
  return (<>
    <section className=''>Techs
      <div>
        <ul className='flex flex-row items-stretch justify-center flex-wrap gap-[35px] '>
          {techs?.map((tech:any) => (
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
      </div>
     </section>
     <section className=''>
      <h1>Confira Abaixo alguns de meus Projetos!</h1>
      <ul className='flex flex-row justify-center items-center flex-wrap gap-[35px]'>
        {projects?.map((project:DataTypes["projects"][0]) =>(
          <li key={project.id}>
            <Link className='' href={project.link}>
              <Image src={project.image} alt={project.title} width='500' height='280'
              className='rounded-[15px] h-[280px]'>
              </Image>
            </Link>
            <h1 className='flex justify-center mt-[10px]'>{project.title}</h1>
          </li>
        ))}
      </ul>
     </section>
     </>
  )
}

 