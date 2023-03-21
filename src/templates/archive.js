import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Category from "../components/Categoy.js/Category"
import { FaTwitterSquare } from "react-icons/fa"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const archiveTemplate = ({
  data: { allWpTeam },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => (
  <>
    <Header />
    <div className="max-w-[85rem] mx-auto mt-[8rem] lg:px-6">
      <Category catId={catId} categories={categories.edges} />
      <h1 dangerouslySetInnerHTML={{ __html: catName }} />
      <div className="" id="team">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center"></div>
        <div class="grid gap-4 md:grid-cols-3 w-full ml-auto h-fit mt-[8rem]">
          {allWpTeam.edges.map(t => (
            <div class="p-4 shadow max-h-[460px]">
              <div class="h-[250px] mb-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-lg md:h-[250px]">
                <img
                  src={t.node.featuredImage.node.sourceUrl}
                  alt="Image"
                  class="object-contain object-center w-full h-[280px]"
                />
              </div>

              <div class="flex flex-col items-left justify-center">
                <div class="font-bold text-[#000] md:text-lg">
                  {t.node.title}
                </div>
                <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-3">
                  Founder / CEO
                </p>
                <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: t.node.content }}
                />

                <div class="flex">
                  <div class="flex gap-4">
                    <a href="#">
                      <FaTwitterSquare className="text-[#26a7de] text-[25px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
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
