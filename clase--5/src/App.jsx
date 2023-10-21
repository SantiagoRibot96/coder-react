import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home/Home'
import Celulares from './componentes/Celulares/Celulares'
import Computadoras from './componentes/Computadoras/Computadoras'
import Menu from './componentes/Menu/Menu'
import Sillas from './componentes/Sillas/Sillas'

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          
          <Routes>
            <Route path='/computadoras' element={ <Computadoras /> } />
            <Route path='/sillas/:tipo' element={ <Sillas /> } />
            <Route path='/celulares' element={ <Celulares /> } />
            <Route path='/' element={ <Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
}

export default App
