import React from 'react'
import "./styles.css"
import { Link, NavLink, useSearchParams ,useLoaderData} from 'react-router-dom'
import { getVans } from '../../api'



export const loader=()=>{
  return getVans();
}


const Vans = () => {

  const[searchParams,setSearchParams]=useSearchParams();


  const vans=useLoaderData()
  console.log(vans)


  const typeFilter =searchParams.get("type")

  const displayVans= typeFilter ? vans?.filter(van=>van.type === typeFilter) : vans

  const vanElements = displayVans?.map(({ id, name, price, imgUrl, type }) => (
    <div key={id} className='card'>
      <div class="overlay">
        <NavLink
          to={`/vans/${id}`}
          state={{search:searchParams.toString()}}
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
      console.log("this",prevParam)
      return prevParam
    })
  }

  if(error){
    return <h1>There is an error : {error.message}</h1>
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
        {typeFilter? 
         <Link 
         to={""}
         className='btn btn-outline-primary'
       >Clear</Link> : null}
       
      </section>
        <div className="cards-area">
          {vanElements}
        </div>
    </section>

  )
}

export default Vans