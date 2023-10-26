import React, { useEffect, useState } from 'react'
import "./styles.css"
import { Link, NavLink, useSearchParams } from 'react-router-dom'

const Vans = () => {

  const[searchParams,setSearchParams]=useSearchParams();

  const [vans, setVans] = useState([])

  //filtersection
  const typeFilter=searchParams.get("type")
  console.log(typeFilter)

  useEffect(() => {
    fetch("http://51.20.64.107:8080/vans")
      .then(res => res.json())
      .then(data => setVans(data))

  }, [])

  const displayVans=typeFilter ? vans.filter(van=>van.type === typeFilter) : vans
  const vanElements = displayVans?.map(({ id, name, price, imgUrl, type }) => (
    <div key={id} className='card'>
      <div class="overlay">
        <NavLink
          to={`/vans/${id}`}
          className="overflow-button">
          More Info.
        </NavLink></div>
      <img alt={name} src={imgUrl} />
      <p className='van-name'>{name}</p>
      <p className='van-price'>{price}<span>.00 LKR/day</span></p>
      <p className='van-type'>{type}</p>

    </div>
  ))

  const hanadleFilterChainge=(key,value)=>{
    setSearchParams(prevParam=>{
      if(value===null){
        prevParam.delete(key)
      }else{
        prevParam.set(key,value)
      }
      console.log(prevParam)
      return prevParam
    })
  }

  return (
    <section className='vans-outer'>
      <h1>Explore our van options</h1>
      <section className='d-flex gap-2'>
        <button
        className='btn btn-outline-primary'
        onClick={()=>hanadleFilterChainge("type","simple")}
        > Simple</button>
        <button
        className='btn btn-outline-primary'
        onClick={()=>hanadleFilterChainge("type","rugged")}
        > Rugged</button>
        <button
        className='btn btn-outline-primary'
        onClick={()=>hanadleFilterChainge("type","luxury")}
        > Luxury</button>
        {/* <button
        className='btn btn-outline-primary'
        onClick={()=>setSearchParams("type",null)}
        > Clear</button> */}
        {/* <Link 
          to={"?type=simple"}
          className='btn  btn-outline-primary'
        >Simple</Link>
        <Link 
          to={"?type=rugged"}
          className='btn btn-outline-primary'
        >rugged</Link>
        <Link 
          to={"?type=luxury"}
          className='btn btn-outline-primary'
        >Luxury</Link> */}
        <Link 
          to={""}
          className='btn btn-outline-primary'
        >Clear</Link>
      </section>
        <div className="cards-area">
          {vanElements}
        </div>
    </section>

  )
}

export default Vans