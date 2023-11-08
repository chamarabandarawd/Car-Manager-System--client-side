import React from 'react'
import { requireAuth } from '../../utils/utils';

export async function loader(){
  await requireAuth();
  return null
}

const Income = () => {
  return (
    <div>Income</div>
  )
}

export default Income
