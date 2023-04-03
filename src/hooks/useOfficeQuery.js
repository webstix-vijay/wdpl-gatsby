import { useStaticQuery, graphql } from "gatsby"

export const useOfficeQuery = () => {
  const data = useStaticQuery(graphql`
    query OfficeQuery {
      wpGallery(databaseId: { eq: 409 }) {
        gallery {
          photos {
            sourceUrl
          }
        }
        title
      }
      wpPage(databaseId: { eq: 58 }) {
        title
        content
        blocks
      }
    }
  `)

  return data
}
