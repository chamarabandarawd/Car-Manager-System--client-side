import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanInfo = () => {
  const {van}=useOutletContext()
  console.log(van)
  return (
    <>
    <h5>Name : <span>{van?.name}</span></h5>
    <p>Type : <span>{van?.type}</span></p>
    <p>Description :<span>{van?.description}</span></p>
    <p>Visibility: Public</p>

    </>
  )
}

export default VanInfo