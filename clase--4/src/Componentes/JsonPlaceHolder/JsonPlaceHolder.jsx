import { useState, useEffect } from 'react'


const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);

    //Opcion 1: Fetch
    // useEffect( () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(respuesta => respuesta.json())
    //         .then(respuesta => setUsuarios(respuesta))
    //         .catch(error => console.log(error))
    // }, [] );

    //Opcion 2: AsyncAwait
    try {
        const pedirUsuarios = async () => {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await respuesta.json();
            setUsuarios(data);
        }

        pedirUsuarios();
    } catch(error) {
        console.log(error);
    }

    return (
    <div>
        <h2>Mis usuarios usando Fetch a una API</h2>

        <ul>
            {
                usuarios.map((item) => {
                    return(
                        <li key={item.id}>
                            <p> id:         {item.id} </p>
                            <p> nombre:     {item.name} </p>
                            <p> usuario:    {item.username} </p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
}

export default JsonPlaceHolder