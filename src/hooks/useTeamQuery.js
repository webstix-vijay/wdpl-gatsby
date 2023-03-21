import { useStaticQuery, graphql } from "gatsby"

export const useTeamQuery = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allWpTeam(sort: { teamDetails: { order: ASC } }) {
        nodes {
          teamDetails {
            order
            linkedin
            fieldGroupName
            designation
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          content
        }
      }
      wpPage(databaseId: { eq: 51 }) {
        title
        content
      }
    }
  `)
  return data
}
