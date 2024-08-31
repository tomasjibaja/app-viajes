import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Context from '../context/Context'

const RutaPublica = ({ children }) => {
  const {logged} = useContext(Context)
  return (!logged)
    ? <Navigate to='/noa' />
    : children
}

export default RutaPublica
