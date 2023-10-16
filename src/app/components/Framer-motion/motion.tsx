"use client"
import { HTMLMotionProps, motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface IMotionProps {
  children: ReactNode
  delay: number
  shouldAnimate?: boolean
}

interface MotionElementProps extends IMotionProps {
  children: React.ReactNode
}

interface IMotionCascadeProps {
  children: ReactNode[]
  shouldAnimate?: boolean // Adicione uma propriedade para controlar a animação
  delay: number
  className: ReactNode
}

export function MotionElement({
  children,
  delay,
  ...props
}: MotionElementProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação será acionada apenas uma vez quando o elemento estiver visível
  })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 300,
        }}
        transition={{ duration: 0.3, delay, easing: "linear" }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function MotionCascade({ children, className }: IMotionCascadeProps) {
  return (
    <div className={`${className}`}>
      {children.map((child, index) => (
        <MotionElement delay={index * 0.1} key={index}>
          {child}
        </MotionElement>
      ))}
    </div>
  )
}
