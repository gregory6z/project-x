import { InvestmentCard } from "@/app/(not-connected)/investments/components/investmentsContainer/components/investmentCard"
import { MotionElement } from "../Framer-motion/motion"
import { SliderContainer } from "../SliderContainer"
import { CardInvestiment } from "./components/CardInvestment"
import ScrollToTopOnMount from "../ScrollTop"

export function LastInvestments() {
  return (
    <ScrollToTopOnMount>
      <div className=" flex w-full border-b border-solid  border-gray-800 bg-background-dark-900   px-[1.125rem]  lg:items-center  xl:py-0 ">
        <div className=" flex h-full    min-h-[calc(100vh+14rem)] flex-col gap-16  overflow-hidden py-16 lg:mx-auto lg:max-w-[1225px] lg:justify-center   lg:gap-16  lg:px-16  lg:py-16  xl:px-0 ">
          <div className="flex h-full w-full  justify-between">
            <div className="">
              <MotionElement>
                <h1 className="  w-[60%]  text-4xl font-semibold tracking-tight text-gray-100/90 ">
                  Ne manquez pas les meilleures opportunités du marché .
                </h1>
              </MotionElement>
              <MotionElement delay={0.25}>
                <p className="classname mt-4 text-xl text-gray-100/60">
                  Accédez aux offres les plus récentes et les plus
                  intéressantes.
                </p>
              </MotionElement>
            </div>
            <div>
              <p className="text-lg text-yellow-normal">
                Ver catalogo completo
              </p>
            </div>
          </div>

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
