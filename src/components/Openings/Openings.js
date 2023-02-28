import React from "react"
import { useOpeningQuery } from "../../hooks/useOpeningQuery"

const Openings = () => {
  const data = useOpeningQuery()
  const opening = data.allWpOpenings.nodes
  console.log(opening)

  return (
    <>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg pt-20">
        {opening.map((list, index) => {
          return (
            <div className="max-w-sm mt-10 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4 text-left">
                <h4 className="text-black font-semibold  text-lg font-[roboto">
                  {list.openingdetails.jobtitle}
                </h4>
                <p className=" text-sm mt-2 text-gray-500 mb-5">
                  {list.openingdetails.description}
                </p>
                {list.tags.nodes.map((i, j) => (
                  <div key={i.id} className="inline-flex">
                    <div className="text-xs mt-5 py-1 px-2 mr-2 text-[#fff] bg-[#fb7185] rounded hover:bg-[#b91c1c] hover:text-[#fff] border-x-gray-400 ">
                      {i.name}
                    </div>
                  </div>
                ))}
                <a
                  href={list.openingdetails.applynow.url}
                  className="bg-blue-500 mt-5 hover:bg-blue-700 text-white text-sm font-bold  py-1 px-3 border border-blue-700 rounded block clsApplybtn"
                >
                  Apply Now
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Openings
