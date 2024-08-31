import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const Login = () => {
  const {dispatchLog, setUsername} = useContext(Context)
  const [input, setInput] = useState('')
  const navegarA = useNavigate()

  const handleClick = () => {
    dispatchLog({ type: 'login' })
    localStorage.setItem('user', input)
    setUsername(input)
    setInput('')
    navegarA('/no', { replace: true })
  }

  return (
    <div className='login'>
      <h2>Ingrese su nombre de usuario</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={handleClick}>Ingresar</button>
    </div>
  )
}

export default Login
