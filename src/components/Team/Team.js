import { Link } from "gatsby"
import React from "react"
import { useTeamQuery } from "../../hooks/useTeamQuery"

export const Team = () => {
  const data = useTeamQuery()
  const team = data.allWpTeam.nodes
  console.log(team)

  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="team"
    >
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center"></div>
      <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 ">
        <Link to="/category/projects">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front"></div>
              <div class="flip-card-back"></div>
            </div>
          </div>
        </Link>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back"></div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back"></div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back"></div>
          </div>
        </div>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {team.map(t => (
          <div className="">
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={t.featuredImage.node.sourceUrl}
                alt="Person"
              />
            </div>

            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">{t.title}</p>
              <p
                className="mb-5 text-xs text-gray-800"
                dangerouslySetInnerHTML={{ __html: t.content }}
              ></p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-end h-full pb-6">
        <Link to="/careers">
          <button class="bg-[#a31e22] mt-6 hover:bg-[#fff] text-[#fff] font-semibold hover:text-[#a31e22] py-2 px-4 border hover:border-black">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  )
}
