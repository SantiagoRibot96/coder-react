import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({ id, nombre, stock, precio, img }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarAlCarrito} = useContext(CarritoContext);


        const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);



        const item = ({id, nombre, precio});
        agregarAlCarrito(item, cantidad);
    }

    return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p>Guitarra de primera calidad, ideal para estudio y concierto. Materiales de primera calidad y lista para su envio inmediato.</p>


    {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
    }



    </div>
    )
}

export default ItemDetail