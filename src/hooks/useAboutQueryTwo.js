import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutQueryTwo {
      wpPage(databaseId: { eq: 258 }) {
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
