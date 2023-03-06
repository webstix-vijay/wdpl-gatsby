import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import ReactReadMoreReadLess from "react-read-more-read-less"

export default function About() {
  const data = useAboutQuery()
  console.log(data)
  const title = data.wpPage.title
  const Content = data.wpPage.aboutus.aboutus
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <div class="container my-24  mx-auto pt-12 md:px-3">
      <section class="mb-32 text-gray-800">
        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-12/12 md:pb-8 lg:w-6/12 px-3 lg:px-2">
            <h2 class="text-3xl font-bold mb-6 text-[#a31e22] text-[40px] uppercase pt-4">
              {title}
            </h2>
            <div class="flex items-start rounded-xl bg-white  lg:w-[90%] ">
              <div class="">
                <p className="leading-7 text-[17px]">
                  <ReactReadMoreReadLess
                    charLimit={340}
                    readMoreText={"Read More "}
                    readLessText={"Read Less "}
                  >
                    {data.wpPage.aboutus.aboutus}
                  </ReactReadMoreReadLess>
                </p>
              </div>

              <div class="ml-4"></div>
            </div>
          </div>
          <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 sm:mb-[0px] w-full md:w-12/12 lg:w-6/12 px-3 pt-1  lg:px-6">
            <img src={Image} />
          </div>
        </div>
      </section>
    </div>
  )
}
