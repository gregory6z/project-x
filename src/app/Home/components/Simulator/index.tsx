import { Minus, Plus } from "lucide-react"
import { SliderSimulator } from "./components/Slider"
import { MotionElement } from "@/app/components/Framer-motion/motion"

export function Simulator() {
  return (
    <div className=" flex h-full w-full justify-center border-b  border-solid border-gray-800 bg-background-dark-800 text-gray-100 xl:h-screen xl:items-center  ">
      <div className="my-16 flex flex-col px-[1.25rem] md:px-8  lg:max-w-[980px] lg:px-16 xl:mx-auto">
        <MotionElement delay={0.2}>
          <h1 className="mb-8 w-[80%] text-2xl  text-gray-100 lg:mb-16 lg:text-6xl ">
            Comprendre le{" "}
            <span className="text-yellow-normal">pouvoir d’investir</span> dans
            notre plateforme
          </h1>
        </MotionElement>
        <div className="flex flex-col md:flex-row  md:gap-[40px] lg:gap-[80px] lg:text-2xl xl:gap-[120px]">
          <div className="flex flex-col gap-8 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-gray-100 opacity-90">
                Simuler un investissement
              </h3>
              <p className="opacity-70">Valeur d'investissement</p>
              <div className="flex flex-1 items-center gap-32 ">
                <p className="flex-1 text-[18px]">100,00 €</p>

                <div className="flex gap-4 text-yellow-normal">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 bg-background-dark-500">
                    <Plus></Plus>
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 bg-background-dark-500">
                    <Minus></Minus>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <p className=" opacity-70">Période de retour souhaitée</p>
              <h3 className="text-[18px] font-bold opacity-90"> 3 mois</h3>
              <SliderSimulator />
            </div>
          </div>
          <div className="mt-4 flex  flex-col gap-2 ">
            <div className="flex items-end gap-2 lg:gap-4 ">
              <div className="text-yellow-normal">
                <h1 className="">Paris I.</h1>
                <p>528 €</p>
                <div className="h-[100px] w-[80px] bg-yellow-normal lg:h-[180px] lg:w-[140px] xl:h-[250px] xl:w-[140px]"></div>
                <p className="text-sm">18% a.a.</p>
              </div>
              <div className="text-gray-200">
                <h1 className="">Livre A</h1>
                <p>507 €</p>
                <div className="h-[30px] w-[80px]  bg-gray-500 lg:h-[70px] lg:w-[140px] "></div>
                <p className="text-sm">04% a.a.</p>
              </div>
              <div className="">
                <h1 className="text-yellow-normal">Livre</h1>
                <p>504 €</p>
                <div className="h-[15px] w-[80px] bg-gray-500 lg:h-[30px] lg:w-[140px]"></div>
                <p className="text-sm">04% a.a.</p>
              </div>
            </div>

            <div>
              <p className="text-sm opacity-70">Valeur brute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
