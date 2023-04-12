import { Link } from "gatsby"
import React from "react"
import { useHomeGallery } from "../../hooks/useHomeGallery"

export default function Homegallery() {
  const data = useHomeGallery()

  const galleryImages = data.wpGallery.gallery.photos
  const slice = galleryImages

  return (
    <>
      <div className="clsHomeGallerybg">
        <section class="max-w-[85rem] mx-auto mt-[6rem] lg:px-6 clsHomeGalleryMain   ">
          <div class="">
            <div class="ml-3">
              <h2 class="text-3xl font-bold mb-8 text-[#000] text-[36px]">
                Gallery
              </h2>
              <div className="	h-[480px] ">
                <div className="flex justify-start items-start h-full pb-6 w-[100%]  clshomeGalleryContainer  ">
                  <div className="w-[40%] pr-12 h-full clsHomeGallerydivOne pt-[120px]">
                    <p
                      className="text-[22px] leading-7 font-bold sidekick blockquote"
                      // dangerouslySetInnerHTML={{ __html: Content }}
                    >
                      {" "}
                      Sometimes you will never know the true value of a moment
                      until it becomes a memory.
                    </p>
                    <div className="ml-[30px]">
                      <Link to="/gallery">
                        <button class="bg-transparent mt-6 hover:bg-[#000] text-[#000]] font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent">
                          See More
                        </button>
                      </Link>
                    </div>
                    <div className="pt-[82px] clsHomeGalleryImg">
                      {/* <img src={data.wpGallery.featuredImage.node.sourceUrl} /> */}
                    </div>
                  </div>

                  <div className="galleryWrap clsHomeGallery container mx-auto pt-2 w-[60%] mt-[100px] pl-[20px]">
                    {slice &&
                      slice.map((slide, index) => {
                        return (
                          <section class="">
                            <div class="flex flex-wrap -mx-4 ">
                              <div className="single md:w-1/4 " key={index}>
                                <img
                                  className=" shadow-md "
                                  src={slide.sourceUrl}
                                  alt=""
                                />
                              </div>
                            </div>
                          </section>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
