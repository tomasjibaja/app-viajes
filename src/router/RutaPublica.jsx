import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Context from '../context/Context'

const RutaPublica = ({ children }) => {
  const {logged} = useContext(Context)
  return (logged.estado)
    ? <Navigate to='/no' />
    : children
}

export default RutaPublica
