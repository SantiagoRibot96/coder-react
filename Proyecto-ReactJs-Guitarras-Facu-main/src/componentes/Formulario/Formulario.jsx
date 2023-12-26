import React from 'react'
import { useState } from 'react';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';



const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");



    const manejadorFormulario = (event) => {
        event.preventDefault();

        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        });

        setNombre("");
        setApellido("");
        setTelefono("");
    }





    return (
        <div>
            <form onSubmit={manejadorFormulario}>


                <h2> Formulario de Contacto </h2>
                <hr></hr>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} id="nombre"/>
                <br></br>

                <label htmlFor="apellido"> Apellido </label>
                <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido} id="apellido"/>
                <br></br>

                <label htmlFor="celular"> Telefono </label>
                <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} id="celular"/>
                <br></br>

                <button type="submit"> Enviar </button>

            </form>
        
        </div>
    )
}

export default Formulario