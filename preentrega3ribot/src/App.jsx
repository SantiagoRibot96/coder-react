import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoContext } from './context/CarritoContext'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CarritoContext>
          <Navbar/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
            <Route path='/item/:nombreItem' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h2>Sitio En Construcción </h2>} />
          </Routes>
        </CarritoContext>
      </BrowserRouter>
    </>
  )
}

export default App