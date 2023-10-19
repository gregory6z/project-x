"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import { useStore } from "../store"

export function TriggerButton() {
  const open = useStore((state) => state.Open)

  return (
    <>
      {open ? (
        <DialogPrimitive.Trigger>
          <X className="lg: h-7 w-7  text-gray-100 lg:hidden" />
        </DialogPrimitive.Trigger>
      ) : (
        <DialogPrimitive.Trigger>
          <Menu className="lg: h-7 w-7  text-gray-100 lg:hidden" />
        </DialogPrimitive.Trigger>
      )}
    </>
  )
}
