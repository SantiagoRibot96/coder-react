import { useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Formulario = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejadorFormulario = (e) => {
    
    e.preventDefault();

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
    <form onSubmit={manejadorFormulario}>
      <h2>Formulario de compra</h2>

      <label htmlFor=""> Nombre</label>
      <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>

      <label htmlFor=""> Apellido</label>
      <input type="text" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
      
      <label htmlFor=""> Telefono</label>
      <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>

      <button type="submit"> Enviar</button>
    </form>
  )
}

export default Formulario