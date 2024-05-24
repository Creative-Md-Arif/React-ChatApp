import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"


const Layout = () => {
  return (
    <div className="flex">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
