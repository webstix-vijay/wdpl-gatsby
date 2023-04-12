import React, { useState } from "react"
import Footer from "../components/Footer/Footer"

import GalleryOuting from "../components/Gallery/GalleryOuting"
import Header from "../components/Header/Header"
import { Tabs, Tab } from "@material-ui/core"
import { Link } from "gatsby"
import GalleryOffice from "../components/Gallery/GalleryOffice"
import { useOfficeQuery } from "../hooks/useOfficeQuery"
import GalleryTrip from "../components/Gallery/GalleryTrip"
import GalleryCelebration from "../components/Gallery/GalleryCelebration"
import GalleryDiscussions from "../components/Gallery/GalleryDiscussions"

export default function Gallery() {
  const data = useOfficeQuery()
  const title = data.wpPage.blocks[0].originalContent
  const Content = data.wpPage.blocks[2].originalContent

  const [value, setValue] = useState(0)
  const handleTabs = (e, val) => {
    console.warn(val)
    setValue(val)
  }

  return (
    <>
      <Header />

      <div className=" max-w-[85rem] mx-auto  lg:px-7 min-h-[750px] flex clsGalleryContainer ">
        <div className="w-[32%] mb-10 md:mb-16  pr-[35px] mt-[7rem] clsGalleryContentdiv">
          <h2
            class="text-3xl font-bold mb-6 text-[#000] text-[40px] capitalize pt-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p
            className="leading-7 text-[17px] xl:w-[88%] "
            dangerouslySetInnerHTML={{ __html: Content }}
          ></p>
          <Link to="/careers">
            <button className="bg-[#fff]  mt-6 hover:bg-[#000] text-[#000] font-semibold hover:text-[#fff] py-2 px-6     border border-black">
              Join Us
            </button>
          </Link>
        </div>
        <div className="w-[70%] clsGalleryImages">
          {" "}
          <div className="lg:mt-[120px] md:mt-[60px] max-w-[85rem] mx-auto  flex justify-center clsTabs">
            <Tabs
              value={value}
              onChange={handleTabs}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Celebration"></Tab>
              <Tab label="Office"></Tab>
              <Tab label="Outing"></Tab>
              <Tab label="Trips"></Tab>
              <Tab label="Discussions"></Tab>
            </Tabs>
          </div>
          <TabPanel value={value} index={0} className="mt-[400px]">
            <GalleryCelebration />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <GalleryOffice />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <GalleryOuting />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <GalleryTrip />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <GalleryDiscussions />
          </TabPanel>
        </div>
      </div>
      <Footer />
    </>
  )
}

function TabPanel(props) {
  const { children, value, index } = props
  return <div>{value === index && <h1>{children}</h1>}</div>
}
