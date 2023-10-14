import React from 'react'

const Map = () => {

    const productos = [
        {id:1, nombre: "PC gamer", precio: 1000},
        {id:2, nombre: "Teclado gamer", precio: 100},
        {id:3, nombre: "Mouse gamer", precio: 200},
        {id:4, nombre: "Silla gamer", precio: 150}
    ]

    return (
        <div>
            <h2>Productos gamer: </h2>
            <ul>
                {productos.map((item) => (
                    <li key={item.id}>
                        <span> {item.nombre} </span>
                        <span> {item.precio}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Map