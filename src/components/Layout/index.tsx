import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

interface LayOutProps {}

const LayOut : React.FC<LayOutProps> = () : JSX.Element => {
  return <div className="layOut">
    <NavBar/>
    <Outlet />
    <Footer />
  </div>
}

export default LayOut