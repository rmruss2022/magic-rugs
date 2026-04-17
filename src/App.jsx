import Nav from './components/Nav'
import Hero from './components/Hero'
import Dateline from './components/Dateline'
import Story from './components/Story'
import Generations from './components/Generations'
import Journey from './components/Journey'
import Craft from './components/Craft'
import Family from './components/Family'
import Classes from './components/Classes'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink-soft">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Dateline />
        <Story />
        <Generations />
        <Journey />
        <Craft />
        <Family />
        <Classes />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
