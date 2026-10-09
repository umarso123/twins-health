import { Contact } from './components/Contact'
import { ConnectedEcosystem } from './components/ConnectedEcosystem'
import { Footer } from './components/Footer'
import { GHEBanner } from './components/GHEBanner'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SanedHealth } from './components/SanedHealth'
import { Team } from './components/Team'
import { WhoWeAre } from './components/WhoWeAre'
import { WhoWeWorkWith } from './components/WhoWeWorkWith'
import { WhyWeExist } from './components/WhyWeExist'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <WhoWeAre />
        <WhyWeExist />
        <SanedHealth />
        <WhoWeWorkWith />
        <ConnectedEcosystem />
        <Team />
        <GHEBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
