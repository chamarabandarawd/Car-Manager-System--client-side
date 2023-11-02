import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
  return (
    <h1>There is an new error: {err}</h1>
  )
}

export default Error