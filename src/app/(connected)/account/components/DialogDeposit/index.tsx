/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/Dialog"
import { ButtonScroll } from "../ButtonsScrolls/components/buttonScroll"
import { Plus } from "lucide-react"
import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"
import { Label } from "@/app/components/Label"
import { useEffect, useState } from "react"
import { dialogDeposit } from "./action"
import { useFormState } from "@/app/hooks/useformState"
import { redirect } from "next/navigation"

export function DialogDeposit() {
  const [{ message, success }, handleSubmit, isPending] =
    useFormState(dialogDeposit)

  const [selectedAmount, setSelectedAmount] = useState(0)

  const handleButtonClick = (ammount: number) => {
    setSelectedAmount(ammount)
  }

  useEffect(() => {
    if (success && message) {
      redirect(message)
    }
  }, [success, message])

  useEffect(() => {
    setDisplayValue(`${selectedAmount} €`)
  }, [selectedAmount])

  const [displayValue, setDisplayValue] = useState("0 €")

  const handleInputChange = (e: any) => {
    const value = e.target.value.replace(/[^\d]/g, "") // Extrai apenas números
    const numericValue = value ? parseInt(value, 10) : 0
    setSelectedAmount(numericValue) // Atualiza o valor numérico
    setDisplayValue(`${numericValue} €`) // Mantém o símbolo de euro
  }

  return (
    <Dialog>
      <DialogTrigger>
        <ButtonScroll Icon={Plus}> Alimenter mon Compte</ButtonScroll>{" "}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1 className="lg:text-3xl">Alimenter mon compte</h1>
          </DialogTitle>
          <DialogDescription>
            <p className="lg:text-base">
              Cliquez sur les options ci-dessous pour choisir le montant ou
              entrez le montant que vous souhaitez déposer dans le champ
              ci-dessous.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-3">
          <Button
            className={`h-[60px] ${
              selectedAmount === 100 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(100)}
          >
            100 €
          </Button>
          <Button
            className={`h-[60px] ${
              selectedAmount === 200 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(200)}
          >
            200 €
          </Button>
          <Button
            className={`h-[60px] ${
              selectedAmount === 300 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(300)}
          >
            300 €
          </Button>
          <Button
            className={`h-[60px] ${
              selectedAmount === 400 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(400)}
          >
            400 €
          </Button>
          <Button
            className={`h-[60px] ${
              selectedAmount === 500 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(500)}
          >
            500 €
          </Button>
          <Button
            className={`h-[60px] ${
              selectedAmount === 1000 &&
              "  pointer-events-none bg-primary text-background"
            }`}
            variant="secondary"
            onClick={() => handleButtonClick(1000)}
          >
            1000 €
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-end gap-4">
            <Label className=" text-foreground/60">
              Insérer la valeur manuellement
            </Label>
            <Input
              className="h-[56px] w-[200px] text-2xl"
              id="amount"
              name="amount"
              value={displayValue}
              onChange={handleInputChange} // Parse the input value as a number before setting it to `selectedAmount`
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            size={"lg"}
            className="flex w-full gap-2 "
          >
            Déposer sur mon compte
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
