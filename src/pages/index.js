import React from "react"
import Carousel from "../components/Carousel/Carousel.js"
import ContactUs from "../components/ContactUs/ContactUs.js"
import Header from "../components/Header/Header.js"
import About from "../components/AboutUs/About.js"
import Footer from "../components/Footer/Footer.js"
import Gallery from "../components/Gallery/Gallery.js"

export default function index() {
  return (
    <>
      <Header />
      <Carousel />      
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  )
}
