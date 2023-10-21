import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css"

const AdminHeader = () => {
  return (
    <header className='my-header'>
        <NavLink
        to={'.'}
        end
        className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
        > Vans
        </NavLink>
        <NavLink
        to={'cars'}
        className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
        > Cars
        </NavLink>
        <NavLink
        to={'addVehicle'}
        className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
        > Add Vehicle
        </NavLink>
    </header>
  )
}

export default AdminHeader