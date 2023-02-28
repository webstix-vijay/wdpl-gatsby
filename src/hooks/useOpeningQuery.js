import { useStaticQuery, graphql } from "gatsby"

export const useOpeningQuery = () => {
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      allWpOpenings {
        nodes {
          openingdetails {
            description
            fieldGroupName
            jobtitle
            applynow {
              title
              url
              target
            }
          }
          tags {
            nodes {
              name
              id
            }
          }
        }
      }
    }
  `)
  return data
}
