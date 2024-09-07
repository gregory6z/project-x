/* eslint-disable array-callback-return */
import Link from "next/link"
import { faqData } from "../faq"

export default function SupportContent({
  params,
}: {
  params: { slug: string }
}) {
  const data = faqData
    .map((item) => {
      if (item.slug === params.slug) {
        return item
      }
    })
    .filter((item) => item !== undefined)

  return (
    <div className="flex w-full flex-col px-[1.5rem] lg:px-20">
      {data.map((item) => {
        return (
          <div className="w-full" key={item?.category}>
            <h1 className="mt-10 text-3xl font-semibold tracking-tight text-primary lg:mt-0 lg:text-5xl">
              {item?.category}
            </h1>
            <div className=" mt-14 flex  flex-col ">
              {item?.topics.map((topic, index) => {
                return (
                  <Link
                    href={topic?.link}
                    className=" w-full  border-t border-muted-foreground/40 py-6 text-lg text-foreground/80 transition-all last:border-b hover:text-primary lg:text-2xl"
                    key={index}
                  >
                    {topic?.title}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
