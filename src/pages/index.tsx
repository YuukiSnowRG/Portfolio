import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body>
    <header className='fixed top-0 left-0 right-0 justify-between w-screen'>

      <div className='text-xs sm:text-base md:text-lg lg:text-3xl
        flex flex-row items-center justify-between ml-2 mt-1 mr-2 mb-2'>

        <a href='' className='flex flex-row items-center gap-2'>
            <Image src="snow.svg" alt="" width={50} height={50}/>
            <h1>Robson</h1>
        </a>

        <nav className='
          flex flex-row items-center justify-between'
          >
        
        {/* text means that text will be transformed
            the syntax is pretty simple to understand
            and it is possible to customize it */}
        {/* text-xs = transform the text to extra small
            text-base = transform the text to base size
            text-lg = large size
            text-3xl = probably extra large x 3
            
            the base value seems text-xs with other parameters being
            modified by size of screen set into tailwind config
            theme -> screens which means that it is fully customizable*/}
          
          <ul className='flex flex-row gap-5 justify-end items-center'>
            <li><a href="">Home</a></li>
            {/* mb-1 aka margin-bottom it defines margin bottom to
            what is defined as 1 on the tailwing config theme -> spacing
            AKA 8px, the 1 is called the argument of the class while mb
            is the class */}
            <li><a href="">Techs</a></li>
            {/* we can also directly inject arbitrary values "bg-[#da55a3]" */}
            <li><a href="">Projects</a></li>
            <li><a href="">Contact Me</a></li>
            <li><a href="">Contact Links</a></li>
          </ul>
      </nav>

      </div>

    </header>
    <main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
    </body>
  )
}
