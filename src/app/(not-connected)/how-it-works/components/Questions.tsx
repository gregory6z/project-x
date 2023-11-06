import { Info } from "@/app/(not-connected)/Home/components/Depositions/components/Info"
import { AccordionQuestions } from "./AccordionQuestions"
import { AccordionItems } from "./AccordionItem"

export function Questions() {
  return (
    <div className="border-custom h-full w-full bg-background-dark-900">
      <div className="responsive-container   flex-col py-8  lg:py-20">
        <div className="hidden pb-8 xl:block">
          <Info></Info>
        </div>
        <h1 className="text-center text-2xl  text-gray-100 lg:text-6xl ">
          Avez-vous des questions ?
        </h1>
        <div className="flex w-full items-center  ">
          <AccordionQuestions></AccordionQuestions>
        </div>
      </div>
    </div>
  )
}
