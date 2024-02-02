import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/items/ItemListContainer.jsx'
import ItemCount from './components/items/ItemCount.jsx'
import Item from './components/items/Item.jsx'
import { Button } from '@chakra-ui/react'
import CounterComponent from './components/CounterComponent.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Cart from './components/Cart.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/cart' element={<Cart />} />

      </Routes>
      <Button>Agregar</Button>
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"} />
      <ItemCount>Contador</ItemCount>
      <Item />
      <CounterComponent />
      <p className='titulo'>Tienda electronica</p>
    </BrowserRouter>
  )
}

export default App
