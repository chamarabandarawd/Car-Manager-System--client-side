import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import "./styles.css"
import { NavLink } from 'react-router-dom';

const HostVans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("http://51.20.64.107:8080/vans/host")
            .then(res => res.json())
            .then(data => setVans(data))

    }, [vans])
    return (
        <section className='container'>
            {vans.map(({ id, imgUrl, name, price }) => (
                <NavLink
                to={`/host/vans/${id}`}
                key={id}
                className={({isActive})=>isActive ? "nav-link-active" : "nav-link-item"}
                > 
                <Row className='bg-light mt-2 rounded my-row'>
                    <img className="mr-3 col-3 rounded my-img" src={imgUrl} alt={name} />
                    <div className="media-body col-6 my-vanDetails">
                        <h5 className="mt-0">{name}</h5>
                        <p>{price} <span>.00 LKR/day</span></p>
                    </div>
                </Row>
                </NavLink>
            ))}
        </section >
    )
}

export default HostVans