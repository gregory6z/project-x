import { InvestmentCard } from "@/app/(not-connected)/investments/components/investmentsContainer/components/investmentCard"
import { MotionElement } from "../Framer-motion/motion"
import { SliderContainer } from "../SliderContainer"
import { CardInvestiment } from "./components/CardInvestment"
import ScrollToTopOnMount from "../ScrollTop"

export function LastInvestments() {
  return (
    <ScrollToTopOnMount>
      <div className=" py-25 flex w-full border-b  border-solid border-gray-800 bg-background-dark-900 px-[1.125rem] py-24  lg:items-center  xl:py-0 ">
        <div className=" flex h-full    flex-col gap-16 overflow-hidden  lg:mx-auto lg:min-h-[calc(100vh+14rem)] lg:max-w-[1225px] lg:justify-center lg:gap-16   lg:px-16  lg:py-16  lg:py-16  xl:px-0 ">
          <div className="flex h-full w-full  justify-between">
            <div className="">
              <MotionElement>
                <h1 className="text-2xl font-semibold  tracking-tight text-gray-100/90 lg:w-[60%] lg:text-4xl ">
                  Ne manquez pas les meilleures opportunités du marché .
                </h1>
              </MotionElement>
              <MotionElement delay={0.25}>
                <p className="classname mt-4 text-gray-100/60 lg:text-xl">
                  Accédez aux offres les plus récentes et les plus
                  intéressantes.
                </p>
              </MotionElement>
            </div>
            <div>
              <p className="text-right text-sm text-yellow-normal lg:text-lg">
                Voir plus
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
