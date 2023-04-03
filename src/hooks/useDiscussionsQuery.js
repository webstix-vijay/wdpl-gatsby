import { useStaticQuery, graphql } from "gatsby"

export const useDiscussionsQuery = () => {
  const data = useStaticQuery(graphql`
    query DiscussionsQuery {
      wpGallery(databaseId: { eq: 609 }) {
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
