import React from 'react'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>Precio: ${precio}.-</p>
        <button>Ver detalles</button>
    </div>
  )
}

export default Item