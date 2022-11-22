// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import algoliasearch from "algoliasearch"
import dayjs from "dayjs"

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID!,
  process.env.ALGOLIA_API_ADMIN_TOKEN!
)

type Data = {
  name: string
}

const getStoryBlocData = async () => {
  const storyblokUrl = `https://api.storyblok.com/v2/cdn/stories?version=draft&token=${process.env.STORYBLOK_CONTENT_DELIVERY_API_TOKEN}&cv=1669112815`
  const res = await axios.get(storyblokUrl).then((res) => {
    return res.data.stories
  })

  return res
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const data = await getStoryBlocData()

      const mappedData = data?.map((story: any) => {
        const todaysDate = dayjs()

        const eventStarted = dayjs(story.content.date.split("-")[0])

        const sixMonthsInMilliseconds = 15778800000

        const dateDifference =
          todaysDate.diff(eventStarted) < sixMonthsInMilliseconds

        return {
          objectID: story.id,
          title: story.content.title,
          description: story.content.copy,
          image: story.content.image,
          location: story.content.location,
          category: story.content.category,
          languages: story.content.languages,
          date: story.content.date,
          new: dateDifference,
          solutions: story.content.solutions,
          products: story.content.products,
        }
      })

      const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME!)

      index
        .saveObjects(mappedData, { autoGenerateObjectIDIfNotExist: false })
        .wait()
        .catch((e) => {
          res.status(500)
        })

      res.status(200)
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
  res.status(200)
}
