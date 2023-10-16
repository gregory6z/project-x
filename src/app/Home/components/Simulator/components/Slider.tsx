"use client"

import * as Slider from "@radix-ui/react-slider"

export function SliderSimulator() {
  return (
    <Slider.Root>
      <Slider.Root
        className="relative my-2 flex h-5 w-[full] touch-none select-none items-center"
        defaultValue={[100]}
        max={100000000000}
        step={100}
      >
        <Slider.Track className="bg-blackA7 relative h-[3px] grow rounded-full">
          <Slider.Range className="absolute h-full rounded-full bg-gray-100" />
        </Slider.Track>
        <Slider.Thumb
          className="hover:bg-violet3 focus:shadow-blackA5 block h-5 w-5 rounded-[10px] bg-yellow-normal shadow-[0_2px_10px] shadow-gray-700 focus:shadow-[0_0_0_1px] focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </Slider.Root>
  )
}
