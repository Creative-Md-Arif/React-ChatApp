/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate, } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react";


const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice.user);
  
  useEffect(() => {
    if(!user){
    return navigate("/login");
    } 
},[])

  

  // console.log(user);
  return (
    <div className="flex">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
