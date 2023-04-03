import { useStaticQuery, graphql } from "gatsby"

export const useTripQuery = () => {
  const data = useStaticQuery(graphql`
    query TripQuery {
      wpGallery(databaseId: { eq: 606 }) {
        gallery {
          photos {
            sourceUrl
          }
        }
        title
      }
    }
  `)

  return data
}
