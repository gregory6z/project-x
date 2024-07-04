import { Button } from "@/app/components/Button"
import { MotionElement } from "@/app/components/Framer-motion/motion"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"
import { SimulatorForm } from "./SimulatorForm"

export function SimulatorComponent() {
  return (
    <main className="flex w-full flex-col justify-center gap-16  text-gray-100/90 ">
      <MotionElement delay={0}>
        <h1 className="  text-2xl font-bold lg:w-[80%]  lg:text-5xl">
          Découvrez le potentiel financier qui vous attend en investissant avec
          Paris Inv.
        </h1>
      </MotionElement>

      <MotionFadeElement>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="order-2 flex h-full flex-col  gap-6 md:order-none lg:w-[30%]">
            <p className="opacity-70 lg:text-2xl">
              Opérations conclues avec succès, offrant des rendements
              attractifs. Découvrez comment nos stratégies d'investissement
              peuvent dynamiser vos finances dès maintenant
            </p>
            <div className="h-16 w-full ">
              {/* <Button
                className=" h-full w-full  "
                text={" Devenez un investisseur"}
              ></Button> */}
            </div>
          </div>
          <div className="rounded-xl border-2 border-gray-700 bg-background-dark-900 p-8 lg:w-[70%]">
            <SimulatorForm />
          </div>
        </div>
      </MotionFadeElement>
    </main>
  )
}
