import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default Login