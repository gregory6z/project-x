import { Button } from "@/app/components/Button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import heroImage from "../../assets/imageHero.png"

export function Hero() {
  return (
    <main className=" flex w-full bg-background-dark-500 md:flex  ">
      <div className=" hidden before:absolute before:-top-2 before:left-0 before:z-[1] before:h-[180px]  before:w-[180px] before:rounded-full before:bg-slate-100 before:blur-[180px] lg:block lg:break-before-auto"></div>
      <div className=" z-0 hidden before:absolute before:right-[30%] before:top-[30%] before:z-[1]  before:h-[180px] before:w-[180px] before:rounded-full before:bg-slate-100 before:blur-[150px]  lg:block lg:break-before-auto"></div>

      <div className="  relative z-[0] mx-[1.25rem] mb-[3rem] mt-[3rem] h-full gap-2 sm:mx-auto md:flex md:px-10 lg:mx-auto lg:mb-[6rem]  lg:mt-[6rem] lg:max-w-[1120px] lg:px-16 xl:px-0 ">
        <div className="md:max-w-[50%]">
          <div className=" before:absolute before:right-0 before:top-0 before:z-[1] before:h-[126px] before:w-[142px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:hidden lg:break-before-auto"></div>
          <div className=" hidden before:absolute before:-bottom-[10%] before:left-[8%] before:z-[-1] before:h-[126px] before:w-[142px] before:rounded-full before:bg-slate-100 before:blur-[180px]  lg:block lg:break-before-auto"></div>

          <h1 className="z-10 text-2xl font-bold italic  tracking-widest text-gray-50    lg:text-5xl">
            Maximisez votre portefuille à <br />
            plus de
            <strong className="text-yellow-normal"> 18 % annuel.</strong>
          </h1>
          <div className="mt-8 flex flex-col gap-2 font-normal text-gray-200  lg:text-[1.125rem]">
            <div className="flex flex-row items-center gap-2 ">
              <CheckCircle className="h-6 w-6 text-yellow-normal" />
              <p>Investissement en bourse</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle className="h-6 w-6 text-yellow-normal" />
              <p>Fonds immobiliers</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle className="h-6 w-6 text-yellow-normal" />
              <p>Leaders en actifs en Europe</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircle className="h-6 w-6 text-yellow-normal" />
              <p>plus de 20 000 investisseurs</p>
            </div>
          </div>
          <div className=" mt-8">
            <Button
              text="Devenez un investisseur"
              className="lg:max-w-[288px]"
              type="button"
            />
          </div>
          <Image
            className="mt-[2rem] lg:hidden"
            src="starGoogle.svg"
            width="234"
            height="30"
            alt="logo"
          ></Image>
        </div>
        <div className="hidden md:block">
          <div>
            <Image src={heroImage} width={520} height={346} alt={""}></Image>

            <Image
              className="ml-auto mt-2"
              src="starGoogle.svg"
              width="234"
              height="30"
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  )
}
