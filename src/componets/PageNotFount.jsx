import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFount = () => {
  return (
    <div className='container d-flec justify-content-center align-content-center'>
    <h1>Soory, the page you are looking for was not found!</h1>
    <Link className="home-button" to={"/"}>Return to Home</Link>
    </div>
  )
}

export default PageNotFount