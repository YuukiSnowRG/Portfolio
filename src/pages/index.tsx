import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import TechsComponent from '@/components/Techs'
import { DataTypes } from '@/types/dataTypes'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
interface Props {
  techs: DataTypes['techs']
  projects: DataTypes['projects']
}

export default function Home({techs, projects}:Props) {
  return (
    <>
      <Header />
      <MainSection/>
      <TechsComponent techs={techs} projects={projects} />
    </>
  )
}
export async function getStaticProps(){
  const {techs, projects}:DataTypes = await import("data/data.json")
  console.log(techs, projects)
 return{
  props: {
   techs,
   projects
  }
 }
}

