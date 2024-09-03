import { Button } from "@/app/components/Button"
import { AccountInformation } from "../components/AccountInformation"
import { HighlightedFundraising } from "../components/HighlightedFundraising"
import Image from "next/image"
import { Euro } from "lucide-react"

export default async function Home() {
  return (
    <div className=" mx-auto flex max-w-[1280px] overflow-hidden   ">
      <div className=" mt-10 flex w-full flex-col px-[1.5rem] lg:h-[calc(100vh-10rem)] lg:justify-center  ">
        <div className="lg:flex lg:gap-8">
          <AccountInformation />

          <HighlightedFundraising />
        </div>

        <div className=" mb-[5rem] mt-6 flex w-full   flex-col items-center rounded-2xl bg-zinc-900 pt-[2rem] lg:mb-0 lg:mt-0 lg:max-h-[20vh] lg:min-h-[20vh]  lg:flex-row lg:gap-20   lg:pt-0">
          <div className="order-2 flex h-full w-full flex-col items-center justify-center gap-4 rounded-bl-2xl bg-gradient-to-r from-zinc-800  to-zinc-900  text-center lg:order-1  lg:max-w-[50%]  lg:rounded-tl-2xl ">
            <h1 className=" w-full px-4 text-2xl font-extrabold tracking-tight text-primary lg:text-right lg:text-3xl ">
              Programe de Parrainage
            </h1>
            <p className="w-full text-pretty px-4 text-center text-xl font-bold text-foreground/80 lg:max-w-[500px] lg:text-right ">
              Recommandez Paris Investissements à vos amis et gagnez ! Pour
              chaque ami qui investit <span className="text-primary">100€</span>{" "}
              , vous recevez <span className="text-primary">30€</span>.
            </p>
          </div>
          {/* <Button className="mt-4">Indique a um amigo</Button> */}
          <Image
            src="/referral.svg"
            className="order-1 h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] "
            width={300}
            height={300}
            alt="referral image"
          ></Image>
          <Euro
            width={40}
            height={40}
            className=" h-[100px] w-[100px] text-3xl  text-primary lg:order-3"
          />
        </div>
      </div>
    </div>
  )
}
