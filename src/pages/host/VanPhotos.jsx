import React from 'react'
import { useOutletContext } from 'react-router-dom'

const VanPhotos = () => {
  const { van } = useOutletContext()
  return (
    <>
    <img className='col-3' src={van?.imgUrl} alt={van?.name} />
    </>
  )
}

export default VanPhotos