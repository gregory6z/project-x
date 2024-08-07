import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-b  border-solid border-gray-800 bg-background-dark-900 px-[1.125rem] py-16 text-sm text-gray-100 md:text-base">
      <div className="flex flex-col gap-2 lg:mx-auto lg:max-w-[1120px] lg:flex-row lg:gap-16 lg:px-[4rem] xl:px-0 ">
        <div className="flex flex-col gap-4">
          <Image src="logo.svg" width="260" height="60" alt="logo"></Image>

          <div>
            <p className="opacity-70">Paris Investissements</p>
            <p className="opacity-70">© Tous droits réservés.</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 md:flex md:gap-16">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Investir</h1>
              <Link href={"#"} className="block opacity-70">
                Comment ça marche
              </Link>
              <Link href={"#"} className="block opacity-70">
                Procédures
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Sur Nous</h1>
              <Link href={"#"} className="block opacity-70">
                Code de conduite
              </Link>
              <Link href={"#"} className="block opacity-70">
                Conditions d'utilisation
              </Link>
              <Link href={"#"} className="block opacity-70">
                Défaillance
              </Link>
              <Link href={"#"} className="block opacity-70">
                Privacité
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Questions</h1>
              <Link href={"#"} className="block opacity-70">
                Foire aux questions FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Questions</h1>
              <Link href={"#"} className="block opacity-70">
                Foire aux questions FAQ
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
