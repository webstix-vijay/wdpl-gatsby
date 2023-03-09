import React from "react"
import Footer from "../components/Footer/Footer"
import GalleryDiscussion from "../components/Gallery/GalleryDiscussion"
import GalleryOuting from "../components/Gallery/GalleryOuting"
import Header from "../components/Header/Header"

export default function gallery() {
  return (
    <>
      <Header />
      <GalleryDiscussion />
      <GalleryOuting />
      <Footer />
    </>
  )
}
