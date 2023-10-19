import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./styles.css"

const VanDetails = () => {

    const { id } = useParams();
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data))
    }, [])

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

                : <h1>Loading...</h1>}

        </section>
    )
}

export default VanDetails