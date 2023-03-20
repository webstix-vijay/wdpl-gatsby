import { Link } from "gatsby"
import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
// import ReactReadMoreReadLess from "react-read-more-read-less"

export default function AboutOne() {
  const data = useAboutQuery()
  const title = data.wpPage.blocks[0].originalContent
  const Content = data.wpPage.blocks[2].originalContent
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <section class="max-w-[85rem] mx-auto mt-[9rem] lg:px-6">
      <div class="flex flex-wrap">
        <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-12/12 md:pb-8 lg:w-6/12 px-3 lg:px-2">
          <h2
            class="text-3xl font-bold mb-6 text-[#a31e22] text-[40px] uppercase pt-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div class="flex items-start rounded-xl bg-white  lg:w-[90%] ">
            <div class="">
              <p
                className="leading-7 text-[17px] xl:w-[88%]"
                dangerouslySetInnerHTML={{ __html: Content }}
              >
                {/* <ReactReadMoreReadLess
                    charLimit={340}
                    readMoreText={"Read More "}
                    readLessText={"Read Less "}
                  >
                    {data.wpPage.aboutus.aboutus}
                  </ReactReadMoreReadLess> */}
              </p>
            </div>
          </div>
          <Link to="/our-team">
            <button className="bg-[#a31e22] mr-5 mt-6 hover:bg-[#fff] text-[#fff] font-semibold hover:text-[#a31e22] py-2 px-4 border hover:border-black">
              Our Team
            </button>
          </Link>
          <Link to="/careers">
            <button class="bg-[#a31e22] mt-6 hover:bg-[#fff] text-[#fff] font-semibold hover:text-[#a31e22] py-2 px-4 border hover:border-black">
              Join Us
            </button>
          </Link>
        </div>

        <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 sm:mb-[0px] w-full md:w-12/12 lg:w-6/12 px-3 pt-1  lg:px-6">
          <img src={Image} />
        </div>
      </div>
    </section>
  )
}
