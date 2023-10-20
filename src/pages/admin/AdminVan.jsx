import React, { useEffect, useState } from 'react'

import "./styles.css"
import { NavLink } from 'react-router-dom';

const vans=[1,2,3,4,5]
const AdminVan = () => {

    const[vans,setVans]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/vans")
          .then(res => res.json())
          .then(data => setVans(data))
    
      }, [])
      console.log(vans)

    return (
        <div className='container'>
            <div className='table-header'>
                <div className='cell-header'>Serial No.</div>
                <div className='cell-header'>Image</div>
                <div className='cell-header'>Name</div>
                <div className='cell-header'>Description</div>
                <div className='cell-header'>Price</div>
                <div className='cell-header'>Option</div>
            </div>
            {vans?.map(({id,name,imgUrl,price,description,type})=>(
                <NavLink
                to={`vans/:${id}`}>

            <div className='table-header' key={id}>
                <div className='cell'>{id}</div>
                <div className='cell'><img alt={name} src={imgUrl}/></div>
                <div className='cell'>{name}</div>
                <div className='cell'>{description}</div>
                <div className='cell'>{price}<span>.00 LKR/day</span></div>
                <div className='cell'>Option</div>
            </div>
                </NavLink>

            ))}
        </div>
    )
}

export default AdminVan