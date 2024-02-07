import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
<input type="text" placeholder="username" id="" /><br />
<input type="text" placeholder="password" id="" /><br />
<input type="number" placeholder="phone number" id="" /><br />
<input type="email" placeholder="email id" id="" /><br />
<button>SUBMIT</button>
<br /><br /><br /><br /><br />
<Typography variant='h4'>Login</Typography>
<TextField variant='outlined' label='username' /><br />
<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </div>
  )
}

export default Login