import { Link } from "gatsby"
import React from "react"
import Collage from "../../images/collage.jpg"

export default function Homegallery() {
  return (
    <>
      <section class="max-w-[85rem] mx-auto mt-[6rem] lg:px-6 mb-[8rem] ">
        <div class="">
          <div class="ml-3">
            <h2 class="text-3xl font-bold mb-8 text-[#a31e22] text-[36px]">
              GALLERY
            </h2>
            <div className="bg-[#E2E4E3]	 h-[480px] ">
              <div className="flex justify-start items-center h-full pb-6 w-[100%] px-5">
                <div>
                  <p className="text-[22px] leading-7 font-bold">
                    "Sometimes you will never know the true value of a moment
                    until it becomes a memory."
                  </p>
                  <Link to="/gallery">
                    <button class="bg-[#a31e22] mt-6 hover:bg-[#fff] text-[#fff] font-semibold hover:text-[#a31e22] py-2 px-4 border hover:border-black">
                      See More
                    </button>
                  </Link>
                </div>
                <div className=" flex justify-center items-center pb-6 w-[100%]">
                  <img src={Collage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
