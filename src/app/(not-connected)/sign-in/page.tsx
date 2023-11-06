import { SignIn } from "@clerk/nextjs"
import Image from "next/image"

import signInImg from "../../assets/login.svg"

import { MotionFadeElement } from "../../components/Framer-motion/motionFade"
import ScrollToTopOnMount from "../../components/ScrollTop"

export default function SignInClerk() {
  return (
    <ScrollToTopOnMount>
      <div className="border-custom h-full w-full  bg-background-dark-800 ">
        <div className="responsive-container mx-auto  flex  items-center   gap-0 lg:h-[calc(100vh-5rem)] lg:gap-2">
          <div className="flex w-full animate-animateOnOpen lg:w-[50%] ">
            <SignIn
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  card: "w-full h-full p-0 lg:p-10 lg:min-w-[540px]",
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
