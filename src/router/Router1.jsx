import React, { useEffect, useContext } from 'react'
import Context from '../context/Context'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import RutaPublica from './RutaPublica'
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
        <Route path='/*' element={<Router2 />} />
      </Routes>
    </>
  )
}

export default Router1
