import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import chart from "../images/chart.jpg"

export default function organizationChart() {
  return (
    <>
      <Header />
      <div
        className="px-[10%] pt-[7%] container mx-auto "
        id="organization-chart"
      >
        <img src={chart} className="h-[580px] w-full object-contain" />
      </div>
      <Footer />
    </>
  )
}
