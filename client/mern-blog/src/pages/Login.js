import React from 'react'

const Login = () => {
  return (
    <form className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password'/>
        <button>Login</button>
    </form>
  )
}

export default Login