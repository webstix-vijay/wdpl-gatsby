import { useStaticQuery, graphql } from "gatsby"

export const useHomeBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query HomeBannerQuery {
      wpPage(databaseId: { eq: 8 }) {
        title
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
        content
      }
    }
  `)

  return data
}
