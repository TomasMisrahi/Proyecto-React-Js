import './App.css'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'
import Item from './components/Item'
import { Button } from '@chakra-ui/react'
import CounterComponent from './components/CounterComponent.jsx'

const App = () => { 
  return (
    <div>
      <Navbar/>
      <Button>Agregar</Button>
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"}/>
      <ItemCount>Contador</ItemCount>
      <Item/>
      <CounterComponent/>
      <p className='titulo'>Tienda electronica</p> 
    </div>
  )
}

export default App
