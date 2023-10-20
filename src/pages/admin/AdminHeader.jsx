import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css"

const AdminHeader = () => {
  return (
    <header className='my-header'>
        <NavLink
        to={'.'}
        className={"my-link"}
        > Vans
        </NavLink>
        <NavLink
        to={'cars'}
        className={"my-link"}
        > Cars
        </NavLink>
    </header>
  )
}

export default AdminHeader