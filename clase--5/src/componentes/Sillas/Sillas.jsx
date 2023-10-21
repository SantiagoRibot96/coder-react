import React from 'react'
import { useParams } from 'react-router-dom'

const Sillas = () => {
  
  const {tipo} = useParams();

  return (
    <div>
      <h2>Seccion sillas {tipo}</h2>
    </div>
  )
}

export default Sillas