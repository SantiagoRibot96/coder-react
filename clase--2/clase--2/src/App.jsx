//import React from 'react'
//import PrincipalTitle from './components/PrincipalTitle/PrincipalTitle'
//import Button from './components/Button/Button'
//import ItemCount from './components/ItemCount/ItemCount'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

//el componente principal de la aplicacion es App.

/* COMPONENTES */
/*
Es un conjunto de elementos que cumplen una funcion especifica en la interfaz del usuario.

Ventajas:
  -Reutilizacion de codigo,
  -Favorece la separacion de responsabilidades,
  -El codigo se vuelve mas facil de entender,
  -Mejora el rendimiento de la aplicacion debido al DOM virtual.

Caracteristicas principales:
  -Renderizar un unico elemento, no puedo poner por ejemplo un div y un p,
  -Pueden recibir propiedades (props),
  -Pueden tener un estado.

Que son las props?
Son objetos que contienen datos que un componente necesita para renderizarse correctamente.
Estas se envian de forma unidireccional de un componente padre a un componente hijo.

Que es un estado?
El estado es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la aplicacion.
*/

const App = () => {
  //Esta parte se utiliza para toda la logica detras del componente

  return (
    //Esta parte es para renderizar todo lo que se ve luego en el html. No es html, es JSX.

    <>
      <Navbar/>
      <ItemListContainer greeting="Hola mundo!"/>
    </>
    // <>
    //   <ItemCount stock={15}/>
    //   <hr />
    //   <ItemCount stock={10}/>
    // </>

    // <>
    //   <PrincipalTitle saludo="Hola mundo"/>
    //   <Button texto="ok"/>
    //   <Button texto="cancelar"/>
    // </>

    // <>
    //   <h1>Tambien puedo renderizar de esta forma</h1>
    //   <p>para no alterar la semantica del html</p>
    // </>

    //<div>
    //  Esto lo puedo renderizar
    //  <p>Esto tambien</p>
    //</div>
    //<p>Esto no</p>
  )
}

export default App