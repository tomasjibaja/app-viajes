import React, { useContext } from 'react'
import data from '../data/data'
import DestinoCard from './DestinoCard'
import { useEffect } from 'react'
import Context from '../context/Context'

const Destinos = ({ zona }) => {

  const {pageScroll} = useContext(Context)

  useEffect(() => {
    window.scroll(0, pageScroll)
  }, [])

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
