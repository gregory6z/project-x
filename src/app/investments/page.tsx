import { Suspense } from "react"
import { InvestmentsContainer } from "./components/investmentsContainer"
import SkeletonInvestments from "./components/investmentsContainer/components/SkeletonInvestments"
import { Benefits } from "./components/Benefits"
import { Info } from "../Home/components/Depositions/components/Info"
import { SimulatorComponent } from "./components/SimulatorComponent"
import { Depositions } from "../Home/components/Depositions"

export default async function Investments() {
  return (
    <div className="mb-20">
      <header className=" mt-12 grid animate-animateOnOpen grid-cols-1 justify-between  gap-4 lg:mt-16  lg:grid-cols-2 lg:items-center lg:gap-0">
        <h1 className=" w-[80%] text-2xl text-gray-100  lg:text-6xl">
          Offres publiques simplifiées
        </h1>
        <p className="w-[80%]    text-gray-100 opacity-70 lg:max-w-[80%] lg:text-base xl:ml-auto xl:max-w-[80%] xl:text-xl ">
          Dans cette section, vous trouverez des offres publiques simplifiées de
          certificats de créances provenant de divers types d'investissements
          alternatifs, soigneusement sélectionnés par des émetteurs.
        </p>
      </header>
      <Suspense fallback={<SkeletonInvestments />}>
        <InvestmentsContainer />
      </Suspense>

      <Benefits />

      <SimulatorComponent />
    </div>
  )
}
