import { Link } from "gatsby"
import React from "react"
import { useTeamQuery } from "../../hooks/useTeamQuery"
import { FaTwitterSquare } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

export const Team = () => {
  const data = useTeamQuery()
  console.log(data)
  const team = data.allWpTeam.nodes
  const title = data.wpPage.title
  const content = data.wpPage.content

  console.log(team)

  return (
    <div class="max-w-[85rem] mx-auto  lg:px-6 flex mb-[100px]">
      <div class="mb-10 md:mb-16  w-[34%] pr-[75px] fixed mt-[8rem]">
        <h2 class="text-3xl font-bold mb-6 text-[#000] text-[40px] capitalize pt-4">
          {title}
        </h2>

        <p
          class="max-w-screen-md mx-auto text-left md:text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="block">
          <Link to="/category/projects">
            <button
              type="button"
              class=" rounded-lg text-sm  text-center inline-flex items-center bg-[#fff] mt-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3"
            >
              Projects
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </Link>

          <Link to="/category/design">
            <button
              type="button"
              class="rounded-lg text-sm  text-center inline-flex items-center bg-[#fff] mt-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black"
            >
              Design
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>

        <div className="block">
          <Link to="/category/seo">
            <button
              type="button"
              class="rounded-lg text-sm  text-center inline-flex items-center bg-[#fff] mt-4 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3"
            >
              Seo
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </Link>

          <Link to="/category/proposal">
            <button
              type="button"
              class="rounded-lg text-sm  text-center inline-flex items-center bg-[#fff] mt-4 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black"
            >
              Proposal
              <span className="pl-2">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
        <Link to="/organization">
          <button class="bg-[#fff] mt-8 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-4 border border-black">
            Organization Chart
          </button>
        </Link>
      </div>

      <div class="grid gap-4 md:grid-cols-3 w-[62%] ml-auto h-fit mt-[8rem]">
        {team.map(t => (
          <div class="p-4 shadow max-h-[460px]">
            <div class="h-[250px] mb-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-lg md:h-[250px]">
              <img
                src={t.featuredImage.node.sourceUrl}
                alt="Image"
                class="object-contain object-center w-full h-[280px]"
              />
            </div>

            <div class="flex flex-col items-left justify-center">
              <div class="font-bold text-[#000] md:text-lg">{t.title}</div>
              <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-3">
                Founder / CEO
              </p>
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: t.content }}
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
  )
}
