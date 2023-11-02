import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css"
import { getVan } from '../../api';

export const loader = ({params})=>{
    console.log(params)
    return getVan(params.id)
}

const VanDetails = () => {


    const { id } = useParams();
    const location=useLocation();
    const [van, setVan] = useState(null)

    useEffect(() => {


    }, [id])



    const search=location.state && location.state.search || ""
    const type=location.state && location.state.search || "all"
    return (
        <section className='vansDetails-outer'>
            <NavLink
                to={`..?${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></NavLink>
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