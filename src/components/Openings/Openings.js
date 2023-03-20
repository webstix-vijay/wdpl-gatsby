import React from "react"
import { useOpeningQuery } from "../../hooks/useOpeningQuery"
import { useState } from "react"
import { Link } from "gatsby"
import Popup from "reactjs-popup"
import { HiArrowNarrowRight } from "react-icons/hi"

const Openings = () => {
  const data = useOpeningQuery()
  const opening = data.allWpOpenings.nodes
  const Content = data.wpPage.content
  console.log(opening)

  return (
    <>
      <div
        className="px-4 py-16 mx-auto max-w-[85rem]  md:px-24 lg:px-8 lg:py-20 flex"
        id="team"
      >
        <div className="mx-auto mb-10 sm:text-left xl:w-[30%]  mt-[40px] fixed ">
          <h1 className="text-[40px]  text-[#a31e22] font-bold">
            WORK WITH US
          </h1>
          <p
            className="text-[17px] pt-4"
            dangerouslySetInnerHTML={{ __html: Content }}
          />
        </div>

        <div className="grid gap-10 ml-auto sm:grid-cols-2 lg:grid-cols-2 lg:w-[55%] h-fit clsScroll mt-[55px] scroll">
          {data.allWpOpenings.nodes.map((list, index) => {
            return (
              <div className="rounded overflow-hidden shadow-lg">
                <div className="relative mb-4 rounded  overflow-hidden shadow-lg lg:pb-36  bg-black">
                  <img
                    className="absolute object-cover w-[100%] h-full rounded"
                    src={list.featuredImage.node.sourceUrl}
                    alt="Person"
                  />
                </div>

                <div class="px-6 pb-4">
                  <div class="font-bold text-xl mb-2">{list.title}</div>

                  <div className="relative text-[17px]">
                    {list?.content?.length > 300 ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: list?.content.slice(0, 220),
                        }}
                        className=""
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{ __html: list?.content }}
                        className=""
                      />
                    )}

                    <Popup
                      trigger={
                        <button className="button w-full text-right flex items-center justify-end pt-[5px] text-[15px]">
                          View More
                          <span className="pl-[5px] flex">
                            <HiArrowNarrowRight />
                          </span>
                        </button>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <div className="modal">
                          <button className="close" onClick={close}>
                            &times;
                          </button>

                          <div className="content">
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">
                                {list.title}
                              </div>
                              <p
                                class="text-gray-700 text-base leading-[35px]"
                                dangerouslySetInnerHTML={{
                                  __html: list.content,
                                }}
                              />
                            </div>

                            <div class=" px-6 text-center pb-4 rounded-[2px]">
                              <a
                                class="inline-flex justify-center items-center  bg-[#a31e22] mt-4 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border hover:border-[#000]"
                                href="mailto:jobs@webstix.com"
                              >
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
                <div class="px-6 pt-4 pb-1">
                  {list.tags.nodes.map((i, j) => (
                    <span
                      key={i.id}
                      class="inline-block bg-gray-200 lowercase rounded-full px-3 py-1 text-[13px] font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{i.name}
                    </span>
                  ))}
                </div>

                <div class=" px-6 text-left pb-4 rounded-[2px]">
                  <a
                    class="inline-flex justify-center mr-4 items-center  bg-[#a31e22] mt-4 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border hover:border-[#000]"
                    href={list.openingdetails.applynow.url}
                  >
                    Apply Now
                  </a>
                  <span className="text-[14px] text-gray-600">
                    Posted On: {list.date}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Openings
