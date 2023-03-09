import { useStaticQuery, graphql } from "gatsby"

export const useHomeBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage(databaseId: { eq: 41 }) {
        title
        homeBanner {
          homegallery {
            sourceUrl
          }
        }
      }
    }
  `)

  return data
}
