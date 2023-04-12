import { Link } from "gatsby"
import React from "react"
import { useTeamQuery } from "../../hooks/useTeamQuery"
import { FaLinkedin } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

export const Team = () => {
  const data = useTeamQuery()
  const team = data.allWpTeam.nodes
  const title = data.wpPage.title
  const content = data.wpPage.content
  const cat = data.allWpCategory.nodes

  return (
    <div class="max-w-[85rem] mx-auto  lg:px-6 flex lg:mb-[100px] md:mb-[100px]  clsteamContainer">
      <div class="mb-10 md:mb-16  max-w-[32%] pr-[75px] fixed mt-[8rem] clsteamContent z-10">
        <h2 class="text-3xl font-bold mb-6 text-[#000] text-[40px] capitalize pt-4">
          {title}
        </h2>

        <p
          class="max-w-screen-md mx-auto text-left md:text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex flex-wrap ">
          <div className="">
            {cat.map(c => (
              <>
                <Link to={c.uri}>
                  <button
                    type="button"
                    class=" rounded-lg text-[12px]  text-center inline-flex items-center bg-[#fff] mt-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3"
                  >
                    {c.name}
                    <span className="pl-2">
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
              </>
            ))}
          </div>
        </div>
        <div>
          <Link to="/organization">
            <button class="bg-[#fff] mt-8 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
              Organization Chart
            </button>
          </Link>
        </div>
        <div>
          <Link to="/careers">
            <button class="bg-[#fff] mt-7 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
              Join us
            </button>
          </Link>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-3 w-[62%] ml-auto h-fit lg:mt-[8rem] md:mt-[4rem] md: clsteamImage">
        {team.map(t => (
          <div class="p-4 shadow max-h-[460px]">
            <div class="h-[250px] mb-2 overflow-hidden rounded-lg bg-[#f5f5f5] shadow-lg md:h-[250px] clsTeamImagediv">
              <img
                src={t.featuredImage.node.sourceUrl}
                alt="team-img"
                class="object-cover relative object-center w-full h-[280px]"
              />
            </div>

            <div class="flex flex-col items-left justify-center">
              <div className="flex justify-between">
                <div class="font-bold text-[#000] md:text-lg">{t.title}</div>
                <div className="pt-1">
                  {t.teamDetails.linkedin ? (
                    <div class="flex">
                      <a
                        href={t.teamDetails.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="text-[#26a7de] text-[20px] clsLinkedIn" />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
              <p class="text-sm text-gray-500 md:text-base clsDesignation">
                {t.teamDetails.designation}
              </p>

              {/* <div class="flex">
                <div class="flex gap-4">
                  <a href={t.teamDetails.linkedin} target="_blank">
                    <FaLinkedin className="text-[#26a7de] text-[25px]" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
