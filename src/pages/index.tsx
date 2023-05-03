import Header from '@/components/Header'
import MainSection from '@/components/MainSection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
    </>
  )
}
