import { useStaticQuery, graphql } from "gatsby"

export const useHomeGallery = () => {
  const data = useStaticQuery(graphql`
    query HomeGallery {
      wpGallery(databaseId: { eq: 449 }) {
        gallery {
          photos {
            sourceUrl
          }
        }
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `)

  return data
}
