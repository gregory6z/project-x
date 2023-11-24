import Image from "next/image"
import {
  CircleDashed,
  CircleOff,
  Landmark,
  LineChart,
  ShieldCheck,
} from "lucide-react"

import { MerchanCard } from "./components/merchan-card"
export function Merchan() {
  return (
    <div className="flex w-full flex-col bg-background-dark-900 lg:h-full ">
      <div className="mx-auto mt-40 max-w-[1140px] ">
        <div className="mx-auto  flex max-w-[72%] flex-col gap-6">
          <h1 className="text-center font-semibold tracking-tight text-gray-100/90  lg:mx-auto lg:text-4xl">
            Pourquoi Paris Investissement a-t-il été spécifiquement élaboré pour
            vous?
          </h1>
          <p className=" mx-auto max-w-[60%] text-center text-lg text-gray-100/60">
            Chez Paris Investissements, nous investissons dans votre avenir.
            Faites travailler votre argent pour vous. Investissez aujourd'hui,
            récoltez demain.
          </p>
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
        <div className="relative   mt-16 grid gap-4 rounded-lg lg:grid-cols-4 ">
          <div className=" absolute -bottom-[30%] left-[40%] h-72  w-72 rounded-full bg-gray-100/60 blur-[300px]"></div>

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
