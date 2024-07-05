import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"
import { SignOutForm } from "./sign-out-form"
import Link from "next/link"

export default function SignOut() {
  return (
    <Card className=" w-full lg:mb-[5rem] lg:mt-[27rem]  lg:w-[540px] lg:min-w-[540px]">
      <CardHeader>
        <CardTitle className=" lg:text-[3rem]">Cree un compte</CardTitle>
        <CardDescription className="lg:text-lg">
          pour continuer à Paris Investissements
        </CardDescription>
      </CardHeader>

      <SignOutForm></SignOutForm>

      <CardFooter className="flex w-full flex-col ">
        <p className=" text-pretty text-foreground/60">
        Vous avez déjà un compte ?  Cliquez ici pour {" "}
          <Link href={"/auth/sign-in"} className="cursor-pointer text-primary hover:underline">
            se connecter.
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
