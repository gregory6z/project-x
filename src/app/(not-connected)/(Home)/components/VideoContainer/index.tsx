import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"

export function VideoContainer() {
  return (
    <div className="flex h-full w-full bg-background-dark-900 ">
      <div className="relative  h-full w-full overflow-hidden px-3 ">
        <div className="absolute bottom-0 h-[55%]  w-full bg-yellow-normal/40 "></div>
        <div className="relative z-20 mx-auto mt-24 h-[280px] w-[90%] rounded-t-lg border-l-[10px] border-r-[10px] border-t-[10px] border-gray-900 bg-background-dark-800 sm:w-full    md:h-[640px] md:max-w-[720px]  lg:max-w-[900px]   lg:px-8 xl:max-w-[1140px] xl:px-0">
          <iframe
            className="absolute inset-0 mx-auto h-full w-full border-0"
            src="https://www.youtube.com/embed/Pu9mAzMiAZQ?autoplay=1&mute=1&playlist=Pu9mAzMiAZQ&loop=1"
            title="Título do Vídeo"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
