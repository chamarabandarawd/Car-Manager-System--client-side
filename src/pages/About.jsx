import React from 'react'
import "./styles.css"
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <section className='about-outer'>
            <h1>Don’t squeeze in a sedan when you could relax in a van or car.</h1>
            <div className='my-para'>
                <p>Our mission is to enliven your road trip with the perfect travel vehical rental.
                    Our vehicals are recertified before each trip to ensure
                    your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of #TravelFlex enthusiasts
                    who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>

            <div>

                <h3>Your destination is waiting.</h3>
                <h3>Your van is ready.</h3>
            </div>
            <div className="buttons">
                <NavLink
                    to="/vans"
                    className="home-button"
                >Explore our Vans</NavLink>
                <NavLink
                    to="/cars"
                    className="home-button"
                >Explore our Cars</NavLink>
            </div>
        </section>
    )
}

export default About