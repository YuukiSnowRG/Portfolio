import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { JsonData } from '../../../data/data.json'


export default function Projects({projects}:{ projects:JsonData["projects"] }) {
  return (
    <section className='laincore bg-cover bg-center bg-fixed' id="Projects">
      <div className='flex flex-col bg-[#A78BFA]/45 items-center'>
      <h1 className="text-3xl font-bold my-5 items-center ">Projetos</h1>

      <h2 className="text-xl font-bold my-5 items-center ">Confira Abaixo alguns de meus Projetos!</h2>
      
      <ul className='flex flex-row justify-items-center justify-center items-center flex-wrap gap-[35px]'>
        {projects?.map((project:JsonData["projects"][0]) =>(
          <li key={project.id}>
            <Link className='' href={project.link}>
              <Image src={project.image} alt={project.title} width='500' height='280'
              className='rounded-[15px] h-[280px] shadow-[1px_1px_5px] shadow-black border-[2.5px] border-black'>
              </Image>
            </Link>
            <h1 className='flex justify-center mt-[10px]'>{project.title}</h1>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

