import React from "react"
import PropTypes from "prop-types"
import "typeface-inter"
import Header from "../components/Header"
import Chat from "../components/Chat"
import Footer from "../components/Footer"

import "fontsource-work-sans/400.css"
import "fontsource-montserrat"
import "fontsource-montserrat/700.css"
import "fontsource-montserrat/800.css"
import "fontsource-montserrat/900.css"
import "fontsource-libre-baskerville"

import "../styles/style.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Chat wa="https://wa.me/50660430841" me="http://m.me/estudioqbocr" />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
