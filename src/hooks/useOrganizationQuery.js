import { useStaticQuery, graphql } from "gatsby"

export const useOrganizationQuery = () => {
  const data = useStaticQuery(graphql`
    query OrganizationQuery {
      wpPage(databaseId: { eq: 54 }) {
        title
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)
  return data
}
