import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar_vertical from '../../components/Navigation/navbar_vertical';

const LayoutMain = () => {
  return (
    <>
        <Navbar_vertical/>
        <Outlet/>
    </>
  )
}

export default LayoutMain


