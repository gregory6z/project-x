import { Loader2 } from "lucide-react"
import Image from "next/image"
export default function Loading() {
  return (
    <div className="  mt-[30vh] flex h-[calc(100vh-20rem)] w-full flex-col items-center gap-2   overflow-x-hidden overflow-y-hidden ">
      <Image
        src={"logo.svg"}
        width="300"
        className="animate-[pulse_2s_ease-in-out_infinite] "
        height="300"
        alt={""}
      ></Image>

      <Loader2
        width={30}
        height={30}
        className="  animate-spin text-gray-700"
      ></Loader2>
    </div>
  )
}
