import * as DialogPrimitive from "@radix-ui/react-dialog"

export function DialogContent() {
  return (
    <DialogPrimitive.Content
      className={`fixed top-[4rem] z-20 h-screen w-full bg-gray-800 text-center text-gray-100 data-[state=closed]:animate-slideOut  data-[state=open]:animate-slideIn `}
    >
      salve cornos
    </DialogPrimitive.Content>
  )
}
