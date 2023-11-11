/* import Abuelo from "./componentes/Abuelo/Abuelo"


const App = () => {

  const herencia = {
    efectivo: 10000000,
    propiedades: 6,
    vehiculos: 10,
    nafta: 1000
  }


  return (
    <div>
      <Abuelo herencia = {herencia}/>
    </div>
  )
}

export default App */

import { Contexto } from "./context/context"
import Abuelo from "./componentes/Abuelo/Abuelo"

const App = () => {
  
  const herencia = {
    efectivo: 10000000,
    propiedades: 6,
    vehiculos: 10,
    nafta: 1000
  }

  return (
    <div>
      <Contexto.Provider value={herencia}>
        <Abuelo/>
      </Contexto.Provider>
    </div>
  )
}

export default App