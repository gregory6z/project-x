import { Button } from "@/app/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"
import { Input } from "@/app/components/Input"
import { Label } from "@/app/components/Label"

export default function SignIn() {
  return (
    <Card className=" w-full lg:w-[540px]  lg:min-w-[540px]">
      <form action="">
        <CardHeader>
          <CardTitle className=" lg:text-[3rem]">Se connecter</CardTitle>
          <CardDescription className="lg:text-lg">
            pour continuer à Paris Investissements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label className="lg:text-lg">Adresse e-mail</Label>
            <Input className="h-[48px]" placeholder="email@email.com"></Input>
          </div>

          <div className="space-y-2">
            <Label className="lg:text-lg">Mot de passe</Label>
            <Input
              className="h-[48px] "
              placeholder="votre mot de passe"
              type="password"
            ></Input>
            <p className=" cursor-pointer text-right text-sm text-foreground/60 hover:text-primary hover:underline">
              Mot passe oublie?
            </p>
          </div>
          <Button size={"lg"} type="submit" className="w-full">
            Connecter
          </Button>
        </CardContent>
        <CardFooter className="flex w-full flex-col ">
          <p className=" text-pretty text-foreground/60">
            Vous n'avez pas de compte ? Cliquez ici pour en{" "}
            <span className="cursor-pointer text-primary hover:underline">
              créer un.
            </span>
          </p>
          <p className=" text-pretty mt-6 text-center  text-sm text-foreground/60">
            En cliquant sur Continuer, vous acceptez nos{" "}
            <span className="underline"> Conditions d'utilisation</span> et
            notre{" "}
            <span className="underline">Politique de confidentialité</span>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
