import { Button } from "@/app/components/Button"
import { CheckCircle, LineChart } from "lucide-react"
import Image from "next/image"
import heroImage from "../../../../assets/img-1.svg"
import heroImage2 from "../../../../assets/img-2.svg"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"
import Link from "next/link"
import { TextH1Motion, TextMotion } from "@/app/components/Framer-motion/motion"

export async function Hero() {
  await new Promise((resolve) => {
    setTimeout(resolve, 0)
  })

  const response = await fetch("http://api.github.com/users/gregory6z")

  const user = await response.json
  return (
    <main className=" z-1 flex  w-full border-b border-solid  border-gray-800    bg-[url('/dark.png')] bg-cover  md:flex lg:items-center ">
      {/* shape sombra esquerda
      <div className=" z-0 hidden before:absolute before:-top-2 before:left-0 before:z-[1] before:h-[180px] before:w-[180px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:block lg:h-[calc(100vh-5rem)] lg:break-before-auto"></div>
      shape sombra direita imagem
      <div className=" z-0 hidden  before:absolute before:right-[30%] before:top-[30%] before:z-[1]  before:h-[180px] before:w-[180px] before:rounded-full before:bg-gray-100 before:blur-[150px]  lg:block lg:break-before-auto"></div> */}

      <div className=" z-[0] mx-[1.25rem] mb-[6rem] flex h-full w-full justify-between gap-2 sm:mx-auto sm:px-10  md:flex  md:px-10   lg:mx-auto lg:mb-[0rem] lg:mt-[6rem] lg:min-h-[calc(100vh-11rem)] lg:max-w-[1225px] lg:gap-4  lg:px-16 xl:mb-2 xl:px-0 xl:pb-16 ">
        <div className="relative  mt-16  flex animate-animateOnOpen flex-col  ">
          <p className="mb-4 tracking-[0.02em] text-yellow-normal">BIENVENUE</p>
          {/* shape sombra mobile
          <div className="z-0 before:absolute before:right-0 before:top-0 before:z-[1] before:h-[126px] before:w-[142px]  before:rounded-full before:bg-slate-100 before:blur-[180px] lg:hidden lg:break-before-auto"></div>
          shape sombra botao
          <div className="z-0 hidden  before:absolute before:-bottom-[10%] before:left-[8%] before:z-[-1] before:h-[180px] before:w-[180px] before:rounded-full before:bg-gray-900 before:blur-[150px]  lg:block lg:break-before-auto"></div> */}
          <TextMotion
            initial={{
              translateY: "-10%",
              opacity: 0.3,
              translateZ: 0,
              filter: "blur(20px)",
            }}
            animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className={` z-10	mb-8  w-[100%] break-words   	text-4xl  font-semibold tracking-tight   text-gray-100/90   duration-1000  lg:text-6xl   `}
            >
              La plateforme d’investissement qui
              <strong className="  font-semibold text-yellow-normal">
                {" "}
                grandit avec vous{" "}
              </strong>
            </h1>
          </TextMotion>

          <TextMotion
            initial={{
              translateY: "-10%",
              opacity: 0,
              translateZ: 0,
            }}
            animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-10 text-2xl text-gray-100/60 lg:w-[80%]">
              Découvrez notre plateforme d’investissement et trouvez les
              meilleures opportunités pour votre profil.
            </p>
          </TextMotion>
          {/* <div className="mt-8 flex animate-animateOnOpen flex-col gap-2 text-lg font-normal text-gray-200  lg:text-2xl">
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
          </div> */}

          <button className=" flex items-center justify-center gap-2 rounded-lg bg-yellow-normal/90 px-[1.125rem] py-4 text-xl font-semibold tracking-tight text-gray-900 lg:w-[500px]   lg:px-2 lg:py-6">
            Investissez maintenant. C’est simple et rentable.
            <LineChart
              strokeWidth={2.5}
              className="hidden lg:block"
            ></LineChart>
          </button>

          <Image
            className=" mt-4  lg:hidden"
            src="starGoogle.svg"
            width="250"
            height="30"
            alt="logo"
          ></Image>
        </div>
        <div className=" relative hidden  h-full w-full  md:block lg:flex">
          <div className="w-full ">
            <TextMotion
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className=" flex h-full flex-1  gap-6     md:px-8 xl:p-0 "
            >
              <Image
                className="rounded-[30px]  border-4  border-solid border-gray-800  object-cover md:max-w-[50%] xl:max-w-[100%]    "
                src={heroImage}
                priority
                width={280}
                alt={""}
                placeholder="blur"
                blurDataURL={"svg-blur-1.png"}
              ></Image>
              <Image
                className="rounded-[30px]  border-4 border-solid border-gray-800 object-cover md:max-w-[50%] "
                src={heroImage2}
                priority
                width={280}
                alt={""}
                placeholder="blur"
                blurDataURL={"svg-blur-1.png"}
              ></Image>
            </TextMotion>

            <Image
              className="ml-auto mt-4"
              src="starGoogle.svg"
              width="280"
              height="30"
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  )
}
