import { Input } from "@/app/components/Input"
import { ChevronRight, Search } from "lucide-react"
import Link from "next/link"

export default function Support() {
  return (
    <div className="flex h-full w-full flex-col ">
      <header className=" bg-zinc-800/80 lg:h-[18rem]">
        <div className="mx-auto flex lg:max-w-[1260px]">
          <div className=" mt-8 flex w-full flex-col ">
            <Link
              href="/support"
              className=" text-lg font-semibold tracking-widest text-primary"
            >
              FOIRE AUX QUESTIONS (FAQ)
            </Link>

            <h1 className="mb-10 text-3xl text-primary   lg:mt-14">
              Comment pouvons-nous vous aider ?
            </h1>

            <Input icon={Search} faq className="h-[48px]  "></Input>
          </div>
        </div>
      </header>
      <main className="mx-auto mt-14 w-full lg:max-w-[1260px]">
        <h2 className="text-xl text-primary ">Questions les plus fréquentes</h2>
        <div className="flex">
          <div className="mt-8 flex flex-col gap-4 text-foreground/80 lg:max-w-[50%]">
            <p>
              Comment puis-je déposer de l'argent sur mon compte
              d'investissement?
            </p>
            <p>
              Quels types d'investissements sont disponibles dans l'application?
            </p>
            <p>
              Comment puis-je transférer de l'argent de mon compte
              d'investissement vers mon compte bancaire?
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-foreground/80 lg:max-w-[50%]">
            <p>
              Quels sont les frais associés aux transactions sur l'application?
            </p>
            <p>Comment puis-je suivre la performance de mes investissements?</p>
            <p>
              L'application est-elle sécurisée pour mes informations bancaires
              et mes investissements?
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl text-primary ">Categories</h2>
          <div className="display grid grid-cols-3 gap-10 gap-y-2 pt-6">
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Gestion du compte
              <ChevronRight />
            </div>
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Sécurité et confidentialité
              <ChevronRight />
            </div>
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Investissements et options
              <ChevronRight />
            </div>
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Dépôts et retraits
              <ChevronRight />
            </div>
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Frais et commissions
              <ChevronRight />
            </div>
            <div className="flex justify-between rounded-md border border-foreground/40 px-4 py-4">
              Support client et assistance
              <ChevronRight />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
