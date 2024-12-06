import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import { PiSealCheckFill } from "react-icons/pi";

const DestinoCard = ({ dest, i }) => {

  const navergarA = useNavigate()
  const {recorrido, setPageScroll} = useContext(Context)

  const handleClick = (i) => {
    setPageScroll(window.scrollY)
    navergarA( `/destino/${i}`, { replace: true })
  }

  return (
    <div className="destino-card card-fade">
      <h2>{dest.nombre}</h2>
      <p>{dest.situacion}</p>
      <img src={`./images/${dest.imagen}`} alt="imagen turismo" />
      {(recorrido.find((destino) => dest.nombre == destino.nombre) != undefined) && <span className='greenball'><PiSealCheckFill /></span>}
      <button onClick={() => handleClick(i)}>Más Info</button>
    </div>
  )
}

export default DestinoCard
