import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div><AppBar>
        <Toolbar>
            <Typography><h3><b>Telegram</b></h3></Typography> &nbsp;

            <Button variant="contained" color="success">
    log in
     </Button> &nbsp;
     <Button variant="contained" color="error">
 sign up</Button>
</Toolbar>
        </AppBar></div>
  )
}

export default Appbar