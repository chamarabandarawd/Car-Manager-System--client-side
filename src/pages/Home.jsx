import React from 'react'
import "./styles.css"
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <section className='home-outer'>
      <h1>You got the travel plans, we got the travel wheels.</h1>
      <p>Embrace Adventure with #TravelFlex.
         Rent the Ideal Vehicle for Your Perfect Road Trip.</p>
      <div className="buttons">
        <NavLink
        to="/vans"
        className="home-button"
        >Find Your Van</NavLink>
        <NavLink
        to="/cars"
        className="home-button"
        >Find Your Car</NavLink>
      </div>
    </section>
  )
}

export default Home