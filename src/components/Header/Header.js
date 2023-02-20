import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../../images/webstix.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import closeIcon from "../../images/close-icon.png"

const Header = () => {
  // const { site, wpMenu } = useMenuQuery()

  // const menu = wpMenu.menuItems.nodes
  // let [open, setOpen] = useState(false)

  return (
    <div className=" shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Antonio] 
      text-gray-800"
        >
          <img src={Logo} alt="wdpl_logo" />
        </div>

        <div
          // onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <img src={closeIcon} name={open ? "close" : "menu"} className="w-8" /> */}
          <img src={closeIcon} className="w-8" />
        </div>

        {/* <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {menu.map(mainItem =>
            !mainItem.parentId ? (
              <li key={mainItem.id} className="md:ml-8 text-base md:my-0 my-7">
                <Link
                  to={mainItem.url}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 ? (
                  <ul>
                    {mainItem.childItems.nodes.map(childItem => (
                      <li
                        key={childItem.id}
                        className="md:ml-8 text-xl md:my-0 my-7"
                      >
                        <Link
                          to={childItem.url}
                          className="text-gray-800 hover:text-gray-400 duration-500"
                        >
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : null
          )}
        </ul> */}
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
