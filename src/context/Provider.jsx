import { useReducer, useState } from 'react'
import Context from './Context'
import data from '../data/data'

const init = () => {
  const valor = localStorage.getItem('estado')
  return {
    estado: (valor != null)
  }
}

const initRecorrido = () => {
  const localArray = localStorage.getItem('recorrido')
  if (localArray != null) {
    return JSON.parse(localArray)
  } else {
    return []
  }
}

const reducerRecorrido = (state, action) => {
  switch (action.type) {
    case 'comprar':
      if (state.find((elem) => (elem.nombre == data[action.payload].nombre)) != undefined) {
        return state
      } else {
        const newState = [ ...state, data[action.payload] ]
        localStorage.setItem('recorrido', JSON.stringify(newState))
        return newState
      }  
    case 'cancelar':
      const newState = state.filter((elem) => action.payload != elem.nombre)
      localStorage.setItem('recorrido', JSON.stringify(newState))
      return newState
    case 'eliminar':
      return []
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
      localStorage.removeItem('user')
      localStorage.removeItem('recorrido')
      return { estado: false }
    default:
      return {}
  }
}

export const Provider = ({ children }) => {
  const [recorrido, dispatchRecorrido] = useReducer(reducerRecorrido, [], initRecorrido)
  const [logged, dispatchLog] = useReducer(reducerLog, {}, init)
  const [username, setUsername] = useState('')

  return (
    <Context.Provider value={{ recorrido, dispatchRecorrido, logged, dispatchLog, username, setUsername }} >
      {children}
    </Context.Provider>
  )
}

export default Provider