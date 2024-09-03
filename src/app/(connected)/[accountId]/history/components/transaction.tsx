import { Avatar, AvatarFallback } from "@/app/components/Avatar"

export function Transaction() {
  return (
    <div className=" mt-6 max-w-[800px]">
      <p className="uppercase tracking-wide ">Lundi 12, juin</p>
      <div className="  mt-1 flex w-full items-center justify-between rounded-sm border border-foreground/40 lg:p-4">
        <div className="flex items-center gap-4">
          <div>
            <Avatar className=" ">
              <AvatarFallback className="bg-primary font-semibold tracking-wide text-background">
                GP
              </AvatarFallback>
            </Avatar>
          </div>
          <p>Gregory Praxedes Martins</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-sm text-green-300">Deposit</p>

          <p className="rounded-sm bg-green-800 px-1 text-green-300">20,00 $</p>
        </div>
      </div>
    </div>
  )
}
