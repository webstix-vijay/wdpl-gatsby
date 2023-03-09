import { Link } from "gatsby"
import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQueryTwo"
// import ReactReadMoreReadLess from "react-read-more-read-less"

export default function AboutTwo() {
  const data = useAboutQuery()
  console.log(data)
  const title = data.wpPage.blocks[0].originalContent
  const Content = data.wpPage.blocks[2].originalContent
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <section class="container my-16  mx-auto pt-0 md:px-3">
      <div class="flex flex-wrap">
        <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-12/12 md:pb-8 lg:w-6/12 px-3 lg:px-2">
          <h2
            class="text-3xl font-bold mb-6 text-[#a31e22] text-[40px] uppercase pt-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div class="flex items-start rounded-xl bg-white  lg:w-[90%] ">
            <div class="">
              <p
                className="leading-7 text-[17px]"
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
          <Link to="/about-us">
            <button class="bg-transparent mt-6 hover:bg-[#a31e22] text-[#a31e22] font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
              Learn More
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