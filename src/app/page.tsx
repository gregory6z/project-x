import { Depositions } from "./(not-connected)/(Home)/components/Depositions"
import { Hero } from "./(not-connected)/(Home)/components/Hero"
import { Merchan } from "./(not-connected)/(Home)/components/Merchan"
import { VideoContainer } from "./(not-connected)/(Home)/components/VideoContainer"
import { ButtonsSocialNetworks } from "./components/ButtonsSocialNetworks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { LastInvestments } from "./components/Investments"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Merchan></Merchan>
      <VideoContainer />
      <LastInvestments />
      <div className="border-custom">
        <Depositions />
      </div>
      <Footer />
      <ButtonsSocialNetworks />
    </>
  )
}
