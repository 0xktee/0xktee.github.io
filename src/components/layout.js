/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/layout.scss"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Menubar from "./menubar"

const THEME = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: `'Airbnb Cereal App', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <MuiThemeProvider theme={THEME}>
        <Menubar />
        <main>{children}</main>

        <footer>
          <div className="footer-heart">
            Made with
            <span role="img" aria-label="green-heart" className="emoji">
              &nbsp;💚&nbsp;
            </span>
            by&nbsp;
            <a href="https://github.com/knwch" rel="noreferrer" target="_blank">
              &nbsp;t.&nbsp;
            </a>
          </div>
        </footer>
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
