import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import Projects from '@/components/Projects'
import TechsComponent from '@/components/Techs'
import { Inter } from 'next/font/google'
import { JsonData } from '../../data/data.json'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
interface Props {
  techs: JsonData['techs']
  projects: JsonData['projects']
  contacts: JsonData['contacts']
}

export default function Home({techs, projects, contacts}:Props) {
  return (
    <>
      <Header />
      <MainSection/>
      <TechsComponent techs={techs} />
      <Projects projects={projects} />
      <Footer contacts={contacts} />
    </>
  )
}
export async function getStaticProps(){
  const {techs, projects, contacts}:JsonData = await require("data/data.json")
  /* console.log(techs, projects, contacts) */ /* debug return */
 return{
  props: {
   techs,
   projects,
   contacts
  }
 }
}

