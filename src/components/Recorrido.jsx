import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'

const Recorrido = () => {
  const {recorrido, dispatchRecorrido} = useContext(Context)
  return (
    <div className='recorrido-wrapper'>
      <h2>Tu recorrido</h2>
      {recorrido.map((elem, index) => {
        return (
          <div className="recorrido-item" key={index}>
            <h3>{elem.nombre}</h3>
            <h4>${elem.precio}</h4>
            <button onClick={() => dispatchRecorrido({ type: 'cancelar', payload: elem.nombre})}>&#10005;</button>
          </div>
        )
      })}
      <h3>Total a pagar: ${recorrido.reduce((suma, elem) => 
        suma + elem.precio
      , 0)}</h3>
    </div>
  )
}

export default Recorrido
