import { Transaction } from "./components/transaction"

export default function History() {
  return (
    <div className="h-full w-full ">
      <div className="mx-auto mb-20 max-w-[800px]">
        <div>
          <header>
            <h1 className="mb-2 mt-20 text-foreground lg:text-3xl">
              Transactions
            </h1>
            <p className="mt-2 text-foreground/70 lg:text-lg">
              Consultez l'historique de vos transactions.
            </p>
          </header>
          <main>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
          </main>
        </div>
      </div>
    </div>
  )
}
