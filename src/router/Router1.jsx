import React, { useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Context from '../context/Context'
import Login from '../components/Login'
import RutaPublica from './RutaPublica'
import RutaPrivada from './RutaPrivada'
import Router2 from './Router2'

const Router1 = () => {

  const {setUsername} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('user') != null) {
      setUsername(localStorage.getItem('user'))
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={
          <RutaPublica>
            <Login />
          </RutaPublica>
          } />
        <Route path='/*' element={
          <RutaPrivada>
            <Router2 />
          </RutaPrivada>
        } />
      </Routes>
    </>
  )
}

export default Router1
