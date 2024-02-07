import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
const incBtn =()=>{
      console.log("inc clicked")
      setCount(count+1)}
const decBtn =()=>{
      console.log("dec clicked")
      setCount(count-1)
    }


  return (
    <div style={{paddingTop:"80px"}}><Typography >counter value: {count} </Typography>
    <Button variant='contained' color="success" onClick={incBtn}>+</Button> 
    <Button variant='contained' color="error" onClick={decBtn}>-</Button>
    
    </div>

  )
}

export default Counter