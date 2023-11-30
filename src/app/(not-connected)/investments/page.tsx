import { Suspense } from "react"
import { InvestmentsContainer } from "./components/investmentsContainer"
import SkeletonInvestments from "./components/investmentsContainer/components/SkeletonInvestments"
import { Benefits } from "./components/Benefits"

import { SimulatorComponent } from "./components/SimulatorComponent"
import { TextMotion } from "@/app/components/Framer-motion/motion"

export default async function Investments() {
  return (
    <div className="mb-20">
      <TextMotion
        initial={{
          translateY: "-10%",
          opacity: 0.3,
          translateZ: 0,
          filter: "blur(20px)",
        }}
        animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <header className=" mt-12 grid  grid-cols-1 justify-between  gap-4 lg:mt-16  lg:grid-cols-2 lg:items-center lg:gap-0">
          <h1 className="  font-semibold tracking-tight text-gray-100/90 lg:w-[80%] lg:text-5xl   ">
            Offres publiques simplifiées
          </h1>

          <p className="w-[80%]    text-gray-100 opacity-70 lg:max-w-[80%] lg:text-base xl:ml-auto xl:max-w-[80%] xl:text-xl ">
            Dans cette section, vous trouverez des offres publiques simplifiées
            de certificats de créances provenant de divers types
            d'investissements alternatifs, soigneusement sélectionnés par des
            émetteurs.
          </p>
        </header>
      </TextMotion>
      <Suspense fallback={<SkeletonInvestments />}>
        <InvestmentsContainer />
      </Suspense>

      <Benefits />

      <SimulatorComponent />
    </div>
  )
}
