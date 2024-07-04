"use client"

import { Button } from "@/app/components/Button"
import { CardContent } from "@/app/components/Card"
import { Input } from "@/app/components/Input"
import { Label } from "@/app/components/Label"
import { useRouter } from "next/navigation"
import { signInWithEmailAndPassword } from "./action"
import { useFormState } from "@/app/hooks/useformState"
import { Loader2 } from "lucide-react"

export function SignInForm() {
  const router = useRouter()

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push("/")
    },
  )

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
          <p className=" cursor-pointer text-right text-sm text-foreground/60 hover:text-primary hover:underline">
            Mot passe oublie?
          </p>
        </div>
        <Button
          size={"lg"}
          disabled={isPending}
          type="submit"
          className="w-full"
        >
          Continuer {isPending && <Loader2 className="size-4 animate-spin" />}
        </Button>
        {message && (
          <p className="text-center text-sm text-red-400">{message}</p>
        )}
      </CardContent>
    </form>
  )
}
