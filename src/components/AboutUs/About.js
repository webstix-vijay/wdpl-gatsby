import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import ReactReadMoreReadLess from "react-read-more-read-less"

export default function About() {
  const data = useAboutQuery()
  console.log(data)
  const Content = data.wpPage
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <section class="relative  overflow-hidden py-28  " id="about">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="mb-12 max-w-[570px] lg:mb-0">
              <span class="text-primary mb-4 block text-base font-semibold"></span>
              <h2 class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                {data.wpPage.title}
              </h2>
              <p class="text-body-color mb-9 text-base leading-relaxed">
                <ReactReadMoreReadLess
                  charLimit={380}
                  readMoreText={"Read More ▼"}
                  readLessText={"Read Less ▲"}
                >
                  {data.wpPage.aboutus.aboutus}
                </ReactReadMoreReadLess>
              </p>
              <div class="mb-8 flex w-full max-w-[370px]"></div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 xl:w-6/12">
            <div class="relative  sm:p-10">
              <div>
                <img src={Image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
