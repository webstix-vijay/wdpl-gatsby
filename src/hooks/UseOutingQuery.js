import { useStaticQuery, graphql } from "gatsby"

export const useOutingQuery = () => {
  const data = useStaticQuery(graphql`
    query OutingQuery {
      wpGallery(databaseId: { eq: 170 }) {
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
