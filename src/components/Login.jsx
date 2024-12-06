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
    <div className="login-wrapper">
      <div className='login card-fade double-border'>
        <h2>Te damos la bienvenida</h2>
        <p>Ingresa el código de usuario para disfrutar de los mejores destinos de Argentina</p>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button onClick={handleClick}>INGRESAR</button>
      </div>
    </div>
  )
}

export default Login
