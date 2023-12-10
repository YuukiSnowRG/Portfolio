import React from 'react'
import { JsonData } from '../../../data/data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer({contacts}:{ contacts:JsonData["contacts"] }) {
  return (
    <footer>
      <div id="Contacts" className='py-2'>
        <ul className={"flex items-center justify-center gap-[20px]"}>
          {contacts.map((contact:JsonData["projects"][0]) =>(
            <li className='bg-black rounded-full p-[5px] hover:bg-white transition duration-200' key={contact.id}>
              <Link href={contact.link}>
                <Image src={contact.image} alt={contact.title} width={50} height={50}>

                </Image>
              </Link>
            </li>
          )
          )}
        </ul>
      </div>
    </footer>
  )
}

