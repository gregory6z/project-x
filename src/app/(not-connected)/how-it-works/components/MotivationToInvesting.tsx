import {
  MotionCascade,
  MotionElement,
} from "@/app/components/Framer-motion/motion"
import Image from "next/image"

import motivationImage1 from "@/app/assets/como-funciona-1.jpg"
import motivationImage2 from "@/app/assets/como-funciona-2.jpg"
import motivationImage3 from "@/app/assets/como-funciona-3.jpg"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"

export function MotivationToInvesting() {
  return (
    <div className="border-custom flex h-full w-full bg-background-dark-800">
      <div className="responsive-container lg:20 my-16 flex flex-col gap-8 lg:my-32 lg:gap-20">
        <MotionElement delay={0}>
          <h1 className=" h1-custom text-gray-100 lg:w-[80%]  ">
            Nous croyons que l'investissement devrait être
            <span className="text-yellow-normal"> simple</span>
          </h1>
        </MotionElement>

        <div className="flex flex-col gap-16 lg:gap-40">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <MotionFadeElement>
              <div className=" h-[240px] w-full  rounded-lg border-4 border-solid border-gray-800 bg-black md:h-[380px] md:w-[520px]">
                <Image
                  src={motivationImage1}
                  alt={""}
                  className="h-full w-full rounded-lg object-cover opacity-80 "
                ></Image>
              </div>
            </MotionFadeElement>

            <div className=" flex-1 text-gray-100">
              <MotionCascade delay={0} className="flex  flex-col gap-8">
                <h1 className="text-xl  font-semibold tracking-wide text-yellow-normal  lg:text-4xl">
                  Diversifiez votre portefeuille comme le font les grands
                  investisseurs.
                </h1>
                <p className="opacity-70 lg:text-xl">
                  Chez Paris Inv, vous accédez à des investissements jadis
                  réservés aux gros investisseurs. De plus, nous simplifions
                  chaque offre pour vous permettre de diversifier votre
                  portefeuille dès 100 euros
                </p>
              </MotionCascade>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row-reverse  md:items-center ">
            <MotionFadeElement>
              <div className=" h-[240px] w-full  rounded-lg border-4 border-solid border-gray-800 bg-black md:h-[380px] md:w-[520px]">
                <Image
                  src={motivationImage2}
                  alt={""}
                  className="h-full w-full rounded-lg object-cover opacity-80 "
                ></Image>
              </div>
            </MotionFadeElement>
            <div className=" flex-1  text-gray-100">
              <MotionCascade delay={0} className="flex  flex-col gap-8">
                <h1 className="text-xl  font-semibold tracking-wide text-yellow-normal  lg:text-4xl">
                  Protégez votre portefeuille des mouvements rapides du marché.
                </h1>
                <p className="opacity-70 lg:text-xl">
                  Accédez à des investissements adaptés à tous, avec des délais
                  et des modes de paiement variés, et des rendements fixes ou
                  variables, dans divers secteurs comme l'immobilier,
                  l'éducation, le capital-risque, et plus.
                </p>
              </MotionCascade>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <MotionFadeElement>
              <div className=" h-[240px] w-full  rounded-lg border-4 border-solid border-gray-800 bg-black md:h-[380px] md:w-[520px]">
                <Image
                  src={motivationImage3}
                  alt={""}
                  className="h-full w-full rounded-lg object-cover opacity-80 "
                ></Image>
              </div>
            </MotionFadeElement>

            <div className=" flex-1  text-gray-100">
              <MotionCascade delay={0} className="flex  flex-col gap-8">
                <h1 className="text-xl  font-semibold tracking-wide text-yellow-normal  lg:text-4xl">
                  Contrôlez vos investissements facilement depuis votre
                  téléphone
                </h1>
                <p className="opacity-70 lg:text-xl">
                  "Ouvrez un compte en quelques secondes, investissez dans les
                  meilleures offres et suivez-les clairement. Consultez la
                  répartition de vos investissements, les risques et les
                  paiements. Pour un investissement en toute sérénité
                </p>
              </MotionCascade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
