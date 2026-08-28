import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import AdditionalProjects from './components/AdditionalProjects'
import AI from './components/AI'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <AdditionalProjects />
        <AI />
        <Experience />
        <Skills />
        <Credentials />
      </main>
      <Footer />
    </>
  )
}