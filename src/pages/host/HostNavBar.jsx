import React from 'react'
import { NavLink } from 'react-router-dom'

const HostNavBar = () => {
    return (
        <header className='my-links'>
            <NavLink
                to={"."}
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >Dashboard</NavLink>
            <NavLink
                to={"income"}
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >Income</NavLink>
            <NavLink
                to={"review"}
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >Review</NavLink>
        </header>
    )
}

export default HostNavBar