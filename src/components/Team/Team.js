import React from "react"
import { useTeamQuery } from "../../hooks/useTeamQuery"

export const Team = () => {
  const data = useTeamQuery()
  const output = data.allWpTeam
  console.log(output)

  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="team"
    >
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center"></div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {data.map(t => (
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={t.node.teamDetails.photo.sourceUrl}
                alt="Person"
              />
            </div>

            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">{t.node.title}</p>
              <p className="mb-5 text-xs text-gray-800">
                {t.node.teamDetails.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
