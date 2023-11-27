import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Footer from "./Footer"





const Layout = () => {
  
  return (
    <Fragment>
    <div className="container">
      <Outlet/>
    </div>
    <Footer/>
    
    </Fragment>
    )
  }
  

  
  export default Layout
  