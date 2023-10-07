import { useState } from "react";
import { useEffect } from "react";

const Contador = () => {
    
    const [contador, setContador] = useState(1);

    useEffect(() => {
        document.title =  `${contador}` ;
    }, [contador]);

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <button onClick = {restarContador} > - </button>
            <strong> {contador} </strong>
            <button onClick = {sumarContador} > + </button>
        </div>
    )
}

export default Contador