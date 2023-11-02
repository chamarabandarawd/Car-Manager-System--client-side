import React from 'react'
import { useRouteError } from 'react-router-dom'

const MyError = () => {
    const err=useRouteError()
  return (
    <section className='container'>

        <h1 >There is an new error: {err.message}</h1>
    </section>
  )
}

export default MyError