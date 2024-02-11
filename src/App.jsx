import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/items/ItemListContainer.jsx'
import ItemDetailContainer from './components/items/ItemDetailContainer.jsx'
import ItemCount from './components/items/ItemCount.jsx'
import CounterComponent from './components/CounterComponent.jsx'
import Cart from './components/Cart.jsx'
import Form from './components/Form.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Button>Agregar</Button>
      <CounterComponent />
      <Form />
    </BrowserRouter>
  )
}

export default App
