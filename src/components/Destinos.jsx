import React from 'react'
import data from '../data/data'
import DestinoCard from './DestinoCard'

const Destinos = ({ zona }) => {

  return (
  <div className='destinos-wrapper'>
  {data.map((elem, index) => {
    if (elem.zona == zona ) {
      return <DestinoCard dest={elem} i={index} key={index}/>
    }
  })}
  </div>
  )
}

export default Destinos
