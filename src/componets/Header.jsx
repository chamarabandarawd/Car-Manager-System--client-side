import React from 'react'
import { NavLink } from 'react-router-dom'

import "./styles.css"

const Header = () => {
    return (
        <header className='my-header'>
            <div className="logo">TravelFlex</div>
            <div className="my-links">
                <NavLink
                    to={"."}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >Home</NavLink>
                <NavLink
                    to={"/host"}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >Host</NavLink>
                <NavLink
                    to={"/about"}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >About</NavLink>
                <NavLink
                    to={"vans"}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >Vans</NavLink>
                <NavLink
                    to={"/cars"}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >Cars</NavLink>
                <NavLink
                    to={"/admin"}
                    className={({isActive})=>isActive ? "nav-link-active" : "nav-link"}
                >Admin Dashboard</NavLink>
            </div>
        </header>
    )
}

export default Header