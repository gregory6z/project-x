import { Button } from "@/app/components/Button"
import { LogOutIcon, User, ClipboardCheck, LockKeyhole } from "lucide-react"
import MenuItem from "./components/menu-item"
import { Avatar } from "@/app/components/Avatar"

export default function Account() {
  return (
    <div className="mx-auto  max-w-[920px]">
      <header className="mt-[5rem] flex w-full items-center justify-between">
        <h1 className="text-3xl">Gregory Praxedes</h1>
        <Button
          variant={"secondary"}
          className="  hover-bg-zinc-900 h-[60px] w-[60px] rounded-full bg-zinc-800 hover:bg-zinc-900"
        >
          <LogOutIcon className="text-rose-400 " />
        </Button>
      </header>
      <main className="mt-10 flex w-full gap-6">
        <div className="flex min-w-[280px] flex-col gap-4">
          <div className="border-1 flex min-h-[56px] min-w-[64px] items-center gap-4 rounded-lg border border-zinc-700 px-4 py-4 text-lg">
            <Avatar className="items-center justify-center bg-primary font-extrabold text-background">
              GP
            </Avatar>
            Profil
          </div>
          <p className="border-1 flex min-h-[82px] items-center  rounded-lg border border-zinc-700 px-4  py-4 text-lg">
            Mon Compte
          </p>
        </div>
        <div className="h-full w-full">
          <h2 className="text-lg">Profil</h2>
          <div className="last:border-none">
            <div className="border-1 mt-4 rounded-lg border border-zinc-700 last:rounded-b-lg">
              <MenuItem Icon={User}>Info personnel</MenuItem>
              <MenuItem Icon={ClipboardCheck}>Vos donnes personnels</MenuItem>
              <MenuItem Icon={LockKeyhole}>Sécurité</MenuItem>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
