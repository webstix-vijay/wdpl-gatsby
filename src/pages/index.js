import React from "react"
import Header from "../components/Header/Header.js"

import Carousel from "../components/Carousel/Carousel.js"
// // // import AboutUsOne from "../components/AboutUs/AboutOne"
import AboutUsTwo from "../components/AboutUs/AboutTwo"

import ContactUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer.js"
import Homegallery from "../components/HomeGallery.js/Homegallery.js"

export default function index() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutUsTwo />
      <Homegallery />
      <ContactUs />
      <Footer />
    </>
  )
}
