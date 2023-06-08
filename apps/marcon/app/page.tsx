import Image from 'next/image'
import Navbar from './components/navbar'
import FirstPage from './components/first_page'
import SecondPage from './components/second_page'
import ThirdPage from './components/third_page'
import FourthPage from './components/fourth_paage'
import FifthPage from './components/fifth_page'
import SixthPage from './components/sixth_page'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar/>
      <FirstPage/>
      <SecondPage/>
      <hr/>  
      <ThirdPage/>
      <FourthPage/>
      <hr/>
      <FifthPage/>
      <hr/>
      <SixthPage/>
      <Footer/>
    </main>
  )
}
