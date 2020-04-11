/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// import "./compi_layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer
        style={{
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 30,
          width: "90%",
          maxWidth: 760,
          textAlign: "right",
        }}
      >
        © 2020
        {` `}
        <a
          href="http://cllctv-jp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          cllctv.
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
