import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
<Typography variant='h3'>registration form</Typography><br />
<TextField id='standard-basic' label='username' variant='standard' /><br />
<TextField id='standard-basic' label='address' variant='standard' /><br />
<TextField id='standard-basic' label='phone number' variant='standard'/><br />
<TextField id='standard-basic' label='email id' variant='standard'/><br /><br />
        <Button variant="contained">
  register
</Button>

    </div>
  )
}

export default Register