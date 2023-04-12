import { useStaticQuery, graphql } from "gatsby"

export const useCelebrationQuery = () => {
  const data = useStaticQuery(graphql`
    query CelebrationQuery {
      wpGallery(databaseId: { eq: 168 }) {
        gallery {
          photos {
            sourceUrl
          }
        }
        title
        content
      }
    }
  `)

  return data
}
