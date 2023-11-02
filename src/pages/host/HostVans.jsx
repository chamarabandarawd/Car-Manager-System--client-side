import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import "./styles.css"
import { NavLink, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils/utils';

export async function loader(){
    await requireAuth();
    return getHostVans()
}

const HostVans = () => {

    const vans = useLoaderData();


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