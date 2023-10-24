export function Banner() {
  return (
    <div className=" border-theme border-custom  flex h-full w-full bg-background-dark-900 lg:min-h-[calc(100vh-5rem)]">
      <div className="responsive-container w-full animate-animateOnOpen  flex-col gap-4 py-16  lg:mb-16 lg:justify-center  lg:py-0">
        <h1 className="h1-custom">Comment ça marche</h1>
        <p className="text-gray-100 opacity-70 lg:w-[80%] lg:text-2xl">
          Investissez dans des projets d'entreprises sélectionnées et recevez
          les revenus directement sur votre compte courant.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6    md:grid-cols-2 ">
          <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-800 bg-background-dark-800 p-4 lg:gap-4  lg:p-6">
            <p className="text-xl text-gray-100 opacity-90">
              <span className="mr-4 text-2xl text-yellow-normal">1.</span>
              Nous analysons et sélectionnons des projets d'entreprises de
              divers secteurs.
            </p>
            <p className="text-gray-100 opacity-60">
              Recevons plusieurs propositions chaque semaine. Évaluons
              l'historique financier, juridique et technique de chaque
              entreprise, et établissons les garanties spécifiques pour chaque
              opération.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-800 bg-background-dark-800 p-4 lg:gap-4  lg:p-6">
            <p className="text-xl text-gray-100 opacity-90">
              <span className="mr-4 text-2xl text-yellow-normal">2.</span>
              Vous choisissez et investissez dans les projets les plus
              intéressants pour votre profil.
            </p>
            <p className="text-gray-100 opacity-60">
              Après approbation, nous publions les projets sur l'appli.
              Nouvelles opportunités chaque semaine, variables en risque,
              rentabilité, durée et paiement.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-800 bg-background-dark-800 p-4 lg:gap-4  lg:p-6">
            <p className="text-xl text-gray-100 opacity-90">
              <span className="mr-4 text-2xl text-yellow-normal">3.</span>
              Les entreprises réalisent leurs projets et versent des intérêts
              sur le montant investi.
            </p>
            <p className="text-gray-100 opacity-60">
              À la fin de chaque collecte, nous transférons les fonds recueillis
              aux entreprises qui versent périodiquement des intérêts selon les
              conditions de chaque offre.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-solid border-gray-800 bg-background-dark-800 p-4 lg:gap-4  lg:p-6">
            <p className="text-xl text-gray-100 opacity-90">
              <span className="mr-4 text-2xl text-yellow-normal">1.</span>
              Nous recevons les paiements des entreprises et les redistribuons
              aux investisseurs.
            </p>
            <p className="text-gray-100 opacity-60">
              Vous suivez les rendements via l'application et recevez les
              intérêts selon les délais établis directement sur votre compte
              courant Paris I. Tout est prêt pour réinvestir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
