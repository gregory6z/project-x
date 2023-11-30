"use client"

import * as Accordion from "@radix-ui/react-accordion"

import { ChevronDown } from "lucide-react"
import { AccordionItems } from "./AccordionItem"
import { AccordionContainer } from "./AccordionContainer"

export function AccordionQuestions() {
  return (
    <Accordion.Root
      className="  mx-auto my-16 h-full w-full rounded-md opacity-90 lg:w-full lg:max-w-[800px] "
      type="single"
      collapsible
    >
      <div className="flex flex-col gap-8 ">
        <AccordionItems></AccordionItems>
      </div>
    </Accordion.Root>
  )
}

export function AccortionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Header className="flex w-full">
      <Accordion.Trigger className="  group flex h-full  w-full  flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none text-gray-100 shadow-[0_1px_0] outline-none">
        <h1 className="  py-4 text-xl lg:text-2xl ">{children}</h1>

        <ChevronDown
          className="text-gray-100 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

export function AccordionContent({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Content className=" overflow-hidden text-[15px] data-[state=closed]:animate-slideUpAc data-[state=open]:animate-slideDownAc">
      <p className="p-4 text-base text-gray-100 opacity-70 lg:text-xl">
        {children}
      </p>
    </Accordion.Content>
  )
}
