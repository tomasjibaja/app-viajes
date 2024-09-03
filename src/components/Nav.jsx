import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import { useContext } from 'react'

const Nav = () => {
  const {dispatchLog, dispatchRecorrido, username, setUsername} = useContext(Context)
  const navegarA = useNavigate()
  const [dropMenu, setDropMenu] = useState(false)

  const handleClick = () => {
    dispatchLog({ type: 'logout' });
    dispatchRecorrido({ type: 'eliminar' })
    setUsername('');
    navegarA('/', { replace: true })
  }

  const handleMenu = () => {
    if (dropMenu) {
      document.querySelector('nav').classList.add('menu-dropped')
      document.querySelector('.menu-arrow').innerHTML = '&#8593;'
      setDropMenu(false)
    } else {
      document.querySelector('nav').classList.remove('menu-dropped')
      document.querySelector('.menu-arrow').innerHTML = '&#8595;'
      setDropMenu(true)
    }
  }

  return (
    <nav>
      <NavLink className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/no'>NOA</NavLink>
      <NavLink className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/cp'>Centro y Patagonia</NavLink>
      <NavLink className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/recorrido'>Recorrido</NavLink>
      <div className='account'>
        <span>&#9823;{username}</span>
        <button onClick={handleClick} className='log-button'>logout</button>
      </div>
      <span onClick={handleMenu} className='menu-toggle'><span className='menu-arrow'>&#8595;</span>MENU</span>
    </nav>
  )
}

export default Nav
