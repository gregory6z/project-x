import { Image as ImgSkell } from "lucide-react"

export function SkelletonItem() {
  return (
    <div className="flex h-full min-h-[60vh] w-full  animate-pulse   flex-col rounded-xl border-2 border-gray-800 bg-background-dark-900 ">
      <div className=""></div>

      <div className="  h-[40%] w-full rounded-t-xl bg-gray-600 ">
        <div className=" flex h-[280px] w-full  items-center justify-center ">
          <ImgSkell className="h-40 w-40 opacity-30"></ImgSkell>
        </div>{" "}
        {/* <div className="h-[280px]  w-full  rounded-t-xl bg-gray-600 object-contain opacity-90 xl:object-fill "></div> */}
        {/* <Image
          src={ImgCard}
          alt={"image-card"}
          className="h-full w-full rounded-t-xl object-contain opacity-90 xl:object-fill "
        ></Image> */}
      </div>
      <div className="flex h-[6%] w-full items-center bg-gray-800 p-4"></div>
      <div className="flex h-full flex-col p-6  text-gray-100 ">
        <header>
          <div className="skelleton-item h-8 w-full rounded-full bg-gray-800"></div>
        </header>
        <main className="mt-6 ">
          <div className="flex flex-col gap-4">
            <div className="skelleton-item h-6 w-full rounded-full bg-gray-900"></div>
            <div className="skelleton-item h-6 w-full rounded-full bg-gray-900"></div>
            <div className="skelleton-item h-6 w-full rounded-full bg-gray-900"></div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="skelleton-item h-6 w-full rounded-full bg-gray-800"></div>
          </div>
          <div className="mt-5">
            <div></div>
          </div>
        </main>
        <button className="skelleton-item mt-auto h-[48px] w-full rounded-md  bg-gray-800  "></button>
      </div>
    </div>
  )
}
