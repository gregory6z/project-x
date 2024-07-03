import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"
import Image from "next/image"
import signInImg from "../../assets/login.svg"
import { Header } from "@/app/components/Header"

export default function NotConnectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <div>
        <div className="border-custom h-full w-full bg-background-dark-900  lg:bg-background-dark-800 ">
          <div className=" mx-auto flex max-w-[1220px] flex-col  items-center  gap-0   lg:h-[calc(100vh-5rem)] lg:flex-row lg:gap-2">
            <div className=" order-2 flex w-full animate-animateOnOpen lg:order-none lg:w-[50%] ">
              {children}
            </div>
            <MotionFadeElement>
              <Image
                src={signInImg}
                alt={""}
                className=" mt-10 w-[260px] lg:block lg:w-[560px] "
                blurDataURL={signInImg}
              ></Image>
            </MotionFadeElement>
          </div>
        </div>
      </div>
    </>
  )
}
