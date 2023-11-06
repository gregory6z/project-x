import { MotionCascade } from "@/app/components/Framer-motion/motion"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"
import { BarChart4, Landmark, ShieldCheck, Wallet } from "lucide-react"

import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export function Adversiting() {
  return (
    <div className=" z-1  flex h-full w-full  border-b  border-solid border-gray-800    bg-background-dark-900    xl:relative">
      <div className=" lg z-1  mx-[1.25rem]  my-16 flex flex-col items-center gap-16 md:flex-row md:px-4 lg:mx-auto lg:my-0 lg:h-[calc(100vh-8rem)] lg:max-w-[1120px] lg:justify-between lg:gap-12 lg:px-16 xl:px-0">
        <MotionFadeElement>
          <div className=" z-10  mx-auto  flex h-[24vh] w-full items-center  justify-center rounded-[30px] border border-solid border-gray-300 bg-gradient-to-br from-gray-200 lg:mx-0 lg:h-[500px] lg:w-[460px]     ">
            <h1
              className={` w-[85%]   text-3xl font-semibold tracking-wide lg:text-6xl lg:leading-[110%]`}
            >
              une expérience simple, sécurisée et entièrement{" "}
              <span className="text-yellow-normal">numérique</span>
            </h1>
          </div>
        </MotionFadeElement>

        <div className="">
          <MotionCascade
            delay={0}
            className=" z-1   flex flex-col gap-8 text-lg font-normal text-gray-200 lg:relative lg:flex-1 lg:text-2xl xl:relative  "
          >
            <div className="flex  items-center  gap-4">
              <ShieldCheck className="h-10 w-10 text-yellow-normal" />
              <p className="opacity-80">
                Entreprises sélectionnées et opérations garanties
              </p>
            </div>

            <div className="flex  gap-4">
              <BarChart4 className="h-10 w-10  items-center  text-yellow-normal" />
              <p className="opacity-80">
                Immobilier, énergie, projets d'investissement, entre autres
              </p>
            </div>

            <div className="flex  gap-4">
              <Wallet className="h-10 w-10 items-center  text-yellow-normal" />
              <p className="opacity-80">
                Pas de frais d'ouverture et de fonctionnement d'un compte
              </p>
            </div>
            <div className="flex  gap-4">
              <Landmark className="h-10 w-10 items-center  text-yellow-normal" />
              <p className="opacity-80">
                Pas de frais d'ouverture et de fonctionnement d'un compte
              </p>
            </div>
          </MotionCascade>
        </div>
      </div>
    </div>
  )
}
