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
            categories
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)
  return data
}
