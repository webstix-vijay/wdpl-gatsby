import React from "react"
import { useOrganizationQuery } from "../../hooks/useOrganizationQuery"
import { Link } from "gatsby"

export default function OrganizationChart() {
  const data = useOrganizationQuery()
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <div>
      <div className="px-[1%]  container mx-auto" id="organization-chart">
        <img
          src={Image}
          alt="org-chart"
          className=" w-full object-fill pt-[100px] pb-[10px]"
        />
      </div>
      <div className="flex items-center justify-center pb-[70px]">
        <div>
          <Link to="/about-us">
            <button class="bg-[#fff] mt-4 mr-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
              About Us
            </button>
          </Link>
        </div>
        <div>
          <Link to="/careers">
            <button class="bg-[#fff] mt-4 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6 border border-black">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
