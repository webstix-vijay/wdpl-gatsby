import React from "react"
import Header from "../components/Header/Header"
import chart from "../images/chart.jpg"

export default function organizationChart() {
  return (
    <>
      <Header />
      <div className="px-20 py-20" id="organization-chart">
        <img src={chart} />
      </div>
    </>
  )
}
