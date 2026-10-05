import {
  About,
  Courses,
  Evanio,
  Experiences,
  Faq,
  Featured,
  FinalCta,
  Footer,
  Header,
  Hero,
  Intro,
  Journey,
  Methodology,
  Testimonials,
} from "@/components"
import { useRevealAll } from "@/hooks/use-reveal"

function App() {
  useRevealAll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Courses />
        <Featured />
        <Evanio />
        <Methodology />
        <Journey />
        <Experiences />
        <Testimonials />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
