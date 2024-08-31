import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Destinos from '../components/Destinos'
import Recorrido from '../components/Recorrido'
import NotFound from '../components/NotFound'
import Destino from '../components/Destino'

const Router2 = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/no' element={<Destinos zona={'no'} />} />
        <Route path='/cp' element={<Destinos zona={'cp'} />} />
        <Route path='/recorrido' element={<Recorrido />} />
        <Route path='/destino/:id' element={<Destino />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Router2