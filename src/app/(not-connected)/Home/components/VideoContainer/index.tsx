import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"

export function VideoContainer() {
  return (
    <div className="flex h-full w-full bg-background-dark-900">
      <div className="responsive-container h-full w-full">
        <div className="mt-24 h-[280px] w-full rounded-xl border border-solid border-gray-800 bg-background-dark-800 md:h-[640px]">
          <iframe
            className="rounded-xl"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Pu9mAzMiAZQ?autoplay=1&mute=1"
            title="Título do Vídeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
