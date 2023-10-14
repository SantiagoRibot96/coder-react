// import AsyncAwait from './Componentes/Async/AsyncAwait'
// import JsonPlaceHolder from './Componentes/JsonPlaceHolder/JsonPlaceHolder'
// import Form from "./Componentes/Form/Form"
// import Nesflix from "./Componentes/Nesflix/Nesflix"
// import Hooks from "./Componentes/Hooks/Hooks"
// import Mensaje from "./Componentes/Patrones/Mensaje"
// import { mensajeConTitulo } from "./Componentes/Patrones/Patrones"
// import Producto from "./Componentes/Patrones/Producto"
// import { conAumento } from "./Componentes/Patrones/Patrones";
import Login from "./Componentes/Patrones/Login";

const App = () => {

  // const NuevoComponente = mensajeConTitulo(Mensaje);
  // const NuevoProducto = conAumento(Producto);

  return (
    <div>
      {/* <AsyncAwait/> */}
      {/* <JsonPlaceHolder/> */}
      {/* <Nesflix/> */}
      {/* <Form/> */}
      {/* <Hooks/> */}
      {/* <NuevoComponente/> */}
      {/* <NuevoProducto nombre="tomate" precio={250}/> */}
      <Login/>
    </div>
  )
}

export default App