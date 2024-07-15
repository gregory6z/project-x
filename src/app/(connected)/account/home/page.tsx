import { auth } from "@/auth/auth"
import { AccountInformation } from "../components/AccountInformation"
import { HighlightedFundraising } from "../components/HighlightedFundraising"

export default async function Home() {
  return (
    <div className=" mx-auto flex max-w-[1280px] overflow-hidden ">
      <div className=" mt-2 flex w-full flex-col lg:h-[calc(100vh-10rem)] lg:justify-center  ">
        <h1 className="my-4 text-3xl text-gray-100 lg:my-8  lg:text-4xl">
          Accueil
        </h1>
        <div className="lg:flex lg:gap-8">
          <AccountInformation />

          <HighlightedFundraising />
        </div>
        {/* <div className="mx-auto my-12 mb-[8rem] h-full  w-full rounded-lg  border-green-400/90 bg-background-dark-700 p-4  lg:my-0 lg:mb-0 lg:max-h-[12rem]     lg:p-8 ">
          <header className=" mx-auto flex justify-between   ">
            <p className=" text-3xl text-green-400 ">Parrainage</p>
            <ChevronRight className="text-green-400" />
          </header>

          <div className="  flex  flex-col gap-2 text-xl lg:flex-row lg:items-center   lg:gap-10   ">
            <p className="   mt-4  text-gray-100/70 lg:mt-0 lg:text-xl">
              Chaque persone que investir:{" "}
            </p>{" "}
            <div className=" flex  flex-col lg:mb-6  lg:mr-24 lg:flex-row lg:gap-10">
              <div className=" ml-8 flex flex-col justify-center lg:ml-0">
                <p className=" block text-5xl font-semibold text-green-400/90">
                  50€
                </p>{" "}
                <p className=" text-lg font-semibold tracking-tight text-gray-100/90 lg:text-2xl ">
                  Pour vous
                </p>{" "}
              </div>
              <div className=" ml-8 flex flex-col justify-center   lg:ml-0">
                <p className=" block text-5xl font-semibold text-green-400/90 lg:text-5xl">
                  50€
                </p>
                <p className=" text-lg font-semibold tracking-tight  text-gray-100/90 lg:text-2xl ">
                  Pour votre fuieille
                </p>{" "}
              </div>
            </div>
            <div className="mb-4 flex items-center justify-center">
              <Image
                className=""
                src={"/gift.png"}
                width={80}
                height={80}
                alt={""}
              ></Image>
              <Image
                className=" "
                src={"/gift.png"}
                width={80}
                height={80}
                alt={""}
              ></Image>
              <Image
                className=" "
                src={"/gift.png"}
                width={80}
                height={80}
                alt={""}
              ></Image>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
