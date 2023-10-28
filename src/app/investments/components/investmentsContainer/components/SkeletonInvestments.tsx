import { SkelletonItem } from "../../skelletonItem"

export default function SkeletonInvestments() {
  return (
    <>
      <main className="mt-8 grid h-full w-full  animate-animateOnOpen grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3   lg:gap-y-12 ">
        <SkelletonItem />
        <SkelletonItem />
        <SkelletonItem />

        <SkelletonItem />
        <SkelletonItem />
        <SkelletonItem />
      </main>
    </>
  )
}
