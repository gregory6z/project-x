import { ElementType } from "react"

interface MercharCardProps {
  title: string
  subtitle: string
  icon: ElementType
}

export function MerchanCard({ icon: Icon, title, subtitle }: MercharCardProps) {
  return (
    <div>
      <div className="relative flex h-[14rem]  flex-col gap-6 rounded-lg border border-gray-900 bg-background-dark-800 p-6">
        <div className="flex items-center gap-6">
          {" "}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-dark-700 text-yellow-normal/90 ">
            <Icon className="h-8 w-8"></Icon>
          </div>
          <h3 className="text-xl font-semibold text-yellow-normal/90">
            {/* Sécurité */}
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-100/60">
          {subtitle}
          {/* Entreprises sélectionnées et des opérations garanties, offrant
          sécurité et confiance à chaque étape. */}
        </p>
      </div>
    </div>
  )
}
