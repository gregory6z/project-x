"use client"

import { Button } from "@/app/components/Button"
import { CardContent } from "@/app/components/Card"
import { Input } from "@/app/components/Input"
import { Label } from "@/app/components/Label"
import { useRouter, useSearchParams } from "next/navigation"
import { signInWithEmailAndPassword } from "./action"
import { useFormState } from "@/app/hooks/useformState"
import {  Loader2 } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { useEffect, useState } from "react"

export function SignInForm() {


  const [{ errors, message }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
  )

  const searchParams = useSearchParams()

  const initialEmail = (searchParams.get("email") as string) || ""

  const [email, setEmail] = useState(initialEmail)

  

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-5">
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
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o input muda
            placeholder="email@email.com"
          ></Input>
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
          <Link href={"/auth/forgot-password"} className=" cursor-pointer text-right text-sm text-foreground/60 hover:text-primary hover:underline">
            <p className="pt-1">Mot passe oublie?</p>
          </Link>
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
