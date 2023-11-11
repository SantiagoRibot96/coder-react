//POR PROPS
/* const Nieto = ({herencia}) => {
  return (
    <>
        <p>Mi herencia es de: {herencia.efectivo}</p>
        <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
        <p>Hago fiestas en estas casas: {herencia.propiedades}</p>
        <p>Gasto toda esta nafta: {herencia.nafta}</p>
    </>
  )
}

export default Nieto */


//POR CONTEXTO
/* import { Contexto } from "../../context/context"


const Nieto = () => {
  return (
        <Contexto.Consumer>
            {
                (herencia) => (
                    <div>
                        <p>Mi herencia es de: {herencia.efectivo}</p>
                        <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
                        <p>Hago fiestas en estas casas: {herencia.propiedades}</p>
                        <p>Gasto toda esta nafta: {herencia.nafta}</p>
                    </div>
                )
            }
        </Contexto.Consumer>
  )
}

export default Nieto */


//POR CONTEXTO USANDO HOOKS
import { useContext } from "react"
import { Contexto } from "../../context/context"

const Nieto = () => {

    const herencia = useContext(Contexto);

    return (
        <div>
            <p>Mi herencia es de: {herencia.efectivo}</p>
            <p>Tengo estos vehiculos: {herencia.vehiculos}</p>
            <p>Hago fiestas en estas casas: {herencia.propiedades}</p>
            <p>Gasto toda esta nafta: {herencia.nafta}</p>
        </div>
    )
}

export default Nieto