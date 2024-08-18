import Image from "next/image"

// import { ProgressBar } from "@/app/components/Progress"
import Link from "next/link"
import { Button } from "@/app/components/Button"

interface InvestmentCardProps {
  id: string
  name: string
  term: number
  imageUrl: string
  investmentType: string
  annualProfit: number
  remainingDays: number

  // fundraisingProgress: {
  //   current: number
  //   numberOfWeeks: number
  // }
}

export async function InvestmentCard({
  id,
  name,
  term,
  imageUrl,
  investmentType,
  annualProfit,
  remainingDays,
}: InvestmentCardProps) {
  function yearsToMonths(years: number): number {
    return years * 12
  }
  const params = new URLSearchParams({ id, name }).toString()
  const href = `/investments/inv?${params}`

  return (
    <Link href={href}>
      <div className="flex h-full min-h-[30vh] w-full animate-overlayShow flex-col rounded-xl border border-gray-800 bg-background-dark-900 transition-colors ">
        <div className="h-[16rem] w-full rounded-t-xl bg-black">
          <Image
            src={imageUrl}
            alt={"image-card"}
            width={500}
            height={500}
            quality={100}
            className="h-full w-full rounded-t-lg object-cover opacity-90 xl:object-fill "
          ></Image>
        </div>
        <div>
          <p className="mt-1 w-full bg-yellow-normal px-6 tracking-widest text-background">
            Faltam {remainingDays} dias
          </p>
        </div>

        <div className="flex h-full flex-col p-6  text-gray-100">
          <header>
            <h1 className="text-lg font-bold lg:text-xl">{name}</h1>
          </header>

          <main className="mt-6 ">
            <div className="flex flex-col gap-2">
              <div className=" mb-1 flex justify-between text-foreground/60">
                <p>Période</p>
                <p className="text-foreground">{yearsToMonths(term)} mois</p>
              </div>
              <div className=" mb-1 flex justify-between  text-foreground/60">
                <p>Rentabilité</p>
                <p className="text-foreground">{annualProfit}% aa</p>
              </div>

              <div className=" mb-1 flex justify-between  text-foreground/60">
                <p>Tipo</p>
                <p className="text-foreground">{investmentType}</p>
              </div>
            </div>

            {/* <div className="mt-2 space-y-1">
            <p>Captation  <strong className="text-green-400">50%</strong></p>
              <ProgressBar />
            </div> */}
          </main>
          {/* <Button
            text="Investir"
            variant="md"
            className="mt-auto  py-4  "
          ></Button> */}
          <Button className="mt-6" size={"lg"}>
            Investir
          </Button>
        </div>
      </div>
    </Link>
  )
}
