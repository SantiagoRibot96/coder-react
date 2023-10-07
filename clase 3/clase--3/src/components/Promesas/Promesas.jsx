import React from 'react'

const Promesas = () => {

    // Programacion sincronica:

    console.log("Tarea 1");
    console.log("Tarea 2");
    
    // Programacion asincronica:

    setTimeout(() => {
        console.log("Tarea 3");
    }, 1000);

    setTimeout(() => {
        console.log("Tarea 4");
    }, 500);

    return (
        <div>Promesas</div>
    )
}

export default Promesas