import { Button } from "@/app/components/Button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import heroImage from "../../../../assets/img-1.svg"
import heroImage2 from "../../../../assets/img-2.svg"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"
import Link from "next/link"

export async function Hero() {
  await new Promise((resolve) => {
    setTimeout(resolve, 0)
  })

  const response = await fetch("http://api.github.com/users/gregory6z")

  const user = await response.json
  return (
    <main className=" z-1 flex w-full  border-b  border-solid border-gray-800 bg-gradient-to-b from-background-dark-700 to-background-dark-800 md:flex lg:items-center ">
      {/* shape sombra esquerda */}
      <div className=" z-0 hidden before:absolute before:-top-2 before:left-0 before:z-[1] before:h-[180px] before:w-[180px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:block lg:h-[calc(100vh-5rem)] lg:break-before-auto"></div>
      {/* shape sombra direita imagem */}
      <div className=" z-0 hidden  before:absolute before:right-[30%] before:top-[30%] before:z-[1]  before:h-[180px] before:w-[180px] before:rounded-full before:bg-gray-100 before:blur-[150px]  lg:block lg:break-before-auto"></div>

      <div className=" z-[0] mx-[1.25rem] mb-[8rem] mt-[4rem]   gap-2  sm:mx-auto sm:px-10 md:flex md:px-10 lg:mx-auto lg:mb-2 lg:max-w-[1120px]  lg:gap-4 lg:px-16 lg:pb-16 xl:mb-2 xl:px-0 ">
        <div className="md:max-w-[54%]">
          {/* shape sombra mobile */}
          <div className="z-0 before:absolute before:right-0 before:top-0 before:z-[1] before:h-[126px] before:w-[142px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:hidden lg:break-before-auto"></div>
          {/* shape sombra botao */}
          <div className="z-0 hidden  before:absolute before:-bottom-[10%] before:left-[8%] before:z-[-1] before:h-[180px] before:w-[180px] before:rounded-full before:bg-gray-900 before:blur-[150px]  lg:block lg:break-before-auto"></div>

          <h1
            className={`   z-10 w-[90%] 	animate-animateOnOpen  text-4xl font-semibold tracking-wider  text-gray-50   duration-1000  lg:text-6xl lg:leading-[120%]  `}
          >
            Maximisez votre portefuille à plus de
            <strong className="  font-black text-yellow-normal">
              {" "}
              18 % annuel.
            </strong>
          </h1>
          <div className="mt-8 flex animate-animateOnOpen flex-col gap-2 text-lg font-normal text-gray-200  lg:text-2xl">
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

          <Button
            text="Devenez un investisseur"
            className=" mt-10 h-16 animate-animateOnOpen text-[1.25rem] lg:max-w-[20rem]"
          />

          <Image
            className="absolute mt-4  lg:hidden"
            src="starGoogle.svg"
            width="200"
            height="30"
            alt="logo"
          ></Image>
        </div>
        <div className=" relative hidden  h-full w-full items-center justify-center md:block lg:flex">
          <div className="w-full ">
            <MotionFadeElement
              delay={0.1}
              className=" flex h-full flex-1  gap-6     md:px-8 xl:p-0 "
            >
              <Image
                className="rounded-[30px]  border-4  border-solid border-gray-800  object-cover md:max-w-[50%] xl:max-w-[100%]    "
                src={heroImage}
                priority
                width={260}
                alt={""}
                placeholder="blur"
                blurDataURL={"svg-blur-1.png"}
              ></Image>
              <Image
                className="rounded-[30px]  border-4 border-solid border-gray-800 object-cover md:max-w-[50%] "
                src={heroImage2}
                priority
                width={260}
                alt={""}
                placeholder="blur"
                blurDataURL={"svg-blur-1.png"}
              ></Image>
            </MotionFadeElement>

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
