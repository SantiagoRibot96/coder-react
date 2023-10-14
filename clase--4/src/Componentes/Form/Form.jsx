import { useState } from "react"
import emailjs from "emailjs-com"


const Form = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarMensaje = (e) => {

        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send(
            "service_fmswrqy",
            "template_ai0i8zd",
            templateParams,
            "El97y--32ui9ZdVpv"
        )
            .then( () => console.log("mensaje enviado"))
            .catch(error => console.log(error))

        setNombre("");
        setEmail("");
        setMensaje("");
    }

    return (
        <form onSubmit={enviarMensaje}>
            <label htmlFor="">Nombre: </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label htmlFor="">Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="">Mensaje: </label>
            <textarea onChange={(e) => setMensaje(e.target.value)} value={mensaje} cols="30" rows="10"></textarea>

            <button type="submit">Enviar Mensaje</button>
        </form>
    )
}

export default Form