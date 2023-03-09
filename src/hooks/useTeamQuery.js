import { useStaticQuery, graphql } from "gatsby"

export const useTeamQuery = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allWpTeam {
        nodes {
          teamDetails {
            projects {
              linkedin
              name
              photo {
                publicUrl
              }
              role
            }
          }
          title
        }
      }
    }
  `)
  return data
}

// import { useStaticQuery, graphql } from "gatsby"

// export const useTeamQuery = () => {
//   const data = useStaticQuery(graphql`
//     query TeamyQuery {
//       allWpTeam {
//         edges {
//           node {
//             title
//             id
//             uri
//             teamDetails {
//               role
//               photo {
//                 sourceUrl
//               }
//             }
//             categories {
//               nodes {
//                 name
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return data
// }
