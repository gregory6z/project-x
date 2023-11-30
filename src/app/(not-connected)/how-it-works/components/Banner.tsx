import { TextMotion } from "@/app/components/Framer-motion/motion"

export function Banner() {
  return (
    <div className=" border-theme border-custom  flex h-full w-full bg-background-dark-900 lg:min-h-[calc(100vh+5rem)]">
      <div className="responsive-container w-full  flex-col gap-4 py-16  lg:mb-16 lg:justify-center  lg:py-20">
        <TextMotion
          initial={{
            translateY: "-10%",
            opacity: 0.3,
            translateZ: 0,
            filter: "blur(20px)",
          }}
          animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-100/90 lg:w-[60%] lg:text-5xl">
            Comment ça fonctionne et pourquoi devriez-vous commencer à investir
            dès maintenant ?
          </h1>
        </TextMotion>
        <TextMotion
          initial={{
            translateY: "-10%",
            opacity: 0,
            translateZ: 0,
          }}
          animate={{ translateY: "0%", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {" "}
          <p className="text-gray-100/60 lg:w-[70%] lg:text-xl">
            Investir en toute sécurité est notre priorité ! Découvrez la
            garantie derrière nos investissements et comprenez le fonctionnement
            novateur de notre entreprise. Nous sommes là pour transformer votre
            parcours financier avec fiabilité et transparence
          </p>
        </TextMotion>

        <div className="mt-8 grid animate-animateOnOpen grid-cols-1 gap-8  delay-200  md:grid-cols-2 ">
          <div className="flex flex-col  gap-5 rounded-r-lg  border border-l-2  border-solid border-gray-800  border-l-yellow-active bg-background-dark-800 p-4 lg:gap-4  lg:p-8">
            <p className="text-xl font-semibold  tracking-tight text-gray-100/90 lg:text-2xl ">
              <span className="mr-4  text-yellow-normal">1.</span>
              Nous analysons et sélectionnons des projets d'entreprises de
              divers secteurs.
            </p>
            <p className="text-gray-100/60 ">
              Recevons plusieurs propositions chaque semaine. Évaluons
              l'historique financier, juridique et technique de chaque
              entreprise, et établissons les garanties spécifiques pour chaque
              opération.
            </p>
          </div>
          <div className="flex flex-col  gap-4 rounded-r-lg  border border-l-2  border-solid border-gray-800  border-l-yellow-active bg-background-dark-800 p-4 lg:gap-4  lg:p-8">
            <p className="text-xl font-semibold tracking-tight text-gray-100/90 lg:text-2xl ">
              <span className="mr-4 text-2xl text-yellow-normal">2.</span>
              Vous choisissez et investissez dans les projets les plus
              intéressants pour votre profil.
            </p>
            <p className="text-gray-100/60">
              Après approbation, nous publions les projets sur l'appli.
              Nouvelles opportunités chaque semaine, variables en risque,
              rentabilité, durée et paiement.
            </p>
          </div>
          <div className="flex flex-col  gap-4 rounded-r-lg  border border-l-2  border-solid border-gray-800  border-l-yellow-active bg-background-dark-800 p-4 lg:gap-4  lg:p-8">
            <p className="text-xl font-semibold tracking-tight text-gray-100/90 lg:text-2xl ">
              <span className="mr-4 text-2xl text-yellow-normal">3.</span>
              Les entreprises réalisent leurs projets et versent des intérêts
              sur le montant investi.
            </p>
            <p className="text-gray-100/60">
              À la fin de chaque collecte, nous transférons les fonds recueillis
              aux entreprises qui versent périodiquement des intérêts selon les
              conditions de chaque offre.
            </p>
          </div>
          <div className="flex flex-col  gap-4 rounded-r-lg  border border-l-2  border-solid border-gray-800  border-l-yellow-active bg-background-dark-800 p-4 lg:gap-4  lg:p-8">
            <p className="text-xl font-semibold tracking-tight text-gray-100/90 lg:text-2xl ">
              <span className="mr-4 text-2xl text-yellow-normal">4.</span>
              Nous recevons les paiements des entreprises et les redistribuons
              aux investisseurs.
            </p>
            <p className="text-gray-100/60">
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
