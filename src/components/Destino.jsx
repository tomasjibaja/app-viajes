import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import Context from '../context/Context'
import data from '../data/data'

const Destino = () => {
  const datos = useParams()
  const navegarA = useNavigate()
  const {dispatchRecorrido, recorrido} = useContext(Context)
  const [comprado, setComprado] = useState()

  useEffect(() => {
    setComprado(recorrido.find((elem) => elem.nombre == data[datos.id].nombre) != undefined)
  }, [])

  const handleComprar = () => {
    dispatchRecorrido({ type: 'comprar', payload: datos.id})
    setComprado(true)
  }

  const handleCancelar = () => {
    dispatchRecorrido({ type: 'cancelar', payload: data[datos.id].nombre })
    setComprado(false)
  }

  return (
    <div className='destino-page'>
      <h2>{data[datos.id].nombre}</h2>
      <p>{data[datos.id].situacion}</p>
      <img src={`../images/${data[datos.id].imagen}`} alt="imagen turismo" />
      <h3 className="precio">${data[datos.id].precio}.-</h3>
      {comprado && <h5 className='comprado-msg'>en tu lista de recorrido</h5>}
      <p>{data[datos.id].servicio}</p>
      <div className='buttons-wrapper'>
        {comprado && <button onClick={() => handleCancelar()}>Cancelar</button>}
        {!comprado && <button onClick={() => handleComprar()} className='comprar-btn'>Comprar</button>}
        {/* <button onClick={() => navegarA(`/${data[datos.id].zona}`, { replace: true })} className='volver-btn'>Volver</button> */}
        <button onClick={() => navegarA('../')} className='volver-btn'>Volver</button>
      </div>
    </div>
  )
}

export default Destino
