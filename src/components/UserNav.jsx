import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive'
import { FaClipboardList } from "react-icons/fa";
import { PiMountains } from "react-icons/pi";
import { PiCity } from "react-icons/pi";
import { MdLogout } from "react-icons/md";


const UserNav = () => {
  const {dispatchLog, dispatchRecorrido, username, setUsername, setCurrPage} = useContext(Context)
  const navegarA = useNavigate()
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const handleClick = () => {
    dispatchLog({ type: 'logout' });
    dispatchRecorrido({ type: 'eliminar' })
    setUsername('');
    navegarA('/', { replace: true })
  }

  return (
    <>
      <div className="nav-pages">
        <NavLink onClick={() => setCurrPage('/no')} className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/no'>{isMobile ? <PiMountains /> : 'NOA'}</NavLink>
        <NavLink onClick={() => setCurrPage('/cp')} className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/cp'>{isMobile ? <PiCity /> : 'Centro y Patagonia'}</NavLink>
        <NavLink className={({isActive}) => (isActive ? 'active-navlink' : null)} to='/recorrido'>{isMobile ? <FaClipboardList /> : 'Recorrido'}</NavLink>
      </div>
      <div className='account'>
        {!isMobile && <span onClick={() => navegarA('/recorrido')}><FaUserCircle /> {username}</span>}
        <button onClick={handleClick} className='log-button'>{isMobile ? <MdLogout /> : 'logout'}</button>
      </div>
    </>
  )
}

export default UserNav
