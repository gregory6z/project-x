"use client"
export function SimulatorForm() {
  return (
    <form action="" className="">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label className="font-bold lg:text-2xl">Valeur</label>
          <input
            type="number"
            placeholder="10.000,00$"
            className="w-full rounded-lg border-gray-800 bg-background-dark-800 text-xl"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="border-1 flex flex-col items-center justify-center rounded-lg border-2 border-gray-700 bg-background-dark-800 py-2">
            <p>Em 18 meses tera:</p>
            <p className="text-2xl font-black text-yellow-normal">12.550$</p>
          </div>
          <div className="border-1 flex flex-col items-center justify-center rounded-lg border-2 border-gray-700 bg-background-dark-800 py-2">
            <p>Em 18 meses tera:</p>
            <p className="text-2xl font-black text-yellow-normal">12.550$</p>
          </div>
          <div className="border-1 flex flex-col items-center justify-center rounded-lg border-2 border-gray-700 bg-background-dark-800 py-2">
            <p>Em 18 meses tera:</p>
            <p className="text-2xl font-black text-yellow-normal">12.550$</p>
          </div>
        </div>
      </div>
    </form>
  )
}
