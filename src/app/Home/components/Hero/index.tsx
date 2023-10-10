import { Button } from "@/app/components/Button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import heroImage from "../../../assets/img1.svg"
import heroImage2 from "../../../assets/img2.svg"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export function Hero() {
  return (
    <main className=" z-1 flex w-full border-b  border-solid border-gray-800 bg-gradient-to-b from-background-dark-700 to-background-dark-800 md:flex lg:items-center ">
      {/* shape sombra esquerda */}
      <div className=" z-0 hidden before:absolute before:-top-2 before:left-0 before:z-[1] before:h-[180px] before:w-[180px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:block lg:h-[calc(100vh-5rem)] lg:break-before-auto"></div>
      {/* shape sombra direita imagem */}
      <div className=" z-0 hidden before:absolute before:right-[30%] before:top-[30%] before:z-[1]  before:h-[180px] before:w-[180px] before:rounded-full before:bg-slate-100 before:blur-[150px]  lg:block lg:break-before-auto"></div>

      <div className=" z-[0] mx-[1.25rem] mb-[8rem] mt-[4rem] gap-2 sm:mx-auto  sm:px-10 md:flex md:px-10 lg:mx-auto lg:mb-2 lg:max-w-[1120px]   lg:gap-4 lg:px-16 lg:pb-16 xl:mb-2 xl:px-0 ">
        <div className="md:max-w-[54%]">
          {/* shape sombra mobile */}
          <div className="z-0 before:absolute before:right-0 before:top-0 before:z-[1] before:h-[126px] before:w-[142px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:hidden lg:break-before-auto"></div>
          {/* shape sombra botao */}
          <div className="z-0 hidden before:absolute before:-bottom-[10%] before:left-[8%] before:z-[-1] before:h-[180px] before:w-[180px] before:rounded-full before:bg-gray-900 before:blur-[150px]  lg:block lg:break-before-auto"></div>

          <h1
            className={` ${poppins.className} z-10 font-[Poppins] text-2xl		font-bold	 tracking-wider  text-gray-50 lg:text-6xl	      lg:leading-[130%]   `}
          >
            Maximisez votre portefuille à plus de
            <strong className="text-yellow-normal"> 18 % annuel.</strong>
          </h1>
          <div className="mt-8 flex flex-col gap-2 font-normal text-gray-200  lg:text-2xl">
            <div className="flex flex-row items-center gap-4 ">
              <CheckCircle className="h-8 w-8 text-yellow-normal" />
              <p>Investissement en bourse</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-yellow-normal" />
              <p>Fonds immobiliers</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-yellow-normal" />
              <p>Leaders en actifs en Europe</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <CheckCircle className="h-8 w-8 text-yellow-normal" />
              <p>plus de 20 000 investisseurs</p>
            </div>
          </div>
          <div className=" mt-10">
            <Button
              text="Devenez un investisseur"
              className="h-16 lg:max-w-[288px]"
              type="button"
            />
          </div>
          <Image
            className="absolute mt-4  lg:hidden"
            src="starGoogle.svg"
            width="200"
            height="30"
            alt="logo"
          ></Image>
        </div>
        <div className=" relative  hidden h-full w-full items-center justify-center md:block lg:flex">
          <div className="w-full ">
            <div className="flex gap-8 md:px-8 xl:p-0 ">
              {" "}
              <Image
                className="xl:max-w[225px] rounded-[30px] border-4 border-solid  border-gray-800 object-cover md:w-[50%] "
                src={heroImage}
                priority
                width={225}
                alt={""}
              ></Image>
              <Image
                className="xl:max-w[225px] rounded-[30px] border-4 border-solid border-gray-800  object-cover md:w-[50%]"
                src={heroImage2}
                priority
                width={225}
                alt={""}
              ></Image>
            </div>

            <Image
              className="ml-auto mt-4"
              src="starGoogle.svg"
              width="250"
              height="30"
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  )
}
