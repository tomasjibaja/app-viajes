import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Context from '../context/Context'

const RutaPrivada = ({ children }) => {
  const {logged} = useContext(Context)
  return (logged.estado)
    ? children
    : <Navigate to='/' />
}

export default RutaPrivada