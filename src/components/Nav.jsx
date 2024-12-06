import React from 'react'
import { BsAirplane } from "react-icons/bs";
import UserNav from './UserNav'
import { useContext } from 'react'
import Context from '../context/Context'

const Nav = () => {

  const { username } = useContext(Context)

  return (
    <nav>
      <h2><BsAirplane />5D Trips</h2>
      {username !== '' && <UserNav />}
    </nav>
  )
}

export default Nav
