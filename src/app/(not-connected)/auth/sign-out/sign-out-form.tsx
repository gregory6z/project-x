"use client"

import { Button } from "@/app/components/Button"
import { CardContent } from "@/app/components/Card"
import { Input } from "@/app/components/Input"
import { Label } from "@/app/components/Label"
import { useRouter } from "next/navigation"
import { useFormState } from "@/app/hooks/useformState"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { signOutAction } from "./action"

export function SignOutForm() {
  const [email, setEmail] = useState("")

  const router = useRouter()

  const [{ errors, message }, handleSubmit, isPending] = useFormState(
    signOutAction,

    () => {
      router.push(`/auth/sign-in?email=${encodeURIComponent(email)}`)
    },
  )

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  function handlePhoneInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(?=\d)/g, "$1 ")
    event.target.value = formattedValue
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-5 ">
        <div className="flex  gap-4">
          <div className="w-full space-y-2">
            <Label className="lg:text-lg">Prénom</Label>
            {errors?.firstName && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.firstName[0]}
              </p>
            )}
            <Input
              className="h-[48px]"
              name="firstName"
              id="firstName"
              placeholder="John"
            ></Input>
          </div>

          <div className="w-full space-y-2">
            <Label className="lg:text-lg">Nom</Label>
            {errors?.lastName && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.lastName[0]}
              </p>
            )}
            <Input
              className="h-[48px]"
              name="lastName"
              id="lastName"
              placeholder="Doe"
            ></Input>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="lg:text-lg">Adresse e-mail</Label>
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
          <Input
            className="h-[48px]"
            name="email"
            type="email"
            id="email"
            onChange={handleEmailChange}
            placeholder="email@email.com"
          ></Input>
        </div>
        <div className="space-y-2">
          <Label className="lg:text-lg">Adresse </Label>
          {errors?.address && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.address[0]}
            </p>
          )}
          <Input
            className="h-[48px]"
            name="address"
            id="address"
            placeholder="52 Rue de la paix 75000 Paris"
          ></Input>
        </div>

        <div className="flex gap-4">
          <div className="space-y-2">
            <Label className="lg:text-lg">Tel</Label>
            {errors?.phone && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.phone[0]}
              </p>
            )}
            <Input
              className="h-[48px]"
              name="phone"
              id="phone"
              type="tel"
              onChange={handlePhoneInputChange}
              placeholder="06 01 02 03 04"
            ></Input>
          </div>

          <div className="space-y-2">
            <Label className="lg:text-lg">Date de naissance</Label>
            {errors?.birthDate && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.birthDate[0]}
              </p>
            )}
            <Input
              className="h-[48px]"
              name="birthDate"
              type="date"
              id="birthDate"
            ></Input>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="lg:text-lg">Mot de passe</Label>
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
          <Input
            className="h-[48px] "
            placeholder="votre mot de passe"
            type="password"
            name="password"
            id="password"
          ></Input>
        </div>
        <div className="space-y-2">
          {errors?.passwordConfirmation && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.passwordConfirmation[0]}
            </p>
          )}
          <Input
            className="h-[48px] "
            placeholder="confirmer votre mot de passe"
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
          ></Input>
        </div>
        <Button
          size={"lg"}
          disabled={isPending}
          type="submit"
          className="w-full"
        >
          Continuer {isPending && <Loader2 className="size-4 animate-spin" />}
        </Button>
      </CardContent>
    </form>
  )
}
