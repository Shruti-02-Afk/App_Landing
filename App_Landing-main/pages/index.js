import Head from 'next/head'
import Image from 'next/image'
import ChooseUs from '../components/ChooseUs'
import Customize from '../components/Customize'
import Faq from '../components/Faq'
import Features from '../components/Features'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Features/>
      <ChooseUs/>
      <Customize/>
      <Testimonials/>
      <Faq/>
      <GetStarted/>
      <Footer/>

    </div>
  )
}
