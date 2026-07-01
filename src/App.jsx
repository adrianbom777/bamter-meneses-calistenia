import Header from './components/Header'
import CalisteniaAmbience from './components/CalisteniaAmbience'
import WhatsAppFAB from './components/WhatsAppFAB'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Method from './sections/Method'
import Features from './sections/Features'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <>
      <CalisteniaAmbience />
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Method />
        <Features />
        <FinalCTA />
      </main>
      <WhatsAppFAB />
    </>
  )
}
