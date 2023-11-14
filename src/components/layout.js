/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { GlobalStyles } from "../styles/GlobalStyles"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyles/>
      <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout
