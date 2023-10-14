/*
Patrones de diseño:

La finalidad es hacer lo mismo escribiendo menos.

1) Componentes de orden superior
2) Render props

1- Es una funcion que recibe como parametro un componente y devuelve un nuevo componente con una funcionalidad adicional (similar a funciones de orden superior)
2- Es una tecnica de composicion de componentes que me permite enviar la interfaz a ser renderizada en una funcion aparte.
*/

/* Ejemplo 1: Componentes de orden superior */

export const mensajeConTitulo = (Mensaje) => {

    return function () {

        return (
            <>
                <h2>Titulo agregado</h2>
                <Mensaje/>
            </>
        )
    }
}

/* Ejemplo 2: Componentes de orden superior */

export const conAumento = (Producto) => {

    return function ({nombre, precio}) {

        let nuevoPrecio = precio*1.10;

        return <Producto nombre={nombre} precio={nuevoPrecio}/>
    }
}