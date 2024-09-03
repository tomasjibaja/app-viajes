import React from 'react'
import { useContext, useEffect } from 'react'
import Context from '../context/Context'

const Recorrido = () => {
  const {recorrido, dispatchRecorrido, username} = useContext(Context)
  return (
    <div className='recorrido-wrapper'>
      <h2>Tu recorrido</h2>
      {recorrido.length == 0 && <h5>Aún no has añadido lugares a tu recorrido</h5>}
      {recorrido.map((elem, index) => {
        return (
          <div className="recorrido-item" key={index}>
            <img className='recorrido-item-bkg' src={`../images/${elem.imagen}`} alt="imagen turistica" />
            <h3>{elem.nombre}</h3>
            <h4>${elem.precio}</h4>
            <button onClick={() => dispatchRecorrido({ type: 'cancelar', payload: elem.nombre})}>&#10005;</button>
          </div>
        )
      })}
      <h4>Reserva a nombre de <span className='recorrido-username'>{username}</span></h4>
      <h3>Total a pagar: <span className='recorrido-precio'>${recorrido.reduce((suma, elem) => 
        suma + elem.precio
      , 0)}</span></h3>
    </div>
  )
}

export default Recorrido
