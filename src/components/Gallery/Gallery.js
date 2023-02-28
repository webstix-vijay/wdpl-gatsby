import React from "react"

export default function Gallery() {
  return (
    <section class="relative  overflow-hidden py-10" id="gallery">
      <div class="container mx-auto">
        <div class="w-full lg:w-1/2 ">
          <div class="mb-12  lg:mb-0">
            <span class="text-primary mb-4 block text-base font-semibold"></span>
            <h2 class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              Gallery
            </h2>
            <div className="bg-gray-400 h-10 w-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
