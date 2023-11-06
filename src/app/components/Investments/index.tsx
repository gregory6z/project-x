import { InvestmentCard } from "@/app/(not-connected)/investments/components/investmentsContainer/components/investmentCard"
import { MotionElement } from "../Framer-motion/motion"
import { SliderContainer } from "../SliderContainer"
import { CardInvestiment } from "./components/CardInvestment"
import ScrollToTopOnMount from "../ScrollTop"

export function LastInvestments() {
  return (
    <ScrollToTopOnMount>
      <div className=" flex w-full border-b  border-solid border-gray-800 bg-background-dark-900  px-[1.125rem]  lg:items-center lg:py-16 xl:py-0 ">
        <div className=" flex flex-col   gap-16 overflow-hidden py-16 lg:mx-auto  lg:h-[calc(100vh+5rem)] lg:max-w-[1120px] lg:justify-center   lg:gap-16  lg:px-16  lg:py-16  xl:px-0 ">
          <MotionElement delay={0}>
            <h1 className=" h1-custom text-gray-100 lg:w-[80%] ">
              Consultez les dernières{" "}
              <span className="text-yellow-normal">offres</span> publiées
            </h1>
          </MotionElement>

          <SliderContainer>
            <CardInvestiment />
            <CardInvestiment />
            <CardInvestiment />
            <CardInvestiment />
            <CardInvestiment />
          </SliderContainer>
        </div>
      </div>
    </ScrollToTopOnMount>
  )
}
