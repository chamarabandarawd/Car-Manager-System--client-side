import React from 'react'
import { NavLink, redirect } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import "./styles.css"

const Header = () => {
const fackLogout=()=>{
    localStorage.removeItem("loggedin")
    return redirect("/")
}

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
                <button className='nav-link' onClick={()=>fackLogout()}><LogoutIcon/></button>
            </div>
        </header>
    )
}

export default Header