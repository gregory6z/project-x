"use client"

import { useEffect, useState } from "react"
import * as Progress from "@radix-ui/react-progress"

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(13), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress.Root
      className="relative h-[20px] w-full overflow-hidden rounded-full bg-gray-700 opacity-100"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-green-500  opacity-100 transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}
