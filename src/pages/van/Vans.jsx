import React, { useEffect, useState } from 'react'
import "./styles.css"
import { NavLink } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/vans")
      .then(res => res.json())
      .then(data => setVans(data))

  }, [])
  const vanElements = vans?.map(({ id, name, price, imgUrl,type }) => (
    <div key={id} className='card'> 
      <div class="overlay">
        <NavLink 
        to={`/vans/${id}`}
        className="overflow-button">
          More Info.
        </NavLink></div>
      <img alt={name} src={imgUrl}/>
      <p className='van-name'>{name}</p>
      <p className='van-price'>{price}<span>.00 LKR/day</span></p>
      <p className='van-type'>{type}</p>
     
    </div>
  ))

  return (
    <section className='vans-outer'>
      <h1>Explore our van options</h1>
      <div className="cards-area">
        {vanElements}
      </div>
    </section>
  )
}

export default Vans