import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"

import { ForgotPasswordForm } from "./sign-in-form"
import Link from "next/link"

export default function ForgotPassword() {
  return (
    <Card className=" w-full lg:w-[540px]  lg:min-w-[540px]">
      <CardHeader>
        <CardTitle className=" lg:text-[3rem]">Se connecter</CardTitle>
        <CardDescription className="lg:text-lg">
          pour continuer à Paris Investissements
        </CardDescription>
      </CardHeader>

      <ForgotPasswordForm></ForgotPasswordForm>

      <CardFooter className="flex w-full flex-col ">
      <p className=" text-pretty text-foreground/60">
          Vous n'avez pas de compte ? Cliquez ici pour {" "}
          <Link
            href={"/auth/sign-out"}
            className="cursor-pointer text-primary hover:underline"
          >
            s'inscrire.
          </Link>
        </p>
        <p className=" mt-6 text-pretty text-center  text-sm text-foreground/60">
          En cliquant sur Continuer, vous acceptez nos{" "}
          <span className="underline"> Conditions d'utilisation</span> et notre{" "}
          <span className="underline">Politique de confidentialité</span>
        </p>
      </CardFooter>
    </Card>
  )
}
