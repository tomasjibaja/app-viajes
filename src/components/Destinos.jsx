import React, { useContext } from 'react'
import data from '../data/data'
import DestinoCard from './DestinoCard'
import { useEffect } from 'react'
import Context from '../context/Context'
import { useState } from 'react'

const Destinos = ({ zona }) => {

  const {pageScroll} = useContext(Context)

  let [titulo, setTitulo] = useState('')

  useEffect(() => {
    window.scroll(0, pageScroll)
    setTitulo(zona === 'no' ? 'Noroeste Argentino' : 'Centro y Patagonia')
  }, [])

  return (
    <>
      <h2 className='destinos-title'>{titulo}</h2>
      <div className='destinos-wrapper'>
        {data.map((elem, index) => {
          if (elem.zona == zona ) {
            return <DestinoCard dest={elem} i={index} key={index}/>
          }
        })}
      </div>
    </>
  )
}

export default Destinos
