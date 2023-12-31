import React, { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // const register = async (e) => {
  //   e.preventDefault()
  //   await fetch('http://localhost:4000/register', {
  //     method: 'POST',
  //     body: JSON.stringify({username,password}),
  //     headers: {'Content-Type':'application/json'},
  //   })
  // }
  const register = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error(`Server returned ${response.status} ${response.statusText}`);
      }
  
      // Handle successful response (parse response data, redirect, etc.)
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      // Handle fetch errors (network issues, server errors)
      console.error('Fetch error:', error.message);
    }
  };
  
  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input type='text' 
               placeholder='Username' 
               value={username} 
               onChange={e => setUsername(e.target.value)} />
        <input type='password' 
               placeholder='Password'
               value={password}
               onChange={e => setPassword(e.target.value)} />
        <button>Register</button>
    </form>
  )
}

export default Register