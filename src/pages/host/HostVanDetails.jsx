import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const HostVanDetails = () => {
  const { id } = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8080/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data))
  }, [id])
  return (
    <section className='container'>

      <Row className='bg-light  my-row'>
        <NavLink

          to={`..`}
          relative="path"
          className="back-button pt-3"
        >&larr; <span>Back to  vans</span></NavLink>

        <h2 className='pt-2 pb-2' >Van Details</h2>

        <img className="mr-3 col-3 rounded my-img" src={van?.imgUrl} alt={van?.name} />
        <div className="media-body col-6 my-vanDetails">
          <h5 className="mt-0">{van?.name}</h5>
          <p>{van?.price} <span>.00 LKR/day</span></p>
        </div>
      </Row>
      <Row className='bg-light'>
        <div className="  my-internal-header">
          <NavLink
            end
            to={`/host/vans/${id}`}
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          >Details
          </NavLink>
          <NavLink
            to={`/host/vans/${id}/pricing`}
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          >Pricing
          </NavLink>
          <NavLink
            to={`/host/vans/${id}/photos`}
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
          >Photos
          </NavLink>
        </div>
      </Row>
      <Row className='bg-light  my-internal-header '>
        <Outlet context={{ van }} />
      </Row>


    </section>
  )
}

export default HostVanDetails