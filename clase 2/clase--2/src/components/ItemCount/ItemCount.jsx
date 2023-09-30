//import React from 'react'
import { useState } from "react" //useState es un Hook que retorna un array con dos elementos: el estado actual y una funcion que actualiza ese estado

//Trabajamos con el estado del componente. Para utilizarse se usan Hooks, que ya vienen incorporados en la libreria React.

const ItemCount = (props) => {

    const [contador, setContador] = useState(1);//a useState le tengo que pasar el valor inical del contador. Depende el caso el numero que le pongo

    const incrementar = () => {
        if(contador < props.stock){
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <button onClick={incrementar}> + </button>
            <p> {contador} </p>
            <button onClick={decrementar}> - </button>
        </div>
    )
}

export default ItemCount