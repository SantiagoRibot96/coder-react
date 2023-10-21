import { useState, useEffect } from "react";
import { getProductos, getUnaCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCat} = useParams();

    useEffect(() => {
        const funcionProductos = idCat ? getUnaCategoria : getProductos;

        funcionProductos(idCat)
            .then(res => setProductos(res))
            .catch(error => console.log(error));
    }, [idCat])

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer