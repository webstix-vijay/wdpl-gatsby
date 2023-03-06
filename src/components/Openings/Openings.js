import React from "react"
import { useOpeningQuery } from "../../hooks/useOpeningQuery"

const Openings = () => {
  const data = useOpeningQuery()
  const opening = data.allWpOpenings.nodes
  console.log(opening)

  return (
    <>
      <div className=" mx-auto lg:max-w-screen-lg py-20">
        {opening.map((list, index) => {
          return (
            <div className="mt-10 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4 text-left">
                <h4 className="text-black font-semibold  text-lg font-[roboto">
                  {list.openingdetails.jobtitle}
                </h4>
                <p className=" text-md leading-7 mt-2 text-gray-600 mb-4">
                  {list.openingdetails.description}
                </p>
                <div className="w-full">
                  {list.tags.nodes.map((i, j) => (
                    <div key={i.id} className="inline-flex">
                      <div className="text-xs mt-5 py-1 px-2 mr-2 text-[#000] bg-[#eee] rounded border-x-gray-400 ">
                        {i.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-baseline w-full content justify-between">
                  <div className="clsApplybtn">
                    <a
                      href={list.openingdetails.applynow.url}
                      className="bg-[#fff] mt-5 hover:bg-[#a51720] hover:text-[#fff] text-[#a51720] text-sm font-bold  py-1 px-3 border rounded block "
                    >
                      Apply Now
                    </a>
                  </div>
                  <div>
                    <span className="text-right  text-gray-500">
                      Posted on {list.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Openings
