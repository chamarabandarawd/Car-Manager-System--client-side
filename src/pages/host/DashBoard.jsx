import React from 'react'
import { requireAuth } from '../../utils/utils';

export async function loader(){
  // await requireAuth();
  return null
}

const DashBoard = () => {
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard