import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Category from "../components/Categoy.js/Category"

const archiveTemplate = ({
  data: { allWpTeam },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => (
  <div>
    <Category catId={catId} categories={categories.edges} />
    <h1 dangerouslySetInnerHTML={{ __html: catName }} />
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="team"
    >
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center"></div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {allWpTeam.edges.map(t => (
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={t.node.featuredImage.node.sourceUrl}
                alt="Person"
              />
            </div>

            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">{t.node.title}</p>
              <p
                className="mb-5 text-xs text-gray-800"
                dangerouslySetInnerHTML={{ __html: t.node.content }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpTeam(
      sort: { teamDetails: { order: ASC } }
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          teamDetails {
            designation
            linkedin
            order
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
