/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/layout.css"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Menubar from "./menubar"

const THEME = createMuiTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

const Layout = ({ children }) => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Menubar />
      <main>{children}</main>
      {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
