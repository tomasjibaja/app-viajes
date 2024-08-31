import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import { useContext } from 'react'

const Nav = () => {
  const {dispatchLog, username, setUsername} = useContext(Context)
  const navegarA = useNavigate()

  const handleClick = () => {
    dispatchLog({ type: 'logout' });
    setUsername('');
    navegarA('/', { replace: true })
  }

  return (
    <nav>
      <NavLink to='/no'>NOA</NavLink>
      <NavLink to='/cp'>Centro y Patagonia</NavLink>
      <NavLink to='/recorrido'>Recorrido</NavLink>
      <div className='account'>
        <span>&#9823;{username}</span>
        <button onClick={handleClick} className='log'>logout</button>
      </div>
    </nav>
  )
}

export default Nav
