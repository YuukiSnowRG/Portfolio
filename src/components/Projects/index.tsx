import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { JsonData } from '../../../data/data.json'


export default function Projects({projects}:{ projects:JsonData["projects"] }) {
  return (
    <section id="Projects">
      <h1 className="flex flex-col items-center text-3xl bold my-5">Confira Abaixo alguns de meus Projetos!</h1>
      <ul className='flex flex-row justify-center items-center flex-wrap gap-[35px]'>
        {projects?.map((project:JsonData["projects"][0]) =>(
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
  )
}

