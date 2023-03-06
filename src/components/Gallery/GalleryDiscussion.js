import React from "react"
import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

import "../Gallery/gallery.css"
import { useDiscussionQuery } from "../../hooks/useDiscussionQuery"

const GalleryDiscussion = () => {
  const data = useDiscussionQuery()
  console.log(data)
  const galleryImages = data.wpGallery.gallery.photos
  const title = data.wpGallery.title
  const Content = data.wpGallery.content

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  // Load more functionality
  const [noOfElements, setnoOfElements] = useState()
  const loadmore = () => {
    setnoOfElements(noOfElements + noOfElements)
  }
  const slice = galleryImages.slice(0, noOfElements)

  const handleOpenModal = index => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <>
      <div>
        {openModal && (
          <div className="sliderWrap">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
            />
            <div className="fullScreenImage">
              <img src={galleryImages[slideNumber].sourceUrl} alt="" />
            </div>
          </div>
        )}

        {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

        <div className="mt-28 text-center container mx-auto px-4">
          {" "}
          <h1
            dangerouslySetInnerHTML={{ __html: Content }}
            class="text-3xl font-bold  mb-6 text-[#a31e22] text-[40px] uppercase gallerytitle"
          />
        </div>

        <div className="galleryWrap container mx-auto px-4">
          <div className="mt-16  px-4 w-full">
            <h2 class="text-3xl font-bold  text-[#000] text-[30px] uppercase gallerytitle">
              {title}
            </h2>
          </div>
          {slice &&
            slice.map((slide, index) => {
              return (
                <section class="py-4 px-4">
                  <div class="flex flex-wrap -mx-4 -mb-8">
                    <div
                      className="single md:w-1/4 px- mb-2"
                      key={index}
                      onClick={() => handleOpenModal(index)}
                    >
                      <img
                        className="rounded shadow-md "
                        src={slide.sourceUrl}
                        alt=""
                      />
                    </div>
                  </div>
                </section>
              )
            })}
        </div>

        {/* <button
          onClick={() => loadmore()}
          className=" mt-5 py-3 px-5 bg-blue-700 text-white text-center rounded-lg"
        >
          Load More
        </button> */}
      </div>
    </>
  )
}

export default GalleryDiscussion