import { useEffect } from "react"
import { useState } from "react"

const Categorias = () => {

    const [categoria, setCategoria] = useState("");

    useEffect(() => {
        document.title = `${categoria}`;
    }, [categoria]);

    const handlerCategorias = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <div>
            <h2>Categoria de productos</h2>
            <button onClick={() => handlerCategorias("Frutas")}>Frutas</button>
            <button onClick={() => handlerCategorias("Lacteos")}>Lacteos</button>
            <button onClick={() => handlerCategorias("Carnes")}>Carnes</button>
            <button onClick={() => handlerCategorias("Limpieza")}>Limpieza</button>
        </div>
    )
}

export default Categorias