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
    <div className="mb-20 flex w-full flex-col px-20 text-foreground/90">
      <h1 className="font-semibold tracking-tighter text-primary lg:text-5xl">
        {topicDetails[0].title}
      </h1>
      <p className="mt-4 text-foreground/80 lg:text-lg">
        {topicDetails[0].description}
      </p>

      <h2 className="mt-6 text-3xl font-semibold tracking-tight  ">
        {topicDetails[0].details?.header}{" "}
      </h2>
      <div className="flex flex-col gap-4 text-pretty">
        {topicDetails[0].details?.content.map((item, index) => {
          return (
            <div key={index}>
              {" "}
              <h3 className="mt-4 text-2xl text-foreground">{item.title}</h3>
              <p className=" mt-2 text-lg text-foreground/60">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
