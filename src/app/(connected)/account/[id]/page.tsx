import { ChevronRight } from "lucide-react"
import { AccountInformation } from "../components/AccountInformation"
import { ButtonsScrolls } from "../components/ButtonsScrolls"
import { HighlightedFundraising } from "../components/HighlightedFundraising"
import Image from "next/image"

import presenteImg from "../../../assets/presente.png"

export default function Account() {
  return (
    <div className="responsive-container flex overflow-hidden ">
      <div className=" mt-2 flex w-full flex-col lg:h-[calc(100vh-10rem)] lg:justify-center  ">
        <h1 className="my-4 text-3xl text-gray-100 lg:my-8  lg:text-4xl">
          Accueil
        </h1>
        <div className="lg:flex lg:gap-8">
          <AccountInformation />

          <HighlightedFundraising />
        </div>
        <div className="mx-auto my-12 mb-[8rem] h-[10rem] w-full rounded-lg  bg-background-dark-700 p-4 lg:my-0    lg:mb-0 lg:p-8 ">
          <div className=" flex items-center justify-between">
            <p className=" text-2xl text-green-400">Indique e ganhe</p>
            <ChevronRight className="text-green-400" />
          </div>
          <div className="flex gap-12">
            <p className="ml-10 mt-4 text-gray-100/70">
              Cada pessoa que indicar a investir:
            </p>
            <div className="flex h-full gap-4 border border-solid border-green-400 p-4 text-gray-100">
              <div>
                {/* <Image
                  src={presenteImg}
                  width={50}
                  height={50}
                  alt={""}
                  className=""
                ></Image> */}
              </div>
              {/* <p>aqui</p>
              <p>aqui</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
