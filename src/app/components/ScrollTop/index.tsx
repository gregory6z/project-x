"use client"

import { ReactNode, useEffect } from "react"

interface ScrollProps {
  children: React.ReactNode
}

export function ScrollToTopOnMount({ children }: ScrollProps) {
  useEffect(() => {
    window.scrollTo(0, 0) // Isso rolará a página para o topo ao renderizar o componente
  }, [])

  return children // Renderiza o conteúdo da página passado como children
}

export default ScrollToTopOnMount
