// Exemplo de uso
interface DetailContent {
  title: string
  description: string
}

interface Details {
  header: string
  content: DetailContent[]
}

interface Topic {
  title: string
  slug: string
  description: string
  link: string
  details?: Details
}

interface Category {
  category: string
  link: string
  slug: string
  topics: Topic[]
}

export const faqData: Category[] = [
  {
    category: "Gestion du compte",
    slug: "gestion-compte",
    link: "/support/gestion-compte",
    topics: [
      {
        title: "Créer un nouveau compte",
        slug: "creer-compte",
        description:
          "Découvrez comment vous inscrire, quels documents sont nécessaires et comment activer votre compte.",
        link: "/support/gestion-compte/creer-compte",
        details: {
          header: "Comment créer un compte d'utilisateur ?",
          content: [
            {
              title: "Étape 1 : Télécharger l'application d'utilisateur",
              description:
                "Pour commencer, téléchargez l'application d'utilisateur depuis l'App Store ou Google Play. Assurez-vous d'avoir un smartphone compatible avec les versions les plus récentes d'iOS ou d'Android.",
            },
            {
              title: "Étape 2 : S'inscrire",
              description:
                "Ouvrez l'application et sélectionnez 'S'inscrire'. Entrez votre adresse e-mail et créez un mot de passe sécurisé. Vous recevrez un e-mail de confirmation pour vérifier votre adresse.",
            },
            {
              title: "Étape 3 : Vérifier votre identité",
              description:
                "Pour des raisons de sécurité, vous devrez vérifier votre identité. Préparez votre pièce d'identité officielle (carte d'identité ou passeport) et suivez les instructions dans l'application pour scanner le document. Vous devrez également faire une courte vidéo pour prouver que c'est bien vous.",
            },
            {
              title: "Étape 4 : Choisir un type de compte",
              description:
                "Sélectionnez le type de compte que vous souhaitez ouvrir : Standard, d'utilisateur You, ou d'utilisateur Metal. Chaque compte offre des avantages différents, alors choisissez celui qui correspond le mieux à vos besoins.",
            },
            {
              title: "Étape 5 : Activer votre compte",
              description:
                "Une fois votre identité vérifiée, vous recevrez une confirmation que votre compte est activé. Vous pourrez ensuite commander votre carte d'utilisateur, qui sera livrée à l'adresse que vous avez fournie lors de l'inscription.",
            },
            {
              title: "Étape 6 : Effectuer un premier dépôt",
              description:
                "Pour commencer à utiliser votre compte, effectuez un premier dépôt. Selon votre pays de résidence, vous devrez peut-être effectuer ce dépôt par virement SEPA depuis un autre compte bancaire à votre nom. Une fois ce dépôt effectué, vous pourrez utiliser toutes les autres méthodes de dépôt disponibles.",
            },
            {
              title: "Étape 7 : Commencer à utiliser votre compte",
              description:
                "Votre compte est maintenant prêt à l'emploi ! Vous pouvez commencer à faire des paiements, gérer vos finances, et utiliser toutes les fonctionnalités de l'application d'utilisateur.",
            },
          ],
        },
      },
      {
        slug: "recuperer-acces",
        title: "Récupérer l'accès à votre compte",
        description:
          "Vous avez oublié votre mot de passe ou vous ne pouvez pas accéder à votre compte ? Voici comment récupérer l'accès.",
        link: "/support/gestion-compte/recuperer-acces",
      },
      {
        slug: "mettre-a-jour-informations",
        title: "Mettre à jour vos informations personnelles",
        description:
          "Apprenez comment mettre à jour votre adresse, numéro de téléphone et d'autres informations personnelles.",
        link: "/support/gestion-compte/mettre-a-jour-informations",
      },
      {
        slug: "cloturer-compte",
        title: "Clôturer un compte",
        description:
          "Découvrez comment clôturer votre compte et quelles sont les étapes nécessaires pour finaliser le processus.",
        link: "/support/gestion-compte/cloturer-compte",
      },
    ],
  },
  {
    slug: "securite-confidentialite",
    category: "Securité et confidentialité",
    link: "/support/securite-confidentialite",
    topics: [
      {
        slug: "mesures-securite",
        title: "Mesures de sécurité",
        description:
          "Informez-vous sur les mesures de sécurité que nous utilisons pour protéger vos données et vos transactions.",
        link: "/support/securite-confidentialite/mesures-securite",
      },
      {
        slug: "activer-2fa",
        title: "Activer l'authentification à deux facteurs (2FA)",
        description:
          "Découvrez comment renforcer la sécurité de votre compte en activant l'authentification à deux facteurs.",
        link: "/support/securite-confidentialite/activer-2fa",
      },
      {
        slug: "protection-donnees",
        title: "Protection des données personnelles",
        description:
          "En savoir plus sur la manière dont vos données personnelles sont stockées et protégées.",
        link: "/support/securite-confidentialite/protection-donnees",
      },
      {
        slug: "conseils-securite",
        title: "Conseils de sécurité",
        description:
          "Obtenez des conseils sur la façon de sécuriser votre compte et éviter les fraudes.",
        link: "/support/securite-confidentialite/conseils-securite",
      },
    ],
  },
  {
    slug: "investissements",
    category: "Investissements et options",
    link: "/support/investissements",
    topics: [
      {
        slug: "options-disponibles",
        title: "Options d'investissement disponibles",
        description:
          "Explorez les différentes options d'investissement que nous proposons, y compris les actions, les fonds, et les crypto-monnaies.",
        link: "/support/investissements/options-disponibles",
      },
      {
        slug: "commencer-investir",
        title: "Commencer à investir",
        description:
          "Guide pour effectuer votre premier investissement sur notre plateforme.",
        link: "/support/investissements/commencer-investir",
      },
      {
        slug: "suivre-performance",
        title: "Suivre la performance des investissements",
        description:
          "Apprenez comment suivre en temps réel la performance de vos investissements.",
        link: "/support/investissements/suivre-performance",
      },
      {
        slug: "retrait-fonds",
        title: "Retrait d'investissements",
        description:
          "Tout ce que vous devez savoir sur le retrait de vos fonds investis.",
        link: "/support/investissements/retrait-fonds",
      },
    ],
  },
  {
    slug: "depots-retraits",
    category: "Dépôts et retraits",
    link: "/support/depots-retraits",
    topics: [
      {
        slug: "faire-depot",
        title: "Effectuer un dépôt",
        description:
          "Instructions pour effectuer un dépôt sur votre compte via différents moyens de paiement.",
        link: "/support/depots-retraits/faire-depot",
      },
      {
        slug: "methodes-depot",
        title: "Méthodes de dépôt disponibles",
        description:
          "Découvrez les différentes méthodes de dépôt que nous acceptons.",
        link: "/support/depots-retraits/methodes-depot",
      },
      {
        slug: "delais-traitement",
        title: "Délais de traitement des dépôts",
        description:
          "Informations sur le temps nécessaire pour que votre dépôt soit crédité sur votre compte.",
        link: "/support/depots-retraits/delais-traitement",
      },
      {
        slug: "faire-retrait",
        title: "Effectuer un retrait",
        description:
          "Comment retirer vos fonds de votre compte rapidement et en toute sécurité.",
        link: "/support/depots-retraits/faire-retrait",
      },
    ],
  },
  {
    slug: "frais-commissions",
    category: "Frais et commissions",
    link: "/support/frais-commissions",
    topics: [
      {
        slug: "frais-investissements",
        title: "Frais liés aux investissements",
        description:
          "Détails sur les frais appliqués pour chaque type d'investissement.",
        link: "/support/frais-commissions/frais-investissements",
      },
      {
        slug: "frais-depot-retrait",
        title: "Frais de dépôt et de retrait",
        description: "Comprenez les frais associés aux dépôts et aux retraits.",
        link: "/support/frais-commissions/frais-depot-retrait",
      },
      {
        slug: "calcul-commissions",
        title: "Calcul des commissions",
        description:
          "Explication de la manière dont les commissions sont calculées sur vos investissements.",
        link: "/support/frais-commissions/calcul-commissions",
      },
      {
        slug: "resume-frais",
        title: "Résumé des frais et commissions",
        description:
          "Accédez à un résumé de toutes les commissions et frais que vous avez payés.",
        link: "/support/frais-commissions/resume-frais",
      },
    ],
  },
  {
    slug: "support-assistance",
    category: "Support et assistance",
    link: "/support/support-assistance",
    topics: [
      {
        slug: "contacter-support",
        title: "Contacter le support client",
        description:
          "Toutes les façons de contacter notre support client pour obtenir de l'support.",
        link: "/support/support-assistance/contact-support",
      },
      {
        slug: "heures-disponibilite",
        title: "Heures de disponibilité du support",
        description:
          "Découvrez nos horaires d'ouverture pour le support téléphonique et par chat.",
        link: "/support/support-assistance/heures-disponibilite",
      },
      {
        slug: "resoudre-probleme-technique",
        title: "Résoudre un problème technique",
        description:
          "Suivez ces étapes pour résoudre des problèmes techniques courants avec notre application.",
        link: "/support/support-assistance/resoudre-probleme-technique",
      },
      {
        slug: "faq",
        title: "FAQ - Questions fréquentes",
        description:
          "Consultez notre FAQ pour obtenir des réponses rapides à vos questions.",
        link: "/support/support-assistance/faq",
      },
    ],
  },
]
