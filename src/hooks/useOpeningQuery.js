import { useStaticQuery, graphql } from "gatsby"

export const useOpeningQuery = () => {
  const data = useStaticQuery(graphql`
    query OpeningQuery {
      allWpOpenings(sort: { date: DESC }) {
        nodes {
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
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
        }
      }

      wpPage(databaseId: { eq: 61 }) {
        content
        title
      }
    }
  `)
  return data
}
