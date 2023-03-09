import { useStaticQuery, graphql } from "gatsby"

export const useOpeningQuery = () => {
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      allWpOpenings(sort: { date: DESC }) {
        nodes {
          blocks
          openingdetails {
            applynow {
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
          title
          content
        }
      }
    }
  `)
  return data
}
