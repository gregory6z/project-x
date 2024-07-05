"use client"

import React, { useEffect } from 'react';
import { toast } from "sonner";

export function SonnerSuccess() {
  useEffect(() => {
    // Isso será chamado apenas uma vez, quando o componente for montado.
    toast.success("Connected");
  }, []); // Array de dependências vazio significa que o efeito não depende de nada e será executado apenas uma vez.

  return <></>; // Retornando null se não houver necessidade de renderizar algo.
}