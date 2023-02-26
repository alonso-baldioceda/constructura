import React, { useState } from "react"
import classNames from "classnames"
import { graphql, Link, useStaticQuery } from "gatsby"

import Logo from "./../images/svg/logo.svg"

import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="bg-gray-100 shadow">
      <div className="container py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-black text-gray-900 flex items-center"
          >
            <Logo className="h-10 w-10 mr-4" />
            Estudio Qbo
          </Link>
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars className="h-6 w-auto text-gray-900 fill-current" />
          </button>
          <div className="hidden sm:flex">
            {site.data.menu.map((item, index) => {
              const isFirst = index === 0

              return (
                item.name !== "Home" && (
                  <Link
                    key={`menu-desktop-link-${index}`}
                    index={`menu_desktop_link${index}`}
                    className={classNames(
                      "tracking-wide font-black text-base sm:text-base uppercase block border-transparent text-gray-900 hover:text-red-700  transition duration-150 ease-out",
                      { "ml-6 sm:ml-8": !isFirst },
                      { "ml-0": isFirst }
                    )}
                    activeClassName="border-white text-gray-900 hover:border-white"
                    to={`/${item.to}/`}
                  >
                    {item.name}
                  </Link>
                )
              )
            })}
          </div>
        </div>
        <MenuMobile
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          links={site.data.menu}
        />
      </div>
    </div>
  )
}

export default Header
