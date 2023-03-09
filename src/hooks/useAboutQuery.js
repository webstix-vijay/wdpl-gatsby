import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      wpPage(databaseId: { eq: 48 }) {
        title
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
        content
        blocks
      }
    }
  `)
  return data
}
