import { useStaticQuery, graphql } from "gatsby"

export const useOpeningQuery = () => {
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      allWpOpenings(sort: { date: DESC }) {
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
          date(fromNow: true)
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
