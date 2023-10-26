import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css"

const VanDetails = () => {

    const { id } = useParams();
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`http://51.20.64.107:8080/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data))
    }, [id])

    console.log(van)
    return (
        <section className='vansDetails-outer'>
            <NavLink
                to={`..`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to  vans</span></NavLink>
            <h1>Van Details</h1>
            {van ?
                <div className="vanDetails-inner">
                    <img className="van-image" alt={van.name} src={van.imgUrl} />
                    <div className="van-details">
                        <h2>{van.name}</h2>
                        <p>{van.description}</p>
                        <p className='details-price'>{van.price} <span>.00 LKR/day</span></p>
                        <p className='details-type'>{van.type}</p>
                        <NavLink
                            to={"/rent"}
                            className="rent-button">Rent Now !</NavLink>
                    </div>
                </div>

                : <CircularProgress />}

        </section>
    )
}

export default VanDetails