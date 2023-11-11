import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productos from './components/Productos/Productos'
import Formulario from './components/Formulario/Formulario'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
          <Route path='/item/:nombreItem' element={ <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>

      <Formulario/>
    </>
  )
}

export default App