import Image from "next/image"
import {
  CircleDashed,
  CircleOff,
  Landmark,
  LineChart,
  ShieldCheck,
} from "lucide-react"

import { MerchanCard } from "./components/merchan-card"
import { MotionElement } from "@/app/components/Framer-motion/motion"
export function Merchan() {
  return (
    <div className="flex w-full flex-col bg-background-dark-900 lg:h-full ">
      <div className="mx-auto mt-20 px-8 lg:mt-40 lg:max-w-[1140px] lg:px-8 xl:px-0">
        <div className="mx-auto  flex flex-col gap-6 lg:max-w-[72%] ">
          <MotionElement>
            <h1 className=" text-center text-2xl font-semibold tracking-tight text-gray-100/90  lg:mx-auto lg:text-4xl">
              Pourquoi Paris Investissement a-t-il été spécifiquement élaboré
              pour vous?
            </h1>
          </MotionElement>
          <MotionElement delay={0.25}>
            <p className=" text-center text-gray-100/60 lg:mx-auto  lg:max-w-[60%] lg:text-lg">
              Chez Paris Investissements, nous investissons dans votre avenir.
              Faites travailler votre argent pour vous. Investissez aujourd'hui,
              récoltez demain.
            </p>
          </MotionElement>
          <button className="mx-auto flex max-w-[600px] gap-2 rounded-lg border border-yellow-normal/80 px-4 py-2 text-yellow-normal">
            Parler à un expert{" "}
            {/* <Image
              width="24"
              height="24"
              src={"/whatsapp.svg"}
              alt={""}
              className="text-yellow-normal"
            ></Image> */}
          </button>
        </div>{" "}
        <div className="relative mt-16  grid gap-7 rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 ">
          <div className=" absolute -bottom-[30%] left-[40%] hidden h-72 w-72  rounded-full bg-yellow-100/60 blur-[300px] lg:block"></div>

          <MerchanCard
            icon={ShieldCheck}
            title="Sécurité"
            subtitle="Entreprises sélectionnées et des opérations garanties, offrant
            sécurité et confiance à chaque étape."
          ></MerchanCard>
          <MerchanCard
            icon={LineChart}
            title="Opérations Garanties"
            subtitle="Entreprises sélectionnées et des opérations garanties, offrant
            sécurité et confiance à chaque étape."
          ></MerchanCard>
          <MerchanCard
            icon={Landmark}
            title="Institution Réglementée"
            subtitle="Entreprises sélectionnées et des opérations garanties, offrant
            sécurité et confiance à chaque étape."
          ></MerchanCard>
          <MerchanCard
            icon={CircleOff}
            title="Sans frais"
            subtitle="Entreprises sélectionnées et des opérations garanties, offrant
            sécurité et confiance à chaque étape."
          ></MerchanCard>
        </div>
      </div>
    </div>
  )
}
