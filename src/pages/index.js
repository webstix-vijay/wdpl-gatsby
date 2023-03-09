import React from "react"
import Carousel from "../components/Carousel/Carousel.js"
import Header from "../components/Header/Header.js"
// import AboutUsOne from "../components/AboutUs/AboutOne"
import AboutUsTwo from "../components/AboutUs/AboutTwo"
import Footer from "../components/Footer/Footer.js"
import ContactUs from "../components/ContactUs/ContactUs"
import { Script } from "gatsby"

export default function index() {
  return (
    <>
      <Header />
      <Carousel />
      <AboutUsTwo />
      <ContactUs />
      <Footer />
    </>
  )
}
