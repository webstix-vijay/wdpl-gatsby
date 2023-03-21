import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper"
import { useHomeBannerQuery } from "../../hooks/useHomebanner"

function Carousel() {
  const data = useHomeBannerQuery()
  console.log(data)
  const Content = data.wpPage.content
  const BannerImg = data.wpPage.featuredImage.node.localFile.publicURL
  console.log(BannerImg)

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="max-w-[85rem] mx-auto mt-[6rem] mb-[3rem]  lg:px-8  h-[full] clsHomeBanner">
            <div class="xl:flex items-center sm:block">
              <div className="xl:w-[56%] sm:w-[100%]">
                <div
                  className="text-left font-bold text-gray-800 lg:text-[40px] md:text-[35px] lg:leading-tight clsHomeBannertitle"
                  dangerouslySetInnerHTML={{ __html: Content }}
                />

                <div class="xl:mt-7 w-full sm:inline-flex pb-[30px] pt-[10px]">
                  <Link to="/careers">
                    <button
                      class="inline-flex justify-center items-center  bg-[#a31e22] mt-6 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-2 px-5 border hover:border-[#000]"
                      href="#"
                    >
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
              <div class=" ml-4  xl:w-[52%] md:-w-[100%] md:pt-[50px]">
                <img class="w-full rounded-md" src={BannerImg} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Carousel
