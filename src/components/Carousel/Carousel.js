import React, { useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper"

function Carousel() {
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
          <section class="bg-[#eee] dark:bg-gray-900 mt-[80px] h-[75vh]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"></h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="bg-[#eee] dark:bg-gray-900 mt-[80px] h-[75vh]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"></h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="bg-[#eee] dark:bg-gray-900 mt-[80px] h-[75vh]">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"></h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"></p>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Carousel

// import React, { useState } from "react"
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
// import { useHomeBannerQuery } from "../../hooks/useHomebanner"

// function Carousel() {
//   const data = useHomeBannerQuery()
//   const slides = data.wpPage.homeBanner.homegallery
//   console.log(slides)

//   // const slides = [
//   //   {
//   //     url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//   //   },

//   //   {
//   //     url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
//   //   },
//   //   {
//   //     url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
//   //   },
//   // ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
//     setCurrentIndex(newIndex)
//   }

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1
//     const newIndex = isLastSlide ? 0 : currentIndex + 1
//     setCurrentIndex(newIndex)
//   }

//   const goToSlide = slideIndex => {
//     setCurrentIndex(slideIndex)
//   }

//   return (
//     <div className="max-w-100 h-[755px] w-full m-auto pt-16 px-0 fixed group">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].sourceUrl})` }}
//         className="w-full h-full bg-center bg-cover duration-500"
//       ></div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Carousel
