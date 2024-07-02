import React from "react"
import Meta from "./seo/Meta"

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
