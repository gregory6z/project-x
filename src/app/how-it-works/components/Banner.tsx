export function Banner() {
  return (
    <div className=" border-theme border-custom  h-full w-full bg-background-dark-900 lg:h-[calc(100vh-5rem)]">
      <div className="responsive-container h-full flex-col gap-4 py-8 lg:justify-center lg:py-0">
        <h1 className="h1-custom">Comment ça marche</h1>
        <p className="text-gray-100 opacity-70 lg:w-[60%] lg:text-2xl">
          Investissez dans des projets d'entreprises sélectionnées et recevez
          les revenus directement sur votre compte courant.
        </p>
      </div>
    </div>
  )
}
