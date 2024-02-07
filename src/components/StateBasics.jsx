import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var fname='Mufeedha'
    var [fname,setFname] =  useState("mufeedha")
    const changeName = ()=>{
    console.log ("clicked")
    setFname("hanoona")}
  return (


    <div style={{paddingTop:"80px"}}>
        <Typography variant='h4'>welcome {fname}</Typography>
        <Button variant='contained' onClick={changeName}>change</Button>


    </div>
  )
}

export default StateBasics