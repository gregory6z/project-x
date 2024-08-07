import { fetchInvestments } from "@/http/fetch-investments"
import { InvestmentCardXs } from "./investment-card-xs"

export default async function InvestmentsPage() {
  const { investments } = await fetchInvestments()

  console.log(investments)

  const sortedInvestments = investments.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )
  return (
    <div className="h-full w-full">
      <div className="mx-auto lg:max-w-[1256px]">
        <div>
          <h1 className="mt-20 text-foreground lg:text-3xl">
            Mes Investissements
          </h1>

          <div className="mt-4 flex h-20 items-center justify-center  rounded-sm  bg-foreground/10 lg:max-w-[800px] lg:p-6 ">
            <p className="text-pretty text-foreground/80  lg:text-lg">
              Découvrez le pouvoir de faire travailler votre argent pour vous.
              Investissez maintenant et faites le premier pas vers la liberté
              financière !
            </p>
          </div>
        </div>
        <div>
          <header>
            <h1 className="mb-2 mt-10 text-foreground lg:text-3xl">
              Investissements en vedette
            </h1>
            <p className="mt-2 text-foreground/70 lg:text-lg">
              Transformez vos objectifs en réalité : investissez aujourd'hui et
              regardez votre avenir prospérer !
            </p>
          </header>
          <main className="my-10 grid grid-cols-4 gap-6 ">
            {sortedInvestments.map((investment) => {
              return (
                <InvestmentCardXs
                  key={investment.id}
                  name={investment.name}
                  term={investment.term}
                  imageUrl={investment.imageUrl}
                  investmentType={investment.investmentType}
                  annualProfit={investment.annualProfit}
                />
              )
            })}
          </main>
        </div>
      </div>
    </div>
  )
}
