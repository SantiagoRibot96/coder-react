import { useState, useEffect } from "react";

//1) Voy a importar el useEffect. 

//El efecto primario de React es renderizar componentes, manipulando el dom. 

//Una aplicación web tien que hacer mucho más que solo mostrarse, tiene que realizar operaciones, consumir datos de servidores, usar eventos. 

//Para poder manipular los efectos secundarios de los cambios de estado vamos a usar un nuevo Hook que se llama useEffect. 




const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(()=> {
        document.title = `Contador: ${contador} `;

    }, [contador])

    //A useEffect le pasamos dos parametros, el primero es una funcion callback con el comportamiendo deseado, y el segundo es un array de dependencias en donde colocamos el estado que queremos estar vigilando. Cuando ese estado cambio se ejecuta nuevamente la funcion que pasamos en el primer argumento. 

    const sumarContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador