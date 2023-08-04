import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'

const TextFieldComp = () => {
    const [err , setErr] = useState(false)
  return (
    <Container sx={{mt:4}}>
    <TextField id="email"
    label="Email"
    variant="outlined"
    placeholder='Enter your email'
    color='secondary'
    required
    margin='normal'
    error={err}
    helperText={err && "Incorrect Email Format"}
    />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  )
}

export default TextFieldComp