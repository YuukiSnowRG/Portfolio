import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import type { TechsData } from '@/types/techs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface Props {
  techs: TechsData['techs']
}

export default function Home({techs}:Props) {
  return (
    <>
      <Header />
      <MainSection techs={techs} />
    </>
  )
}
export async function getStaticProps(){
  const { techs }:TechsData = await import("data/data.json")
  console.log(techs)
 return{
  props: {
   techs,
  }
 }
}

