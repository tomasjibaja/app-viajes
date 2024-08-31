import { useReducer, useState } from 'react'
import Context from './Context'
import data from '../data/data'

const init = () => {
  const valor = localStorage.getItem('estado')
  return {
    estado: (valor != null)
  }
}

const reducerRecorrido = (state, action) => {
  switch (action.type) {
    case 'comprar':
      if (state.find((elem) => (elem.nombre == data[action.payload].nombre)) != undefined) {
        return state
      } else {
        return [ ...state, data[action.payload] ]
      }  
    case 'cancelar':
      return state.filter((elem) => action.payload != elem.nombre)
    default:
      return state
  }
}

const reducerLog = (state, action) => {
  switch (action.type) {
    case 'login':
      localStorage.setItem('estado', true)
      return { estado: true }
    case 'logout':
      localStorage.removeItem('estado')
      return { estado: false }
    default:
      return {}
  }
}

export const Provider = ({ children }) => {
  const [recorrido, dispatchRecorrido] = useReducer(reducerRecorrido, [])
  const [logged, dispatchLog] = useReducer(reducerLog, {}, init)
  const [username, setUsername] = useState('')


  return (
    <Context.Provider value={{ recorrido, dispatchRecorrido, logged, dispatchLog, username, setUsername }} >
      {children}
    </Context.Provider>
  )
}

export default Provider