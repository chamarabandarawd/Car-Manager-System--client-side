import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
    <HostNavBar/>
    <Outlet/>
    </>
  )
}

export default HostLayout