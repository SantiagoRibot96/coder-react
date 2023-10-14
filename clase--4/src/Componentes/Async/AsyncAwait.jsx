import { useEffect, useState } from 'react';


const misProductos = [
    {id: 1, nombre: "mouse", precio: 1500},
    {id: 2, nombre: "teclado", precio: 1000},
    {id: 3, nombre: "monitor", precio: 10000}
];

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000);
    })
}

const AsyncAwait = () => {
    const [productos, setProductos] = useState([]);

    const pedirDatos = async() => {
        const inventario = await getMisProductos();
        setProductos(inventario);
    }

    pedirDatos();

    return (
        <div>
            <h2>Mis Productos usando AsyncAwait</h2>

            {
                productos.map((item) => {
                    return(
                        <div key={item.id}>
                            <p> {item.nombre} </p>
                            <p> {item.precio} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AsyncAwait