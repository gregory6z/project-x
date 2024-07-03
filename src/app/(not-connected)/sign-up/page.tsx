import { SignUp } from "@clerk/nextjs"
import Image from "next/image"

import signInImg from "../../assets/login.svg"

import { MotionFadeElement } from "../../components/Framer-motion/motionFade"
import ScrollToTopOnMount from "../../components/ScrollTop"

export default function SignUpClerk() {
  return (
    <ScrollToTopOnMount>
      <div
        className="border-custom h-full w-full  bg-background-dark-800"
        id="topo"
      >
        <div className="responsive-container mx-auto  flex  items-center   gap-0 lg:h-[calc(100vh-5rem)] lg:gap-2">
          <div className="w-full animate-animateOnOpen lg:w-[50%]">
            <SignUp
              signInUrl="sign-in"
              redirectUrl={"/account/dsadada"}
              appearance={{
                elements: {
                  card: "w-full h-full p-0  lg:p-10 lg:min-w-[540px] ",
                },
              }}
            />
          </div>
          <MotionFadeElement>
            <Image
              src={signInImg}
              alt={""}
              className="hidden   lg:block "
              blurDataURL={signInImg}
            ></Image>
          </MotionFadeElement>
        </div>
      </div>
    </ScrollToTopOnMount>
  )
}
