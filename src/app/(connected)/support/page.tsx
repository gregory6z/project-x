import { Input } from "@/app/components/Input"
import { ChevronRight, Search } from "lucide-react"
import Link from "next/link"

export default function Support() {
  return (
    <div className="flex h-full w-full flex-col transition-all ">
      <header className=" bg-zinc-800/80 lg:h-[18rem]">
        <div className="mx-auto flex lg:max-w-[1260px]">
          <div className=" mt-8 flex w-full flex-col ">
            <Link
              href="/support"
              className=" text-lg font-semibold tracking-widest text-primary"
            >
              FOIRE AUX QUESTIONS (FAQ)
            </Link>

            <h1 className="mb-10 text-4xl font-bold tracking-tighter text-primary  lg:mt-14">
              Comment pouvons-nous vous aider ?
            </h1>

            <Input
              icon={Search}
              faq
              className="h-[48px]  "
              placeholder="Décrive votre problème"
            ></Input>
          </div>
        </div>
      </header>
      <main className="mx-auto mt-14 w-full lg:max-w-[1260px] ">
        <h2 className="text-2xl font-semibold tracking-tighter text-primary ">
          Questions les plus fréquentes
        </h2>
        <div className="flex">
          <div className="mt-8 flex flex-col gap-4 text-foreground/80 lg:max-w-[50%]">
            <Link
              className="transition-all hover:text-primary lg:text-lg "
              href={"#"}
            >
              Comment puis-je déposer de l'argent sur mon compte
              d'investissement?
            </Link>
            <Link
              className="transition-all hover:text-primary lg:text-lg "
              href={"#"}
            >
              Quels types d'investissements sont disponibles dans l'application?
            </Link>
            <Link
              className="transition-all hover:text-primary lg:text-lg  "
              href={"#"}
            >
              Comment puis-je transférer de l'argent de mon compte
              d'investissement vers mon compte bancaire?
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-foreground/80 lg:max-w-[50%]">
            <Link
              className="transition-all hover:text-primary lg:text-lg  "
              href={"#"}
            >
              Quels sont les frais associés aux transactions sur l'application?
            </Link>
            <Link
              className="transition-all hover:text-primary lg:text-lg  "
              href={"#"}
            >
              Comment puis-je suivre la performance de mes investissements?
            </Link>
            <Link
              className="transition-all hover:text-primary lg:text-lg  "
              href={"#"}
            >
              L'application est-elle sécurisée pour mes informations bancaires
              et mes investissements?
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tighter text-primary ">
            Categories
          </h2>
          <div className="display grid grid-cols-3 gap-10 gap-y-2 pt-6">
            <Link
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
              href={"/support/gestion-compte"}
            >
              Gestion du compte
              <ChevronRight />
            </Link>
            <Link
              href={"/support/securite-confidentialite"}
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
            >
              Sécurité et confidentialité
              <ChevronRight />
            </Link>
            <Link
              href={"/support/investissements"}
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
            >
              Investissements et options
              <ChevronRight />
            </Link>
            <Link
              href={"/support/depots-retraits"}
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
            >
              Dépôts et retraits
              <ChevronRight />
            </Link>
            <Link
              href={"/support/frais-commissions"}
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
            >
              Frais et commissions
              <ChevronRight />
            </Link>
            <Link
              href={"/support/support-assistance"}
              className="flex justify-between rounded-md border border-foreground/40 px-4 py-4 transition-colors hover:text-primary"
            >
              Support client et assistance
              <ChevronRight />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
