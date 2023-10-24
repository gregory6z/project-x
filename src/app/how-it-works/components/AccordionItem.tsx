"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { AccordionContent, AccortionTrigger } from "./AccordionQuestions"

interface AccordionItemProps {
  value: string
  trigger: string
  content: string
}
interface AccordionItemArray {
  accordions: AccordionItemProps[]
}

export function AccordionItems() {
  const accordions = [
    {
      value: "value-1",
      trigger: "Qu'est-ce que c'est Paris Inv.",
      content: `Paris Inv. est une plateforme en ligne qui permet aux
      investisseurs individuels de prêter de l'argent à des entreprises
      qui ont besoin de financement pour leurs projets. Les
      investissements sont proposés sous forme de prêts aux entreprises.
      Paris Inv. s'occupe de rendre ces offres accessibles et
      compréhensibles pour les investisseurs, offrant ainsi une
      expérience d'investissement simple et transparente.`,
    },

    {
      value: "value-2",
      trigger: "Comment Paris Inv. obtient-elle des rendements si élevés ?",
      content: `Chaque opportunité sur la plateforme a un taux de rendement
      particulier. Avant, ces taux étaient accessibles sur le marché
      financier, mais principalement pour de grands investisseurs et des
      fonds qui pouvaient investir directement dans des secteurs comme
      l'immobilier et l'agriculture.`,
    },

    {
      value: "value-3",
      trigger: "Comment Paris Inv gagne de l'argent sans percevoir de frais ?",
      content: ` Paris Inv. est payée uniquement par l'entreprise qui emprunte de
      l'argent. Nous convenons d'un pourcentage fixe sur le montant
      collecté avec chaque entreprise, et nous recevons ce paiement
      lorsque l'offre est terminée.`,
    },

    {
      value: "value-4",
      trigger: "Quelles sont les garanties d'investissement ?",
      content: `Chaque offre affiche ses propres garanties, allant de garanties
      personnelles, comme la garantie des associés, à des garanties
      réelles, comme la mise en gage d'immobilier. Vous pouvez trouver
      ces informations sur la page de détails de chaque offre.`,
    },

    {
      value: "value-5",
      trigger: "Comment sera imposée mon investissement ?",
      content: `L'impôt sur le revenu appliqué aux opportunités publiées suit une
      table d'imposition qui dépend de la durée et du mode de paiement.
      Dans les opérations "bullet," il y a un taux unique à la fin. Pour
      les paiements mensuels, le taux varie et diminue au fil des mois.
      L'impôt est déduit à la source, donc l'investisseur reçoit le
      montant net sur son compte Paris Inv. Nous fournissons un avis de
      revenus chaque année dans notre application.`,
    },
  ]

  return (
    <>
      {accordions.map((accordion) => {
        return (
          <Accordion.Item
            value={accordion.value}
            key={accordion.value}
            className="w-full overflow-hidden  border border-solid border-gray-800 bg-background-dark-800  first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[10_0_0_2px]"
          >
            <AccortionTrigger>{accordion.trigger}</AccortionTrigger>

            <AccordionContent>{accordion.content}</AccordionContent>
          </Accordion.Item>
        )
      })}
    </>
  )
}
