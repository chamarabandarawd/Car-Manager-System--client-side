import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanPricing = () => {
const {van}=useOutletContext();

  return (
    <h4 className='pt-2 pb-2'>Price : <span>{van?.price} </span><span>.00 LKR/day</span></h4>
  )
}

export default VanPricing