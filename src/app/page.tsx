import { Adversiting } from "./Home/components/Advertising"
import { Depositions } from "./Home/components/Depositions"
import { Hero } from "./Home/components/Hero"
import { Simulator } from "./Home/components/Simulator"
import { VideoContainer } from "./Home/components/VideoContainer"
import { Investments } from "./components/Investments"

export default function Home() {
  return (
    <>
      <Hero />
      <VideoContainer />
      <Adversiting />
      <Simulator />
      <Investments />
      <Depositions />
    </>
  )
}
