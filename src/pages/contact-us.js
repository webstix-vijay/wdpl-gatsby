import React from "react"
import Header from "../components/Header/Header"
import ContactUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer"

export default function contact() {
  return (
    <>
      <Header />
      <div className="clsContactSinglePage">
        <ContactUs />
      </div>
      <Footer />
    </>
  )
}
