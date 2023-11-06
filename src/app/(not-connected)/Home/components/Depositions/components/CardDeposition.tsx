import Image from "next/image"

import depositionImage from "../../../../../assets/corno.webp"

export function CardDeposition() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-6 text-gray-100">
      <header className="flex  items-center gap-4">
        <div className="flex h-12 w-12 rounded-full border-2  border-solid border-yellow-normal bg-slate-100">
          <Image
            src={depositionImage}
            alt={""}
            className="objet-cover rounded-full"
          />
        </div>
        <div>
          <p>
            <strong className="text-yellow-normal">Corno manso</strong>
          </p>
          <p className="opacity-60">Investidor desde 2018</p>
        </div>
      </header>
      <main>
        <p className="opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repudiandae dignissimos dolores. Ipsum exercitationem veritatis
          incidunt explicabo ipsa sit amet, in neque ex tempora eius delectus,
          deleniti ratione quibusdam modi?
        </p>
      </main>
    </div>
  )
}
