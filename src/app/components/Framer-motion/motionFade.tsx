"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface IMotionProps {
  children: ReactNode
}
export function MotionFadeElement({ children, ...props }: IMotionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será acionada apenas uma vez quando o elemento estiver visível
  })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 1.5, easing: "linear" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}
