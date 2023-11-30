import { MotionElement } from "@/app/components/Framer-motion/motion"
import { BenefitsCard } from "./BenefitsCard"
import { MotionFadeElement } from "@/app/components/Framer-motion/motionFade"

export function Benefits() {
  return (
    <div className="my-8 flex flex-col justify-center  text-gray-100 lg:my-[16rem]   lg:gap-16">
      <MotionElement delay={0} className="flex">
        <h1 className="mx-auto my-8 text-center text-2xl  font-semibold tracking-tight text-gray-100/90 lg:my-0 lg:mb-0 lg:w-[60%] lg:text-5xl">
          Bénéfices Exceptionnels de nos Solutions d'Investissement.
        </h1>
      </MotionElement>

      <MotionFadeElement>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4  lg:gap-4">
          <BenefitsCard title="Rendimentos acima de 18% ao ano">
            Diversifique com oportunidades de investimentos fora do mercado
            tradicional, que possuem rentabilidades muito acima do que o mercado
            costuma oferecer
          </BenefitsCard>

          <BenefitsCard title="Investimentos descorrelacionados da Bolsa de Valores">
            Estudos realizados pelo JP Morgan indicam que ter até 30% de ativos
            alternativos reduzem a volatilidade e aumentam a rentabilidade da
            sua carteira.
          </BenefitsCard>
          <BenefitsCard title="Investigação minuciosa">
            Todas as operações passam por uma análise criteriosa de due
            dilligence para que você tenha acesso apenas a oportunidades com
            ótimo risco x retorno.
          </BenefitsCard>

          <BenefitsCard title="Garantia de Economia Real">
            Grande parte dos ativos alternativos são lastreados em bens ou
            direitos, o que garante ainda mais segurança no seu investimento.
          </BenefitsCard>
        </div>
      </MotionFadeElement>
    </div>
  )
}
