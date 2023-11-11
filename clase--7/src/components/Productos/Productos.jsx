import { useState, useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";

import { db } from "../../services/config";

const Productos = () => {
    
    const [productos, setProductos] = useState();

    useEffect(() => {

        const misProductos = query(collection(db, "inventario"));

        getDocs(misProductos)
            .then(res => {
                setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            })
    }, [productos]);

    return (
        <>
            <h2>MIS PRODCUTOS IMPORTADOS</h2>

            <div className="productos-container">
                {
                    productos.map( producto => (
                        <div className="productos-card">
                            <h3> {producto.nombre} </h3>
                            <p> {producto.precio} </p>
                            <p> {producto.stock} </p>
                            <button> COMPRAR </button>
                        </div>
                    ))
                }
            </div>   
        </>
  )
}

export default Productos