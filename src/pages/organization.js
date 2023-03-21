import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import chart from "../images/team-board-1b.jpg"

export default function organizationChart() {
  return (
    <>
      <Header />
      <div>
        <div className="px-[1%]  container mx-auto" id="organization-chart">
          <img
            src={chart}
            className=" w-full object-fill pt-[100px] pb-[80px]"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
