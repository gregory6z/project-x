"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface IMotionProps {
  children: ReactNode
  delay?: number
  className?: string
  duration?: number
  scale?: number
  animate?: string
}
export function MotionFadeElement({
  children,
  delay = 0.5,
  duration = 1,
  scale = 0.93,
  className,
  ...props
}: IMotionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será acionada apenas uma vez quando o elemento estiver visível
  })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : scale,
        }}
        transition={{ duration, easing: "linear", delay }}
        {...props}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
