import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Context from '../context/Context'

const RutaPrivada = ({ children }) => {
  const {logged} = useContext(Context)
  return (!logged)
    ? <Navigate to='/login' />
    : children
}

export default RutaPrivada