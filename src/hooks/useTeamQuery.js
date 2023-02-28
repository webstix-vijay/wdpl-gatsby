import { useStaticQuery, graphql } from "gatsby"

export const useTeamQuery = () => {
  const data = useStaticQuery(graphql`
    query TeamyQuery {
      allWpTeam {
        edges {
          node {
            title
            id
            uri
            teamDetails {
              role
              photo {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  return data
}
