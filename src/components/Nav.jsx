import React from 'react'
import { BsAirplane } from "react-icons/bs";
import UserNav from './UserNav'
import { useContext } from 'react'
import Context from '../context/Context'
import { useMediaQuery } from 'react-responsive'

const Nav = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)'})

  const { username } = useContext(Context)

  return (
    <nav>
      <h2><BsAirplane />{ !isMobile && '5D Trips'}</h2>
      {username !== '' && <UserNav />}
    </nav>
  )
}

export default Nav
