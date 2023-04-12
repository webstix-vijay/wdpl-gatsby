import React from "react"
import { useOpeningQuery } from "../../hooks/useOpeningQuery"
import { Link } from "gatsby"
import Popup from "reactjs-popup"
import { HiArrowNarrowRight } from "react-icons/hi"

const Openings = () => {
  const data = useOpeningQuery()
  const title = data.wpPage.title
  const Content = data.wpPage.content

  return (
    <>
      <div
        className="px-4 py-16 mx-auto max-w-[85rem] lg:px-8 lg:py-20 flex  clsOpeningContainer"
        id="team"
      >
        <div className=" w-[30%]  lg:mt-[40px] fixed clsOpeningContent">
          <h1 className="text-[40px]  text-[#000] font-bold">{title}</h1>
          <p
            className="text-[17px] pt-4"
            dangerouslySetInnerHTML={{ __html: Content }}
          />

          <div className="flex items-center">
            <div>
              <Link to="/about-us">
                <button class="bg-[#fff] mt-8 mr-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
                  About Us
                </button>
              </Link>
            </div>
            <div>
              <Link to="/our-team">
                <button class="bg-[#fff] mt-8 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
                  Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 ml-auto sm:grid-cols-2 lg:grid-cols-2 lg:w-[55%] h-fit lg:mt-[60px] clsScroll  scroll clsOpeningImageContainer">
          {data.allWpOpenings.nodes.map((list, index) => {
            return (
              <div className="rounded overflow-hidden max-h-[500px] clsOpeningImageContainerdiv">
                <div className="relative mb-4 rounded  overflow-hidden shadow-lg lg:pb-36 bg-[#f5f5f5] clsImgheight">
                  <img
                    className="absolute object-contain object-bottom w-[100%] h-full rounded"
                    src={list.featuredImage.node.sourceUrl}
                    alt="Person"
                  />
                </div>

                <div class="px-6 pb-4">
                  <div class="font-bold text-xl mb-2">{list.title}</div>

                  <div className="relative text-[17px]">
                    {list?.content?.length > 220 ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: list?.content.slice(0, 150),
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
                          Read More
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
                                class=" inline-flex justify-center items-center  bg-[#a31e22] mt-4 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border hover:border-[#000] text-[14px] "
                                href={list.openingdetails.applynow.url}
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
                      class="inline-block bg-[#ddd] odd:bg-[#d1d5db] even:bg-[#d8b4fe]   rounded-full px-[10px] py-[5px] text-[10px] font-bold text-[#000] mr-2 mb-2 uppercase"
                    >
                      {i.name}
                    </span>
                  ))}
                </div>

                <div class=" px-6 text-left pb-4 rounded-[2px]">
                  <a
                    class="clsApplybtn inline-flex justify-center mr-4 items-center  bg-[#a31e22] mt-4 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-[7px] px-[14px] border hover:border-[#000] text-[14px]"
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
