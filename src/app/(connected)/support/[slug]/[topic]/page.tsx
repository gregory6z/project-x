/* eslint-disable array-callback-return */
import { faqData } from "../../faq"

export default function SupportTopic({
  params,
}: {
  params: { topic: string; slug: string }
}) {
  const data = faqData
    .map((item) => {
      if (item.slug === params.slug) {
        return item
      }
    })
    .filter((item) => item !== undefined)

  const topicDetails = data
    .map((item) =>
      item.topics
        .map((topic) => {
          if (topic.slug === params.topic) {
            return topic
          }
        })
        .filter((item) => item !== undefined),
    )
    .flat()

  return (
    <div className="mb-20 mt-14 flex w-full flex-col px-[1.5rem] text-foreground/90 lg:px-20">
      <h1 className="text-3xl font-semibold tracking-tighter text-primary lg:text-5xl">
        {topicDetails[0].title}
      </h1>
      <p className="mt-4 text-foreground/80 lg:text-lg">
        {topicDetails[0].description}
      </p>

      <h2 className="mt-6 text-2xl font-semibold tracking-tight lg:text-3xl  ">
        {topicDetails[0].details?.header}{" "}
      </h2>
      <div className="flex flex-col gap-4 text-pretty">
        {topicDetails[0].details?.content.map((item, index) => {
          return (
            <div key={index}>
              {" "}
              <h3 className="mt-4 text-pretty text-lg  text-foreground lg:text-2xl">
                {item.title}
              </h3>
              <p className=" mt-2 text-pretty text-base text-foreground/60 lg:text-lg">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
