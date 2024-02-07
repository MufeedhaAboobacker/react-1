import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
const UseE = () => {
var [name,setName] = useState()
 const changeHname=()=>{setName("Home")}
 const changeGname=()=>{setName("Gallary")}
 const changeCname=()=>{setName("Contact")}
 useEffect(()=>{
    changeHname()
 },[])
return (
    <div style ={{paddingTop:"80px"}}>
<Button variant='contained' color='primary' onClick={changeHname}>home</Button> &nbsp;
<Button variant='contained' color='secondary' onClick={changeGname}>gallary</Button> &nbsp;
<Button variant='contained' color='error'onClick={changeCname}>contact</Button>
<Typography>welcome to {name}</Typography>

    </div>
  )
}

export default UseE