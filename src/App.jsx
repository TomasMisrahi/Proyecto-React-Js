import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/items/ItemListContainer.jsx'
import ItemDetailContainer from './components/items/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import Loader from './components/Loader.jsx'
import Form from './components/Form.jsx'
import { useState, useEffect } from 'react'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  if (loading) {
    return <Loader />
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path="/orden" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
